"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/suites", label: "Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/dining", label: "Dining" },
  { href: "/specials", label: "Specials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrollPosition > 50
          ? "bg-background/95 backdrop-blur-md shadow-warm border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className={cn(
              "text-2xl font-semibold tracking-tight transition-colors",
              scrollPosition > 50 ? "text-luxury" : "text-white"
            )}
          >
            Serene Haven
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-luxury",
                  scrollPosition > 50 ? "text-foreground" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button className="rounded-full bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury" asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "ml-2 transition-colors",
                scrollPosition > 50 ? "text-foreground hover:text-luxury" : "text-white hover:text-white/80"
              )}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-20 bg-background/95 backdrop-blur-md z-40 md:hidden border-t border-border/50">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium py-2 transition-colors hover:text-luxury border-b border-border/30 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-4 w-full bg-luxury hover:bg-luxury/90 shadow-luxury transition-luxury" asChild>
              <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}