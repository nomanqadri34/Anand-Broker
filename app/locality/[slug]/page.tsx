"use client";

import React from "react";
import { useParams } from "next/navigation";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Button } from "@/components/ui/Button";
import { MapPin, TrendingUp, Landmark, Info, ArrowUpRight } from "lucide-react";

export default function LocalityPage() {
  const params = useParams();
  const slug = params.slug as string;
  const name = slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ");

  const properties = [
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Tower",
      price: "₹1.2Cr",
      location: `${name}, Pune`,
      beds: 3,
      baths: 3,
      sqft: 2100,
      tag: "Best Value"
    },
    {
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      title: "Royal Residency",
      price: "₹85L",
      location: `${name}, Pune`,
      beds: 2,
      baths: 2,
      sqft: 1350,
      tag: "New Launch"
    }
  ];

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Locality Header */}
        <section className="mb-16 bg-white p-12 rounded-[2.5rem] shadow-sm border border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-12" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-xs">
                <MapPin className="w-4 h-4" />
                Featured Locality in Pune
              </div>
              <h1 className="text-5xl md:text-6xl font-playfair font-black text-primary font-serif">
                {name} <span className="text-accent underline decoration-accent/20">Market</span>
              </h1>
              <p className="text-gray-500 max-w-xl text-lg leading-relaxed">
                Discover why {name} is one of the fastest-growing residential hubs in Pune. Top-tier amenities, IT connectivity, and premium lifestyle awaits.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { icon: TrendingUp, label: "Price Growth", val: "12% YoY" },
                  { icon: Landmark, label: "Invest Potential", val: "High" },
                  { icon: Info, label: "IT Prox", val: "5 mins" }
                ].map(stat => (
                  <div key={stat.label} className="bg-gray-50 border border-border px-4 py-2 rounded-xl flex items-center gap-3">
                    <stat.icon className="w-4 h-4 text-accent" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-tighter leading-none">{stat.label}</span>
                      <span className="text-sm font-bold text-primary">{stat.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="accent" size="lg" className="w-full md:w-auto">
              Post Property in {name}
            </Button>
          </div>
        </section>

        {/* Listings Section */}
        <div className="mb-12 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-primary">Properties in {name}</h2>
          <Button variant="ghost" className="text-accent underline">View all {name} listings</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop, i) => (
            <PropertyCard key={i} {...prop} />
          ))}
        </div>

        {/* SEO Content Section */}
        <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-primary p-16 rounded-[2.5rem] text-white">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight">Why Choose {name}?</h3>
            <p className="text-gray-400 leading-relaxed">
              {name} offers a perfect blend of urban convenience and natural beauty. With proximity to major IT parks like Hinjewadi and Magarpatta, it's the preferred choice for professionals. The locality boasts top-tier schools like Orchid International and Bliss Schools, world-class hospitals, and vibrant shopping malls.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               {["Smart City Connectivity", "Lush Green Parks", "Safe Neighborhood", "Premium Amenities"].map(feat => (
                 <div key={feat} className="flex items-center gap-2 font-bold text-sm">
                   <div className="w-2 h-2 bg-accent rounded-full" />
                   {feat}
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center flex-col p-8 text-center gap-4 group cursor-pointer hover:bg-white/10 transition-all">
               <ArrowUpRight className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" />
               <h4 className="text-xl font-bold">Download {name} Market Report 2026</h4>
               <p className="text-xs text-gray-500">Get deep insights into price trends, rental yields, and upcoming projects in {name}.</p>
               <Button variant="accent" className="w-full">Get Free PDF</Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
