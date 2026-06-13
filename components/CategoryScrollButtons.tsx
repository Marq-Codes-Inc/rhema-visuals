"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

const categories = [
  // { id: "proposal", label: "Proposal" },
  { id: "kukyaala", label: "Kukyaala" },
  { id: "kuhingira", label: "Kwanjula & Kuhingira" },
  { id: "wedding", label: "Wedding" },
  { id: "portrait-indoor", label: "Portrait (Indoor)" },
  { id: "portrait-outdoor", label: "Portrait (Outdoor)" },
  { id: "corporate", label: "Corporate" },
  { id: "creative", label: "Creative" },
];

export default function CategoryScrollButtons() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  if (pathname !== "/packages") return null;

  return (
    <div className="fixed bottom-24 right-8 z-9999 isolation-auto">
      <div ref={menuRef} className="relative flex flex-col items-end">
        
        {/* Floating Category List */}
        <div
          className={`absolute bottom-full mb-4 flex flex-col items-end gap-2.5 right-0 transition-all duration-300 ease-out origin-bottom-right ${
            isOpen
              ? "scale-100 opacity-100 pointer-events-auto"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
        >
          {/* Top 'X' Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 bg-brand-transparent dark:bg-transparent text-brand-black border border-subtle shadow-lg transition-colors mb-1 backdrop-blur-md"
            aria-label="Close categories"
          >
            <X size={18} />
          </button>

          {/* Individual Category Buttons */}
          {categories.map((cat, index) => (
            <Button
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className="px-5 py-2.5 bg-brand-orange text-brand-white! font-semibold text-sm shadow-md hover:brightness-110 transition-all duration-200 whitespace-nowrap active:scale-98"
              style={{ transitionDelay: `${index * 0.02}s` }}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 bg-brand-orange text-white shadow-2xl hover:brightness-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
          aria-label={isOpen ? "Close menu" : "Open packages menu"}
        >
          {isOpen ? (
            <X size={24} className="transition-transform duration-200 rotate-90" />
          ) : (
            <Menu size={24} className="transition-transform duration-200 group-hover:scale-105" />
          )}
        </button>
      </div>
    </div>
  );
}