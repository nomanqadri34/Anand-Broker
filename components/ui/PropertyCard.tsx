import React from "react";
import Image from "next/image";
import { MapPin, Bed, Bath, Move, MessageCircle } from "lucide-react";
import { Button } from "./Button";

interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  tag?: string;
}

export const PropertyCard = ({
  image,
  title,
  price,
  location,
  beds,
  baths,
  sqft,
  tag,
}: PropertyCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {tag && (
        <div className="absolute top-4 left-4 z-10 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          {tag}
        </div>
      )}
      
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-primary transition-colors group-hover:text-accent">
            {title}
          </h3>
          <span className="text-xl font-black text-accent">{price}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 text-accent" />
          {location}
        </div>

        <div className="grid grid-cols-3 gap-4 border-y border-border py-4 mb-6">
          <div className="flex flex-col items-center">
            <Bed className="w-5 h-5 text-primary mb-1" />
            <span className="text-xs text-gray-500">{beds} Beds</span>
          </div>
          <div className="flex flex-col items-center border-x border-border">
            <Bath className="w-5 h-5 text-primary mb-1" />
            <span className="text-xs text-gray-500">{baths} Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <Move className="w-5 h-5 text-primary mb-1" />
            <span className="text-xs text-gray-500">{sqft} sqft</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1 text-sm py-2">
            Details
          </Button>
          <Button variant="accent" className="flex-1 text-sm py-2 group/btn">
            <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};
