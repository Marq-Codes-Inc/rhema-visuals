/* components/PackageCard.tsx */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { formatUGX } from '@/lib/utils';

export interface PackageType {
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

interface PackageCardProps {
  package: PackageType;
  featured?: boolean;
  reverse?: boolean;
}

export default function PackageCard({ package: pkg, featured = false, reverse = false }: PackageCardProps) {
  const contentOrder = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
  
  return (
    <div className={`group relative rounded-md overflow-hidden border border-subtle bg-background-color transition-all duration-300 hover:shadow-lg ${featured ? 'md:col-span-1' : ''}`}>
      {pkg.popular && (
        <span className="absolute top-4 right-4 z-10 bg-brand-orange text-black text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </span>
      )}
      <div className={`flex flex-col ${contentOrder} h-full`}>
        {/* Image Section */}
        <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden bg-black/5 dark:bg-white/5">
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
        </div>
        
        {/* Details Section */}
        <div className="flex-1 p-6 md:p-8 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{pkg.name}</h3>
          <p className="text-brand-orange text-3xl md:text-4xl font-black mb-3">
            {formatUGX(pkg.price)}
          </p>
          <p className="text-secondary mb-4">{pkg.description}</p>
          <ul className="space-y-2 mb-6 text-sm">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-brand-orange font-bold">✓</span> 
                <span className="text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Link href={`/contact?package=${encodeURIComponent(pkg.name)}`}>
              <Button variant="primary" size="md" className="w-full md:w-auto">
                Inquire Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
