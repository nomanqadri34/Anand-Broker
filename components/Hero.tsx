"use client";

import React from "react";
import { Search, MapPin, Home, IndianRupee } from "lucide-react";
import { Button } from "./ui/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] scale-110 animate-pulse-slow"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/20 py-2 px-4 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
            <span className="text-accent text-xs font-bold uppercase tracking-widest">🏆 Pune’s #1 Ranked Realtor</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-black text-white leading-tight">
            Find Your Perfect <br />
            <span className="text-accent underline decoration-white/20 underline-offset-8">Home in Pune</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
            Rent • Buy • Sell • Invest with Pune’s Most Trusted Realtor. 50,000+ happy clients served.
          </p>

          {/* Search Bar Container */}
          <div className="bg-white/10 backdrop-blur-xl p-4 rounded-3xl border border-white/20 shadow-2xl max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 hover:border-accent transition-colors">
                <MapPin className="text-accent w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Location</span>
                  <input 
                    type="text" 
                    placeholder="Wakad, Baner..." 
                    className="bg-transparent text-white text-sm outline-none placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 hover:border-accent transition-colors">
                <Home className="text-accent w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Type</span>
                  <select className="bg-transparent text-white text-sm outline-none border-none p-0 cursor-pointer">
                    <option className="bg-primary text-white">Apartment</option>
                    <option className="bg-primary text-white">Villa</option>
                    <option className="bg-primary text-white">PG/Rooms</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-2xl border border-white/10 hover:border-accent transition-colors">
                <IndianRupee className="text-accent w-4 h-4" />
                <div className="flex flex-col text-white">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">Budget</span>
                  <select className="bg-transparent text-white text-sm outline-none border-none p-0 cursor-pointer">
                    <option className="bg-primary text-white">Any Price</option>
                    <option className="bg-primary text-white">Under 50L</option>
                    <option className="bg-primary text-white">50L - 1Cr</option>
                    <option className="bg-primary text-white">Above 1Cr</option>
                  </select>
                </div>
              </div>
            </div>

            <Button variant="accent" className="w-full py-4 text-lg group">
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Find Properties Now
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              <span className="text-white font-bold">Trusted by 50k+</span> satisfied clients in Pune.
            </p>
          </div>
        </div>

        {/* Hero visual elements can be added here if needed */}
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};
