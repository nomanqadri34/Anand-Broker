import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-white text-xl">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl leading-none uppercase tracking-tighter">
                Anand Broker
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">
                Pune's #1 Realtor
              </span>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Leading real estate consultancy in Pune helping 50,000+ happy clients find their dream homes since 2015. 100% Verified listings guaranteed.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/buy" className="hover:text-white transition-colors">Buy Property</Link></li>
            <li><Link href="/rent" className="hover:text-white transition-colors">Rent Property</Link></li>
            <li><Link href="/sell" className="hover:text-white transition-colors">Sell Property</Link></li>
            <li><Link href="/invest" className="hover:text-white transition-colors">Investments</Link></li>
            <li><Link href="/pg" className="hover:text-white transition-colors">PG & Flatmates</Link></li>
          </ul>
        </div>

        {/* Popular Areas */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-accent">Popular Areas</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link href="/locality/hinjewadi" className="hover:text-white transition-colors">Hinjewadi</Link></li>
            <li><Link href="/locality/baner" className="hover:text-white transition-colors">Baner</Link></li>
            <li><Link href="/locality/wakad" className="hover:text-white transition-colors">Wakad</Link></li>
            <li><Link href="/locality/kharadi" className="hover:text-white transition-colors">Kharadi</Link></li>
            <li><Link href="/locality/viman-nagar" className="hover:text-white transition-colors">Viman Nagar</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-accent">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent" />
              <span>+91 9284901998</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-accent" />
              <span>WhatsApp: 9284901998</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent" />
              <span>contact@anandbroker.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-1" />
              <span>Pune, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Anand Broker. All Rights Reserved. Designed for high conversion.</p>
      </div>
    </footer>
  );
};
