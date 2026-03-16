"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MapPin, Bed, Bath, Move, Smartphone, 
  MessageCircle, Share2, Heart, ShieldCheck,
  CheckCircle2, Info, Navigation, Calendar,
  Dumbbell, Waves, Shield, Car, Coffee, Trees
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function PropertyDetailPage() {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
  ];

  const amenities = [
    { icon: Dumbbell, name: "Premium Gym" },
    { icon: Waves, name: "Swimming Pool" },
    { icon: Shield, name: "24/7 Security" },
    { icon: Car, name: "Reserved Parking" },
    { icon: Coffee, name: "Clubhouse" },
    { icon: Trees, name: "Landscaped Garden" },
  ];

  const specs = [
    { label: "Price", value: "₹85,00,000", highlight: true },
    { label: "Configuration", value: "3 BHK Apartment" },
    { label: "Carpet Area", value: "1,250 sq.ft." },
    { label: "Floor", value: "8th of 12" },
    { label: "Facing", value: "East Facing" },
    { label: "Status", value: "Ready to Move" },
  ];

  return (
    <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumbs / Back button */}
        <div className="mb-6">
          <Button variant="ghost" className="text-xs uppercase tracking-widest font-bold">
            ← Back to Listings
          </Button>
        </div>

        {/* Title and Action Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-accent text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">For Sale</span>
              <div className="flex items-center text-xs text-gray-400 font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-500 mr-1" />
                Verified Listing
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-black text-primary">Luxury Suite at Baner Hills</h1>
            <div className="flex items-center mt-2 text-gray-500">
              <MapPin className="w-5 h-5 text-accent mr-2" />
              <span className="font-medium">Baner-Pashan Link Road, Baner, Pune</span>
            </div>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="flex-1 md:flex-none">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button variant="outline" size="sm" className="flex-1 md:flex-none">
              <Heart className="w-4 h-4 mr-2" /> Save
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
                <Image src={images[activeImage]} alt="Property" fill className="object-cover transition-all duration-700" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      "relative aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                      activeImage === i ? "border-accent scale-95" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 bg-white p-8 rounded-[2rem] shadow-sm border border-border">
              <div className="flex flex-col items-center border-r border-border">
                <Bed className="w-8 h-8 text-accent mb-2" />
                <span className="text-2xl font-black text-primary">3</span>
                <span className="text-xs text-gray-400 font-bold uppercase">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center border-r border-border">
                <Bath className="w-8 h-8 text-accent mb-2" />
                <span className="text-2xl font-black text-primary">3</span>
                <span className="text-xs text-gray-400 font-bold uppercase">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center">
                <Move className="w-8 h-8 text-accent mb-2" />
                <span className="text-2xl font-black text-primary">1850</span>
                <span className="text-xs text-gray-400 font-bold uppercase">Sq.Ft.</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                About this <span className="text-accent underline decoration-accent/20">Property</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Experience unparalleled luxury in this stunning 3BHK apartment located in the prime hills of Baner. This ready-to-move-in home features Italian marble flooring, a state-of-the-art designer kitchen, and expansive wrap-around balconies offering panoramic views of the city skyline.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Double Height Ceiling", "Modular Kitchen", "Electronic Security", "High Speed Lifts"].map(feat => (
                  <div key={feat} className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Property Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {amenities.map(amenity => (
                  <div key={amenity.name} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-border">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                      <amenity.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-sm text-primary">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Walkthrough (Placeholder) */}
            <div className="bg-primary p-12 rounded-[2rem] text-center space-y-4">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
              <h4 className="text-xl font-bold text-white">Watch Property Walkthrough</h4>
              <p className="text-gray-400">See every detail of this home in high definition.</p>
            </div>
          </div>

          {/* Sidebar Inquiry Card */}
          <aside className="space-y-8">
            <div className="sticky top-24 bg-white p-8 rounded-[2rem] shadow-2xl border border-border space-y-8">
              <div className="space-y-4 pb-6 border-b border-border">
                {specs.map(spec => (
                  <div key={spec.label} className="flex justify-between items-center px-2">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{spec.label}</span>
                    <span className={cn("font-black", spec.highlight ? "text-3xl text-accent" : "text-primary text-lg")}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-bold text-primary">Interested in this property?</h4>
                <div className="space-y-3">
                  <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-border rounded-xl py-4 px-4 text-sm outline-none focus:border-accent" />
                  <input type="text" placeholder="Phone Number" className="w-full bg-gray-50 border border-border rounded-xl py-4 px-4 text-sm outline-none focus:border-accent" />
                </div>
                <Button variant="primary" className="w-full py-4 text-lg">Schedule a Visit</Button>
                <div className="flex gap-3">
                  <Button variant="accent" className="flex-1 py-4 font-bold">
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                  </Button>
                  <Button variant="outline" className="flex-1 py-4 font-bold border-accent text-accent">
                    <Smartphone className="w-5 h-5 mr-2" /> Call Agent
                  </Button>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-2xl flex items-center gap-3">
                <Info className="w-5 h-5 text-emerald-500" />
                <span className="text-xs text-emerald-700 font-bold leading-tight">
                  Site visits available within 24 hours. Contact our Pune expert now!
                </span>
              </div>
            </div>
            
            {/* Agent Info Small */}
            <div className="bg-white p-6 rounded-[2rem] border border-border flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?img=12" alt="Agent" className="w-14 h-14 rounded-2xl object-cover" />
              <div>
                <h5 className="font-bold text-primary leading-none">Anand K. Sharma</h5>
                <span className="text-xs text-gray-400 font-medium">Principal Realtor</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto p-2">
                <MessageCircle className="w-5 h-5 text-accent" />
              </Button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
