"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import {
  Menu,
  X,
  Home,
  Info,
  Settings2,
  Target,
  PhoneCall,
} from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Settings2 },
  { name: "Vision", href: "/vision", icon: Target },
  { name: "Contact", href: "/contact", icon: PhoneCall },
];

const MobileNavbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileSidebarOpen ? "hidden" : "auto";
  }, [mobileSidebarOpen]);

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-slate-900 py-2">
      <nav className="container mx-auto flex justify-between items-center px-4 py-2">
        <Logo />

        <Menu
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="text-[2rem] cursor-pointer text-white"
        />
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[260px] h-full bg-white dark:bg-slate-900 shadow-lg transform transition-transform duration-300 z-50 overflow-y-auto ${
          mobileSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileSidebarOpen(false)}
            className="text-2xl text-red-500"
          >
            <X />
          </button>
        </div>

        <ul className="flex flex-col p-6 gap-4 text-gray-700 dark:text-white/80">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <li key={idx}>
                <Link
                  href={link.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-5 h-5" />
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MobileNavbar;
