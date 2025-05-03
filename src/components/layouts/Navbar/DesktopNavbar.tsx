"use client";

import Link from "next/link";
import { Home, Info, PhoneCall, Settings2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Toggle";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Services", href: "/services", icon: Settings2 },
  { name: "Vision", href: "/vision", icon: Target },
];

const DesktopNavbar = () => {
  return (
    <header className="hidden md:block w-full bg-background dark:bg-slate-900 fixed z-50 py-2 top-0">
      <nav className="relative container mx-auto ">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Logo />
          <ul className="flex items-center gap-6 text-[1rem]">
            {navItems.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <Link href={href}>
                  <div className="flex items-center gap-2 hover:text-blue-500 dark:text-white">
                    <Icon className="text-[1.2rem]" />
                    {name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/contact">
              <Button variant="destructive">
                <PhoneCall className="text-[1.2rem]" />
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopNavbar;
