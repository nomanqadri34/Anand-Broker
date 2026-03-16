"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, User, Home, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = ({ forceSolid = false }: { forceSolid?: boolean }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isSolid = hasScrolled || forceSolid;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Buy", href: "/buy" },
    { name: "Rent", href: "/rent" },
    { name: "Sell", href: "/sell" },
    { name: "Invest", href: "/invest" },
    { name: "PG/Rooms", href: "/pg" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-8 py-4",
        isSolid ? "py-2" : "py-4 md:py-6"
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3",
          isSolid 
            ? "bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]" 
            : "bg-transparent backdrop-blur-0 border-transparent shadow-none"
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-primary ring-2 ring-accent/30 rounded-xl flex items-center justify-center font-bold text-white text-xl transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
              A
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-black text-xl leading-none tracking-tight",
              isSolid ? "text-primary" : "text-white"
            )}>
              Anand<span className="text-accent">Broker</span>
            </span>
            <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-300" />
            <span className={cn(
              "text-[9px] uppercase tracking-[0.3em] font-bold opacity-70",
              isSolid ? "text-primary/70" : "text-white/70"
            )}>
              Pune's #1 Ranking
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className={cn(
          "hidden md:flex items-center gap-1 rounded-full p-1 transition-all duration-300",
          isSolid ? "bg-primary/5 border border-primary/10" : "bg-white/5 border border-white/10"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative flex items-center px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 overflow-hidden group",
                isSolid ? "text-primary hover:text-accent" : "text-white hover:text-accent"
              )}
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            className={cn(
              "rounded-full text-sm font-bold",
              isSolid ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/5"
            )}
          >
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button 
            variant="accent" 
            className="rounded-full text-sm font-black px-8 py-2.5 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all group"
          >
            Post Property
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors",
            isSolid ? "bg-primary/5 text-primary" : "bg-white/10 text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary/20 backdrop-blur-md z-[100] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[101] shadow-2xl flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-white text-sm">
                    A
                  </div>
                  <span className="font-black text-lg text-primary">
                    Anand<span className="text-accent">Broker</span>
                  </span>
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 text-primary font-bold text-lg group transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-3">
                          {link.name === "Home" && <Home className="w-5 h-5 text-accent/50" />}
                          {link.name}
                        </span>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-accent" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <div className="flex flex-col gap-3">
                  <Button variant="outline" className="w-full rounded-xl py-3 text-xs font-bold border-gray-200 h-auto">
                    <User className="w-3.5 h-3.5 mr-2" />
                    Sign In
                  </Button>
                  <Button variant="accent" className="w-full rounded-xl py-3 text-xs font-black shadow-lg shadow-accent/10 h-auto">
                    Post Property
                  </Button>
                </div>
                <div className="mt-6 flex items-center justify-between px-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest font-black text-gray-400">Need Help?</span>
                    <a href="tel:9284901998" className="text-sm font-bold text-primary flex items-center gap-1">
                      <Phone className="w-3 h-3 text-accent" />
                      9284901998
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
