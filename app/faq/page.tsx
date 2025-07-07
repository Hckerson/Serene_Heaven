import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Booking & Reservations",
      questions: [
        {
          question: "How can I make a reservation?",
          answer: "You can make a reservation through our website booking system, by calling our reservations team at +1 (888) 555-1234, or by emailing bookings@serenehaven.com. We recommend booking in advance, especially during peak seasons."
        },
        {
          question: "What is your cancellation policy?",
          answer: "We offer free cancellation up to 48 hours before your scheduled check-in time. Cancellations made within 48 hours of arrival may incur a charge equal to one night's stay. Special packages and promotional rates may have different cancellation terms."
        },
        {
          question: "Can I modify my reservation?",
          answer: "Yes, you can modify your reservation subject to availability. Changes to dates, room type, or number of guests can be made by contacting our reservations team. Please note that rate changes may apply based on availability and current pricing."
        },
        {
          question: "Do you offer a best rate guarantee?",
          answer: "Yes, we guarantee the best rates when you book directly through our website. If you find a lower rate for the same room type and dates on another website, we'll match it and give you an additional 10% discount."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers. A valid credit card is required to guarantee your reservation, and payment is typically processed upon check-in."
        }
      ]
    },
    {
      category: "Check-in & Check-out",
      questions: [
        {
          question: "What are your check-in and check-out times?",
          answer: "Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request and subject to availability. We offer complimentary luggage storage if you arrive before check-in time."
        },
        {
          question: "What do I need to bring for check-in?",
          answer: "Please bring a valid government-issued photo ID (passport or driver's license) and the credit card used for the reservation. International guests may need to provide additional documentation as required by local regulations."
        },
        {
          question: "Is early check-in or late check-out available?",
          answer: "Early check-in (before 3:00 PM) and late check-out (after 12:00 PM) are available upon request and subject to availability. There may be additional charges for late check-out after 2:00 PM. Please contact the front desk to arrange."
        },
        {
          question: "Do you offer express check-in/check-out?",
          answer: "Yes, we offer express check-in and check-out services. You can complete check-in online 24 hours before arrival, and we provide express check-out via your room's television system or mobile app."
        }
      ]
    },
    {
      category: "Hotel Amenities & Services",
      questions: [
        {
          question: "Do you provide airport transfers?",
          answer: "Yes, we offer airport transfer services for all guests. Please provide your flight details at least 48 hours prior to arrival. Transfer fees apply and vary based on distance and vehicle type. Luxury vehicle options are available upon request."
        },
        {
          question: "Is WiFi available throughout the hotel?",
          answer: "Yes, complimentary high-speed WiFi is available throughout the entire resort, including all guest rooms, public areas, restaurants, and outdoor spaces. We also offer premium WiFi packages for enhanced bandwidth if needed."
        },
        {
          question: "What dining options are available?",
          answer: "We have four dining venues: Azure Restaurant (fine dining), Sunset Terrace (Mediterranean & grill), Lobby Lounge (light bites & cocktails), and Poolside Café (casual dining). We also offer 24/7 room service and can accommodate special dietary requirements."
        },
        {
          question: "Do you have a spa and fitness center?",
          answer: "Yes, our Serenity Spa offers a full range of treatments and wellness programs. Our fitness center is open 24/7 and features state-of-the-art equipment, yoga classes, and personal training services. Spa treatments require advance booking."
        },
        {
          question: "Is parking available?",
          answer: "Yes, we provide complimentary valet parking for all guests. Self-parking is also available. Electric vehicle charging stations are available upon request. Oversized vehicles may require special arrangements."
        }
      ]
    },
    {
      category: "Room Information",
      questions: [
        {
          question: "What amenities are included in the rooms?",
          answer: "All rooms include complimentary WiFi, air conditioning, minibar, coffee/tea making facilities, premium toiletries, bathrobes and slippers, safe, and flat-screen TV with international channels. Suites include additional amenities like separate living areas and premium services."
        },
        {
          question: "Are rooms non-smoking?",
          answer: "Yes, all our rooms and suites are non-smoking. Designated smoking areas are available on outdoor terraces and in specified outdoor locations throughout the resort. A cleaning fee will be charged for smoking in non-smoking areas."
        },
        {
          question: "Can I request a specific room or floor?",
          answer: "Yes, you can request specific room preferences such as floor level, view, or location within the hotel. While we cannot guarantee specific room assignments, we will do our best to accommodate your preferences based on availability."
        },
        {
          question: "Do you provide cribs or extra beds?",
          answer: "Yes, cribs are available free of charge for children under 2 years old. Rollaway beds can be provided for an additional fee, subject to room size and availability. Please request these items at the time of booking or at least 24 hours in advance."
        }
      ]
    },
    {
      category: "Policies & Guidelines",
      questions: [
        {
          question: "What is your pet policy?",
          answer: "We are a pet-friendly hotel and welcome well-behaved pets up to 30 pounds. There is a pet fee of $50 per night, and pets must be leashed in public areas. Pet amenities and services are available upon request. Please inform us of your pet when booking."
        },
        {
          question: "Do you allow children? Is there a kids' club?",
          answer: "Yes, we welcome families with children of all ages. We offer a supervised kids' club with age-appropriate activities, babysitting services, and family-friendly amenities. Children under 12 stay free when sharing a room with parents using existing bedding."
        },
        {
          question: "What is your dress code policy?",
          answer: "Our dress code varies by venue: Azure Restaurant requires smart casual attire for dinner (no beachwear), while other restaurants and the poolside café have a more relaxed dress code. Swimwear is appropriate for pool and beach areas only."
        },
        {
          question: "Do you have age restrictions for certain areas?",
          answer: "The spa and fitness center are restricted to guests 16 years and older. Some evening entertainment and bar areas may have age restrictions. The infinity pool and beach areas are family-friendly with no age restrictions."
        },
        {
          question: "What is your policy on outside food and beverages?",
          answer: "Outside food and beverages are not permitted in the hotel's dining areas or public spaces. However, you may enjoy outside food and drinks in your room or on your private balcony/terrace. Special arrangements can be made for celebrations with advance notice."
        }
      ]
    },
    {
      category: "Special Requests & Services",
      questions: [
        {
          question: "Can you arrange special celebrations or events?",
          answer: "Yes, our concierge team specializes in arranging special celebrations including birthdays, anniversaries, proposals, and small events. We offer customized packages with decorations, dining arrangements, and special amenities. Please contact us at least 48 hours in advance."
        },
        {
          question: "Do you offer laundry and dry cleaning services?",
          answer: "Yes, we provide same-day laundry and dry cleaning services Monday through Friday. Express service is available for an additional fee. We also have self-service laundry facilities available 24/7 for guest use."
        },
        {
          question: "Can you help with tour bookings and local activities?",
          answer: "Absolutely! Our concierge team can arrange various local tours, activities, and excursions including boat trips, cultural tours, adventure activities, and transportation. We partner with reputable local operators to ensure quality experiences."
        },
        {
          question: "Do you provide business services?",
          answer: "Yes, our business center offers printing, copying, faxing, and computer access. We have meeting rooms available for rent, and our concierge can arrange business services like translation, secretarial support, and equipment rental."
        },
        {
          question: "What accessibility features do you offer?",
          answer: "We are committed to accessibility and offer ADA-compliant rooms with roll-in showers, grab bars, and accessible furniture. Our public areas are wheelchair accessible, and we provide assistive devices upon request. Please inform us of any special needs when booking."
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-warm py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury/5 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-24 -translate-x-24" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-luxury font-medium mb-6">
              <div className="w-8 h-0.5 bg-luxury" />
              <span>Help Center</span>
              <div className="w-8 h-0.5 bg-luxury" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-luxury">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Find answers to common questions about your stay at Serene Heaven. 
              If you can't find what you're looking for, our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-luxury">{category.category}</h2>
                <Card className="shadow-warm">
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-border/50">
                          <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/30 transition-colors">
                            <span className="font-medium text-luxury">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-luxury">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2 text-luxury">Booking Policies</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about our reservation, cancellation, and modification policies.
                  </p>
                  <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                    <Link href="/legal/terms">View Policies</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2 text-luxury">Room Information</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore our rooms and suites with detailed amenity information.
                  </p>
                  <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                    <Link href="/rooms">View Rooms</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-2 text-luxury">Hotel Amenities</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Discover all the facilities and services available during your stay.
                  </p>
                  <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
                    <Link href="/amenities">View Amenities</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-luxury">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our friendly team is available 24/7 to assist you with any questions or special requests.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-luxury" />
                  </div>
                  <h3 className="font-semibold mb-2 text-luxury">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our team
                  </p>
                  <p className="font-medium text-luxury">+1 (888) 555-1234</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-luxury" />
                  </div>
                  <h3 className="font-semibold mb-2 text-luxury">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send us your questions
                  </p>
                  <p className="font-medium text-luxury">info@serenehaven.com</p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-luxury transition-luxury">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-luxury/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-luxury" />
                  </div>
                  <h3 className="font-semibold mb-2 text-luxury">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our support team
                  </p>
                  <Button size="sm" className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg" className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}