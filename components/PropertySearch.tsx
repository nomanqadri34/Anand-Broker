"use client";

import React, { useState } from "react";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Button } from "@/components/ui/Button";
import { Filter, Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const SAMPLE_PROPERTIES = [
  {
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
    title: "Vasant Vihar Apartment",
    price: "₹75L",
    location: "Baner, Pune",
    beds: 2,
    baths: 2,
    sqft: 1250,
    tag: "Verified"
  },
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80",
    title: "Green Hill Villa",
    price: "₹2.5Cr",
    location: "Wakad, Pune",
    beds: 4,
    baths: 4,
    sqft: 3200,
    tag: "Luxury"
  },
  {
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
    title: "Cozy Studio in Aundh",
    price: "₹15k/mo",
    location: "Aundh, Pune",
    beds: 1,
    baths: 1,
    sqft: 450,
  },
  {
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    title: "Penthouse at Magarpatta",
    price: "₹3.2Cr",
    location: "Magarpatta, Pune",
    beds: 4,
    baths: 5,
    sqft: 4500,
    tag: "Exclusive"
  },
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    title: "IT Hub PG Hinjewadi",
    price: "₹12k/mo",
    location: "Hinjewadi, Pune",
    beds: 1,
    baths: 1,
    sqft: 300,
    tag: "Popular"
  },
  {
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=80",
    title: "Family 3BHK Kharadi",
    price: "₹95L",
    location: "Kharadi, Pune",
    beds: 3,
    baths: 3,
    sqft: 1600,
  }
];

export const PropertySearch = ({ presetType = "All" }: { presetType?: string }) => {
  const [activeType, setActiveType] = useState(presetType);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const filters = [
    { name: "Location", options: ["All Pune", "Baner", "Wakad", "Hinjewadi", "Kharadi", "Viman Nagar"] },
    { name: "Budget", options: ["Any Budget", "Under 50L", "50L - 1Cr", "1Cr - 2Cr", "Above 2Cr"] },
    { name: "Bedrooms", options: ["Any", "1 BHK", "2 BHK", "3 BHK", "4+ BHK"] },
    { name: "Furnished", options: ["Any", "Fully Furnished", "Semi-Furnished", "Unfurnished"] },
  ];

  const types = ["All", "Buy", "Rent", "Invest", "PG/Rooms"];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Breadcrumb for Mobile */}
        <div className="flex items-center gap-2 mb-8 md:hidden">
          <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'} className="p-0 text-accent font-bold">
            Home
          </Button>
          <span className="text-gray-300">/</span>
          <span className="text-gray-400 text-sm font-medium">Properties</span>
        </div>

        {/* Header and Type Selector */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-2">
              {activeType === "All" ? "Properties" : activeType} in <span className="text-accent">Pune</span>
            </h1>
            <p className="text-gray-500">Discover your next home from 2,500+ verified listings.</p>
          </div>
          
          <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-border overflow-x-auto max-w-full">
            {types.map(type => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  "px-6 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                  activeType === type 
                    ? "bg-primary text-white shadow-lg" 
                    : "text-gray-500 hover:text-primary"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-8">
          <Button 
            variant="outline" 
            className="w-full py-4 rounded-2xl flex items-center justify-between px-6 bg-white border-2 border-accent/20"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-accent" />
              <span className="font-bold text-primary">Filter Properties</span>
            </div>
            <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform", showMobileFilters && "rotate-180")} />
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={cn(
            "w-full lg:w-72 space-y-6 transition-all duration-300",
            !showMobileFilters && "hidden lg:block"
          )}>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-border sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2 text-primary">
                  <Filter className="w-5 h-5 text-accent" />
                  Apply Filters
                </h3>
                <button className="text-xs text-accent font-bold uppercase tracking-wider hover:underline">Reset</button>
              </div>

              <div className="space-y-6">
                {filters.map(filter => (
                  <div key={filter.name} className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">
                      {filter.name}
                    </label>
                    <div className="relative">
                      <select className="w-full bg-gray-50 border border-border rounded-xl py-3.5 px-4 text-sm font-bold appearance-none outline-none focus:border-accent group">
                        {filter.options.map(opt => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-focus:text-accent" />
                    </div>
                  </div>
                ))}

                <Button variant="primary" className="w-full py-4 rounded-2xl shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all">
                  Show Results
                </Button>
              </div>
            </div>

            <div className="bg-primary text-white p-6 rounded-[2rem] shadow-xl relative overflow-hidden group border border-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -translate-y-12 translate-x-12" />
              <h4 className="text-lg font-bold relative z-10">Post for FREE</h4>
              <p className="text-[11px] text-gray-400 mt-2 mb-4 relative z-10 font-medium">Get 10x more leads with Pune's #1 Sales Engine.</p>
              <Button variant="accent" className="w-full relative z-10 py-3 text-sm font-black rounded-xl">Post Property</Button>
            </div>
          </aside>

          {/* Results Area */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 px-2">
              <span className="text-sm font-bold text-gray-500">
                Showing <span className="text-primary font-black">1 - 6</span> of 248 Properties
              </span>
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-border shadow-sm">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Sort:</span>
                <select className="bg-transparent text-sm font-bold text-primary outline-none cursor-pointer">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SAMPLE_PROPERTIES.map((prop, i) => (
                <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <PropertyCard {...prop} />
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center items-center gap-2">
              <button className="w-12 h-12 rounded-2xl bg-primary text-white font-black shadow-lg shadow-primary/20">1</button>
              <button className="w-12 h-12 rounded-2xl bg-white border border-border hover:border-accent transition-all font-bold text-gray-500 hover:text-accent">2</button>
              <button className="w-12 h-12 rounded-2xl bg-white border border-border hover:border-accent transition-all font-bold text-gray-500 hover:text-accent">3</button>
              <span className="px-4 text-gray-300 font-black">...</span>
              <button className="w-12 h-12 rounded-2xl bg-white border border-border hover:border-accent transition-all font-bold text-gray-500 hover:text-accent underline decoration-accent/30">12</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
