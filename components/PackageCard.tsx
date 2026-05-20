"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export interface PackageType {
  name: string;
  price: number;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
  category?: string;
}

interface PackageCardProps {
  package: PackageType;
  reverse?: boolean;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US").format(pkg.price);

  return (
    <div className="group bg-card border border-subtle rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
        {pkg.popular && (
          <span className="absolute top-3 left-3 bg-brand-orange text-brand-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm font-medium text-brand-orange mb-1">
          From USH {formattedPrice}
        </p>
        <h3 className="text-xl font-bold text-brand-black mb-2">{pkg.name}</h3>
        <p className="text-secondary text-sm mb-4 flex-1">{pkg.description}</p>

        <ul className="space-y-2 mb-6">
          {pkg.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-brand-black"
            >
              <Check className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full bg-brand-orange hover:bg-orange-600 text-brand-white font-semibold py-2.5 rounded-full transition-colors text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
}
