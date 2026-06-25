'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/packages', label: 'Packages' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  // Determine active link based on pathname and hash
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && typeof window !== 'undefined' && !window.location.hash;
    if (href === '/#work') return pathname === '/' && typeof window !== 'undefined' && window.location.hash === '#work';
    return pathname.startsWith(href);
  };

  // Safe background colour
  const menuBg = theme === 'dark' ? '#1A1A1A' : '#FFFFFF';
  
  // Logo filter for dark theme
  const logoFilter = theme === 'dark' ? 'brightness(0) invert(1)' : 'none';

  return (
    <nav className="fixed-nav w-full">
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between relative z-50">
        <Link href="/" className="flex items-center">
          <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
            <Image
              src="/images/logo/rhema-visuals-logo.png"
              alt="Rhema Visuals"
              width={200}
              height={200}
              className="object-contain transition-all duration-300 group-hover:scale-105"
              style={{ filter: logoFilter }}
              unoptimized
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm ${isActive(link.href) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            ref={hamburgerRef}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-60 w-8 h-8 flex flex-col items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute block h-0.5 w-full transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
                style={{ backgroundColor: 'var(--hamburger-color)' }}
              />
              <span
                className={`absolute block h-0.5 w-full transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'top-2 opacity-100'
                }`}
                style={{ backgroundColor: 'var(--hamburger-color)' }}
              />
              <span
                className={`absolute block h-0.5 w-full transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
                style={{ backgroundColor: 'var(--hamburger-color)' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        className={`fixed top-20 right-4 z-50 w-[65%] max-w-xs rounded-lg border border-nav shadow-2xl transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ backgroundColor: menuBg }}
      >
        <div className="flex flex-col items-start p-6 space-y-5 text-left">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium tracking-wide transition-colors text-brand-black dark:text-white hover:text-brand-orange ${
                isActive(link.href) ? 'text-brand-orange!' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
