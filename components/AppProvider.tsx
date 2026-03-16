"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      <Navbar forceSolid={!isHomePage} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
