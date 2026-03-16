import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Zap, Heart } from "lucide-react";

export default function Home() {
  const featuredProperties = [
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Suite in Baner",
      price: "₹85L",
      location: "Baner, Pune",
      beds: 3,
      baths: 3,
      sqft: 1850,
      tag: "Featured"
    },
    {
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      title: "Modern 2BHK Balewadi",
      price: "₹62L",
      location: "Balewadi, Pune",
      beds: 2,
      baths: 2,
      sqft: 1100,
      tag: "Best Seller"
    },
    {
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      title: "Premium PG for IT Pros",
      price: "₹18k/mo",
      location: "Hinjewadi Ph-1, Pune",
      beds: 1,
      baths: 1,
      sqft: 250,
      tag: "Verified"
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      
      {/* Featured Properties Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-4">
                Featured <span className="text-accent underline underline-offset-4 decoration-accent/20">Listings</span>
              </h2>
              <p className="text-gray-500">Handpicked properties for you in prime locations of Pune.</p>
            </div>
            <Button variant="outline" className="group">
              View All Properties
              <Zap className="w-4 h-4 ml-2 group-hover:fill-accent transition-all" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop, i) => (
              <PropertyCard key={i} {...prop} />
            ))}
          </div>
        </div>
      </section>

      <Categories />

      {/* Trust Signals Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
                Trusted by <span className="text-accent">50,000+</span> Pune Residents
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                With over a decade of experience, Anand Broker has become the gold standard for real estate in Pune. We don't just find you a house; we find you a home.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "100% Verified Listings", desc: "Every property goes through a rigorous 30-point manual check." },
                  { icon: Zap, title: "24-Hour Site Visits", desc: "Our agents are ready to show you properties within 24 hours of inquiry." },
                  { icon: Heart, title: "Client First Approach", desc: "Our 4.9/5 star rating on Google reflects our commitment to you." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                      <item.icon className="w-6 h-6 text-accent group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button variant="accent" size="lg">Ready to find your home?</Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy Clients" 
                  className="w-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block">
                <div className="text-primary font-black text-5xl mb-2">4.9/5</div>
                <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
