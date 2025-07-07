import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RoomCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  href: string;
}

export default function RoomCard({
  title,
  description,
  price,
  image,
  amenities,
  href,
}: RoomCardProps) {
  return (
    <Card className="overflow-hidden transition-luxury hover:shadow-luxury hover-lift bg-card border-border/50">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
        <div className="absolute top-4 right-4 bg-luxury/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          Featured
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-luxury">{title}</h3>
          <div className="text-right">
            <span className="text-lg font-bold text-luxury">${price}</span>
            <span className="text-sm text-muted-foreground">/night</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mb-4">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-gold" />
              <span className="text-foreground">{amenity}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between gap-3">
        <Button variant="outline" asChild className="border-luxury/30 text-luxury hover:bg-luxury-light transition-luxury">
          <Link href={href}>View Details</Link>
        </Button>
        <Button asChild className="bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury">
          <Link href="/booking">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}