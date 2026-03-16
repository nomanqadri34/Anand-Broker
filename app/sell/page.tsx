"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Upload, ChevronRight, CheckCircle, Smartphone, Building, IndianRupee, MapPin } from "lucide-react";

export default function SellPage() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 py-2 px-4 rounded-full">
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Free for Owners</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-playfair font-black text-primary leading-tight">
            Sell Your Property <br />
            <span className="text-accent">10x Faster</span> with Anand Broker
          </h1>
          
          <p className="text-xl text-gray-500 leading-relaxed">
            Reach 50,000+ active buyers in Pune. Get expert valuation and professional photography. No hidden charges.
          </p>

          <div className="space-y-6">
            {[
              "Free Property Valuation within 24 hours",
              "Professional Photography & Video Walkthrough",
              "Zero Listing Fees for Owners",
              "Direct Verified Buyer Transfers"
            ].map(item => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="font-bold text-primary">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-8 bg-primary rounded-3xl text-white shadow-xl relative overflow-hidden group border border-white/10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-12 translate-x-12 group-hover:scale-125 transition-transform" />
            <h4 className="text-xl font-bold mb-2">Are you a Developer?</h4>
            <p className="text-gray-400 text-sm mb-6">Launch your new project with Pune's #1 sales engine.</p>
            <Button variant="accent">Partner with us</Button>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-border relative">
          <h3 className="text-2xl font-bold text-primary mb-8">Post Your Property</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Full Name</label>
                <input type="text" className="w-full bg-gray-50 border border-border rounded-xl py-4 px-4 text-sm outline-none focus:border-accent" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Phone Number</label>
                <input type="text" className="w-full bg-gray-50 border border-border rounded-xl py-4 px-4 text-sm outline-none focus:border-accent" placeholder="+91" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Property Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                <input type="text" className="w-full bg-gray-50 border border-border rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-accent" placeholder="e.g. Baner, Pune" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Property Type</label>
                <select className="w-full bg-gray-50 border border-border rounded-xl py-4 px-4 text-sm outline-none focus:border-accent appearance-none">
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Expected Price</label>
                <div className="relative">
                  <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent" />
                  <input type="text" className="w-full bg-gray-50 border border-border rounded-xl py-4 pl-12 pr-4 text-sm outline-none focus:border-accent" placeholder="Price" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 tracking-widest">Upload Images / Videos</label>
              <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-primary">Drag & drop or Click to upload</span>
                <span className="text-xs text-gray-400">Max size 20MB. JPG, PNG, MP4.</span>
              </div>
            </div>

            <Button variant="primary" className="w-full py-5 text-lg group">
              List My Property Now
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-[10px] text-center text-gray-400">
              By submitting this form, you agree to our Terms and Conditions and Privacy Policy.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
