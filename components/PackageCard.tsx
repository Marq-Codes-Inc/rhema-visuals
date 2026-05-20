"use client";

import { Check } from "lucide-react";
import FadeInImage from "./FadeInImage";

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
    <div className="group bg-card border border-subtle rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col md:flex-row w-full min-h-80">
      {/* Image Container: Image on top for mobile, image on side for desktop */}
      <div className="relative w-full h-64 md:h-auto md:w-2/5 min-h-60 overflow-hidden shrink-0">
        <FadeInImage
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={false}
        />

        {/* Popular badge */}
        {pkg.popular && (
          <span className="absolute top-4 left-4 bg-brand-orange text-brand-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
            Most Popular
          </span>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold z-10 shadow-sm">
          From USH {formattedPrice}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
            {pkg.name}
          </h3>
          <p className="text-secondary text-sm md:text-base mb-6 leading-relaxed">
            {pkg.description}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
            {pkg.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-brand-black"
              >
                <Check className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full sm:w-auto sm:px-8 bg-brand-orange hover:bg-orange-600 text-brand-white font-semibold py-3 rounded-full transition-colors text-sm md:text-base tracking-wide shadow-sm self-start">
          Book Now
        </button>
      </div>
    </div>
  );
}
