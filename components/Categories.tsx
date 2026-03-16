import React from "react";
import { Home, Building2, User2, Briefcase, Landmark, Key } from "lucide-react";

export const Categories = () => {
  const categories = [
    { title: "Rent Properties", icon: Key, count: "1200+ Listings", color: "bg-blue-500/10 text-blue-500" },
    { title: "Buy Properties", icon: Home, count: "800+ Modern Homes", color: "bg-accent/10 text-accent" },
    { title: "Sell Properties", icon: Landmark, count: "Fast Valuation", color: "bg-emerald-500/10 text-emerald-500" },
    { title: "Investments", icon: Briefcase, count: "High ROI Projects", color: "bg-purple-500/10 text-purple-500" },
    { title: "PG & Rooms", icon: User2, count: "Verified Stays", color: "bg-orange-500/10 text-orange-500" },
    { title: "New Projects", icon: Building2, count: "Pre-launch Deals", color: "bg-cyan-500/10 text-cyan-500" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-4">
            Explore Property <span className="text-accent underline underline-offset-4 decoration-accent/20">Categories</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Whether you are looking for a luxury apartment, a budget-friendly PG, or high-yield investment properties, we have the best options in Pune.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i}
              className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-accent hover:bg-white hover:shadow-2xl transition-all duration-500 text-center cursor-pointer"
            >
              <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 ${cat.color}`}>
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-gray-400 font-medium">
                {cat.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
