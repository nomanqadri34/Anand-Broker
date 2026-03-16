"use client";

import React from "react";
import { motion } from "framer-motion";

export const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative">
        {/* Animated Background Rings */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [1, 2, 1.2], 
              opacity: [0, 0.2, 0],
              rotate: i * 45
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/30 rounded-[3rem]"
          />
        ))}

        {/* Central Logo Animation */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.3)]"
          >
            <span className="text-4xl font-black text-white italic">A</span>
          </motion.div>

          <div className="overflow-hidden flex flex-col items-center">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl font-playfair font-black text-white uppercase tracking-tighter"
            >
              Anand<span className="text-accent">Broker</span>
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] bg-accent/50 mt-1"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8 }}
              className="text-[10px] uppercase tracking-[0.4em] text-white/70 mt-3 font-bold"
            >
              Pune's #1 Ranked realtor
            </motion.p>
          </div>
        </div>

        {/* Loading Bar */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full bg-accent"
          />
        </div>
      </div>
    </motion.div>
  );
};
