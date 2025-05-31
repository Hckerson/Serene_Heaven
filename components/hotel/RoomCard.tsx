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
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="text-right">
            <span className="text-lg font-bold">${price}</span>
            <span className="text-sm text-muted-foreground">/night</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mb-4">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-primary" />
              {amenity}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Button variant="outline" asChild>
          <Link href={href}>View Details</Link>
        </Button>
        <Button asChild>
          <Link href="/booking">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}