"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { format, addDays, differenceInDays } from "date-fns";
import { CalendarIcon, Users, ChevronLeft, ChevronRight, Check, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { fetchRooms, fetchExtras, submitBooking } from "@/lib/api";
import { Room, Extra, BookingRequest } from "@/data/mock-data";
import Image from "next/image";

interface BookingWizardProps {
  initialRoom?: Room;
  onComplete?: (bookingId: string) => void;
}

type BookingStep = 'dates' | 'room' | 'extras' | 'guest-info' | 'payment' | 'confirmation';

export function BookingWizard({ initialRoom, onComplete }: BookingWizardProps) {
  const [currentStep, setCurrentStep] = useState<BookingStep>('dates');
  const [isLoading, setIsLoading] = useState(false);
  
  // Booking state
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(initialRoom);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  
  // Data state
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);
  const [availableExtras, setAvailableExtras] = useState<Extra[]>([]);
  const [bookingResult, setBookingResult] = useState<any>(null);

  const steps: { key: BookingStep; title: string; description: string }[] = [
    { key: 'dates', title: 'Select Dates', description: 'Choose your check-in and check-out dates' },
    { key: 'room', title: 'Choose Room', description: 'Select your preferred accommodation' },
    { key: 'extras', title: 'Add Extras', description: 'Enhance your stay with additional services' },
    { key: 'guest-info', title: 'Guest Information', description: 'Provide your contact details' },
    { key: 'payment', title: 'Payment', description: 'Complete your booking' },
    { key: 'confirmation', title: 'Confirmation', description: 'Booking confirmed' },
  ];

  const currentStepIndex = steps.findIndex(step => step.key === currentStep);
  const nightsCount = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;

  // Load rooms when dates change
  useEffect(() => {
    if (checkIn && checkOut && currentStep === 'room') {
      loadRooms();
    }
  }, [checkIn, checkOut, guests, currentStep]);

  // Load extras
  useEffect(() => {
    if (currentStep === 'extras') {
      loadExtras();
    }
  }, [currentStep]);

  const loadRooms = async () => {
    setIsLoading(true);
    try {
      const response = await fetchRooms({
        checkIn: checkIn?.toISOString(),
        checkOut: checkOut?.toISOString(),
        guests,
      });
      if (response.success) {
        setAvailableRooms(response.data);
      }
    } catch (error) {
      console.error('Failed to load rooms:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadExtras = async () => {
    setIsLoading(true);
    try {
      const response = await fetchExtras();
      if (response.success) {
        setAvailableExtras(response.data);
      }
    } catch (error) {
      console.error('Failed to load extras:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckInSelect = (date: Date | undefined) => {
    setCheckIn(date);
    if (date && (!checkOut || date >= checkOut)) {
      setCheckOut(addDays(date, 1));
    }
  };

  const handleNext = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].key);
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].key);
    }
  };

  const handleSubmitBooking = async () => {
    if (!selectedRoom || !checkIn || !checkOut) return;

    setIsLoading(true);
    try {
      const bookingRequest: BookingRequest = {
        roomId: selectedRoom.id,
        checkIn: checkIn.toISOString(),
        checkOut: checkOut.toISOString(),
        guests,
        extras: selectedExtras,
        guestInfo,
      };

      const response = await submitBooking(bookingRequest);
      if (response.success) {
        setBookingResult(response.data);
        setCurrentStep('confirmation');
        onComplete?.(response.data.bookingId);
      }
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateTotal = () => {
    if (!selectedRoom) return 0;
    
    const roomTotal = selectedRoom.price * nightsCount;
    const extrasTotal = selectedExtras.reduce((total, extraId) => {
      const extra = availableExtras.find(e => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);
    
    return roomTotal + extrasTotal;
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'dates':
        return checkIn && checkOut && nightsCount > 0;
      case 'room':
        return selectedRoom;
      case 'extras':
        return true; // Optional step
      case 'guest-info':
        return guestInfo.firstName && guestInfo.lastName && guestInfo.email;
      case 'payment':
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.key} className="flex items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors",
                index <= currentStepIndex
                  ? "bg-luxury text-primary-foreground border-luxury"
                  : "bg-background text-muted-foreground border-border"
              )}>
                {index < currentStepIndex ? (
                  <Check className="h-5 w-5" />
                ) : (
                  index + 1
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "h-0.5 w-16 mx-2 transition-colors",
                  index < currentStepIndex ? "bg-luxury" : "bg-border"
                )} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold text-luxury">
            {steps[currentStepIndex].title}
          </h2>
          <p className="text-muted-foreground">
            {steps[currentStepIndex].description}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <Card className="mb-6">
        <CardContent className="p-6">
          {currentStep === 'dates' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-in Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkIn && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={handleCheckInSelect}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Check-out Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !checkOut && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) => !checkIn || date <= checkIn}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Guests</label>
                <Select value={guests.toString()} onValueChange={(value) => setGuests(parseInt(value))}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} Guest{num !== 1 ? 's' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {nightsCount > 0 && (
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    {nightsCount} night{nightsCount !== 1 ? 's' : ''} • {guests} guest{guests !== 1 ? 's' : ''}
                  </p>
                </div>
              )}
            </div>
          )}

          {currentStep === 'room' && (
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <LoadingSpinner size="lg" />
                </div>
              ) : (
                <div className="grid gap-4">
                  {availableRooms.map((room) => (
                    <Card
                      key={room.id}
                      className={cn(
                        "cursor-pointer transition-all hover:shadow-luxury",
                        selectedRoom?.id === room.id && "ring-2 ring-luxury"
                      )}
                      onClick={() => setSelectedRoom(room)}
                    >
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                            <Image
                              src={room.images[0]}
                              alt={room.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-semibold text-luxury">{room.name}</h3>
                              <div className="text-right">
                                <p className="text-lg font-bold">${room.price}</p>
                                <p className="text-sm text-muted-foreground">per night</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{room.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {room.amenities.slice(0, 4).map((amenity) => (
                                <span
                                  key={amenity}
                                  className="text-xs bg-muted px-2 py-1 rounded"
                                >
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentStep === 'extras' && (
            <div className="space-y-4">
              {isLoading ? (
                <div className="flex justify-center py-8">
                  <LoadingSpinner size="lg" />
                </div>
              ) : (
                <div className="grid gap-4">
                  {availableExtras.map((extra) => (
                    <Card key={extra.id} className="p-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={extra.id}
                          checked={selectedExtras.includes(extra.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedExtras([...selectedExtras, extra.id]);
                            } else {
                              setSelectedExtras(selectedExtras.filter(id => id !== extra.id));
                            }
                          }}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <label htmlFor={extra.id} className="font-medium cursor-pointer">
                                {extra.name}
                              </label>
                              <p className="text-sm text-muted-foreground">{extra.description}</p>
                            </div>
                            <p className="font-semibold">${extra.price}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentStep === 'guest-info' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    value={guestInfo.firstName}
                    onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    value={guestInfo.lastName}
                    onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={guestInfo.email}
                  onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={guestInfo.phone}
                  onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                />
              </div>
            </div>
          )}

          {currentStep === 'payment' && (
            <div className="space-y-6">
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold mb-2">Booking Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{selectedRoom?.name}</span>
                    <span>${selectedRoom?.price} × {nightsCount} nights</span>
                  </div>
                  {selectedExtras.map((extraId) => {
                    const extra = availableExtras.find(e => e.id === extraId);
                    return extra ? (
                      <div key={extraId} className="flex justify-between">
                        <span>{extra.name}</span>
                        <span>${extra.price}</span>
                      </div>
                    ) : null;
                  })}
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Payment Information</h3>
                <p className="text-sm text-muted-foreground">
                  This is a demo booking system. No actual payment will be processed.
                </p>
                <Button
                  onClick={handleSubmitBooking}
                  disabled={isLoading}
                  className="w-full bg-luxury hover:bg-luxury/90"
                  size="lg"
                >
                  {isLoading ? (
                    <LoadingSpinner size="sm" className="mr-2" />
                  ) : (
                    <CreditCard className="mr-2 h-4 w-4" />
                  )}
                  Complete Booking - ${calculateTotal()}
                </Button>
              </div>
            </div>
          )}

          {currentStep === 'confirmation' && bookingResult && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-luxury mb-2">Booking Confirmed!</h3>
                <p className="text-muted-foreground">
                  Your reservation has been successfully confirmed.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg text-left">
                <h4 className="font-semibold mb-2">Booking Details</h4>
                <div className="space-y-1 text-sm">
                  <p><strong>Confirmation Number:</strong> {bookingResult.confirmationNumber}</p>
                  <p><strong>Room:</strong> {selectedRoom?.name}</p>
                  <p><strong>Check-in:</strong> {checkIn ? format(checkIn, "PPP") : ''}</p>
                  <p><strong>Check-out:</strong> {checkOut ? format(checkOut, "PPP") : ''}</p>
                  <p><strong>Guests:</strong> {guests}</p>
                  <p><strong>Total Amount:</strong> ${bookingResult.totalAmount}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to {guestInfo.email}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      {currentStep !== 'confirmation' && (
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStepIndex === 0}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          {currentStep !== 'payment' && (
            <Button
              onClick={handleNext}
              disabled={!canProceed() || isLoading}
              className="bg-luxury hover:bg-luxury/90"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}