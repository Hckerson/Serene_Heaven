import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const amenities = [
  {
    title: "Infinity Pool",
    description: "Enjoy our stunning infinity pool overlooking the ocean.",
    image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    href: "/amenities#pool",
  },
  {
    title: "Luxury Spa",
    description: "Rejuvenate with our range of spa treatments and therapies.",
    image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    href: "/amenities#spa",
  },
  {
    title: "Fine Dining",
    description: "Savor exquisite cuisine prepared by our award-winning chefs.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    href: "/amenities#dining",
  },
  {
    title: "Fitness Center",
    description: "Stay active in our state-of-the-art fitness center.",
    image: "https://images.pexels.com/photos/260447/pexels-photo-260447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    href: "/amenities#fitness",
  },
];

export default function AmenityGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {amenities.map((amenity, index) => (
        <Link href={amenity.href} key={index} className="group">
          <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
            <div className="aspect-video relative">
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{amenity.title}</h3>
            </div>
            <CardContent className="p-4">
              <p className="text-muted-foreground">{amenity.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}