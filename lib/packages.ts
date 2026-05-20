/* lib/packages.ts */
import { PackageType } from '@/components/PackageCard';

export const allPackages: PackageType[] = [
  {
    name: 'Essentials',
    price: 2500000,
    description: 'Perfect for small events and intimate portraits.',
    features: ['4 hours coverage', '50+ edited photos', 'Online gallery', 'Print release'],
    image: '/images/package-essentials.jpg',
  },
  {
    name: 'Classic',
    price: 3200000,
    description: 'Great for half-day events and detailed storytelling.',
    features: ['6 hours coverage', '80+ edited photos', 'Online gallery', 'Print release', '30-sec teaser'],
    image: '/images/package-classic.jpg',
    popular: true,
  },
  {
    name: 'Signature',
    price: 4000000,
    description: 'Our most popular package for weddings and corporate events.',
    features: ['8 hours coverage', '150+ edited photos', '1-minute highlight reel', 'Online gallery', 'Print release'],
    image: '/images/package-signature.jpg',
  },
  {
    name: 'Premier',
    price: 5000000,
    description: 'Extended coverage with cinematic touches.',
    features: ['10 hours coverage', '200+ edited photos', '2-minute film', 'Drone footage', 'Online gallery', 'Print release'],
    image: '/images/package-premier.jpg',
  },
  {
    name: 'Elite',
    price: 6000000,
    description: 'Premium experience for luxury events.',
    features: ['12 hours coverage', '250+ edited photos', '3-minute film', 'Drone footage', 'Same-day edits', 'Online gallery'],
    image: '/images/package-elite.jpg',
  },
  {
    name: 'Ultimate',
    price: 7000000,
    description: 'Full cinematic production for grand celebrations.',
    features: ['Full day coverage', '300+ edited photos', '5-minute film', 'Drone footage', 'Behind the scenes', 'Premium album', 'Online gallery'],
    image: '/images/package-ultimate.jpg',
  },
];

export function getAllPackages(): PackageType[] {
  return allPackages;
}

export function getFeaturedPackages(): PackageType[] {
  return [allPackages[0], allPackages[2], allPackages[4]];
}