"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, User, Home, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
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
        isScrolled ? "py-2" : "py-4 md:py-6"
      )}
    >
      <div 
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-6 py-3",
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]" 
            : "bg-transparent backdrop-blur-0 border-transparent shadow-none"
        )}
      >
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-primary ring-2 ring-accent/30 rounded-xl flex items-center justify-center font-bold text-white text-xl transform group-hover:rotate-6 transition-transform duration-300">
              A
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-black text-xl leading-none tracking-tight",
              isScrolled ? "text-primary" : "text-white"
            )}>
              Anand<span className="text-accent">Broker</span>
            </span>
            <div className="h-[1px] w-0 group-hover:w-full bg-accent transition-all duration-300" />
            <span className={cn(
              "text-[9px] uppercase tracking-[0.3em] font-bold opacity-70",
              isScrolled ? "text-primary/70" : "text-white/70"
            )}>
              Pune's #1 Ranking
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative flex items-center px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden group",
                isScrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
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
              isScrolled ? "text-primary hover:bg-primary/5" : "text-white hover:bg-white/5"
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
            isScrolled ? "bg-primary/5 text-primary" : "bg-white/10 text-white"
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[49] md:hidden"
            />
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.95 }}
              className="absolute top-24 left-4 right-4 bg-white rounded-[2rem] p-8 shadow-2xl border border-border z-50 flex flex-col gap-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 text-primary font-bold text-lg group transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="h-[1px] bg-border my-2" />
              <div className="flex flex-col gap-3">
                <Button variant="outline" className="w-full rounded-2xl py-6 font-bold">Login</Button>
                <Button variant="accent" className="w-full rounded-2xl py-6 font-black text-lg">Post Your Property</Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
