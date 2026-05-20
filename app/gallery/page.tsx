'use client';

import { useState } from 'react';
import FancyboxMasonry from '@/components/FancyboxMasonry';
import { Container } from '@/components/ui/Container';

type Category = 'weddings' | 'portraits' | 'proposals' | 'commercial' | 'corporate';

const galleryData: Record<Category, { src: string; alt: string; width: number; height: number }[]> = {
  weddings: [
    { src: '/images/wedding1.jpg', alt: 'Wedding ceremony', width: 1200, height: 800 },
    { src: '/images/wedding2.jpg', alt: 'Bridal portrait', width: 800, height: 1200 },
    { src: '/images/wedding3.jpg', alt: 'First dance', width: 1200, height: 800 },
    { src: '/images/wedding4.jpg', alt: 'Reception details', width: 1600, height: 900 },
    { src: '/images/wedding5.jpg', alt: 'Wedding ceremony', width: 1200, height: 800 },
    { src: '/images/wedding6.jpg', alt: 'Bridal portrait', width: 800, height: 1200 },
    { src: '/images/wedding7.jpg', alt: 'First dance', width: 1200, height: 800 },
    { src: '/images/wedding8.jpg', alt: 'Reception details', width: 1600, height: 900 },
  ],
  portraits: [
    { src: '/images/portrait1.jpg', alt: 'Studio portrait', width: 1200, height: 800 },
    { src: '/images/portrait2.jpg', alt: 'Outdoor portrait', width: 800, height: 1200 },
    { src: '/images/portrait3.jpg', alt: 'Black and white', width: 1200, height: 800 },
    { src: '/images/portrait4.jpg', alt: 'Environmental portrait', width: 1600, height: 900 },
    { src: '/images/portrait5.jpg', alt: 'Studio portrait', width: 1200, height: 800 },
    { src: '/images/portrait6.jpg', alt: 'Outdoor portrait', width: 800, height: 1200 },
  ],
  proposals: [
    { src: '/images/proposal1.jpg', alt: 'Proposal', width: 1200, height: 800 },
    { src: '/images/proposal2.jpg', alt: 'Proposal', width: 1200, height: 800 },
    { src: '/images/proposal3.jpg', alt: 'Proposal', width: 800, height: 1200 },
    { src: '/images/proposal4.jpg', alt: 'Proposal', width: 1600, height: 900 },
    { src: '/images/proposal5.jpg', alt: 'Proposal', width: 1200, height: 800 },
    { src: '/images/proposal6.jpg', alt: 'Proposal', width: 1200, height: 800 },
  ],
  commercial: [
    { src: '/images/commercial1.jpg', alt: 'Product shoot', width: 1200, height: 800 },
    { src: '/images/commercial2.jpg', alt: 'Fashion lookbook', width: 800, height: 1200 },
    { src: '/images/commercial3.jpg', alt: 'Food photography', width: 1200, height: 800 },
    { src: '/images/commercial4.jpg', alt: 'Architecture', width: 1600, height: 900 },
    { src: '/images/commercial5.jpg', alt: 'Architecture', width: 1200, height: 800 },
    { src: '/images/commercial6.jpg', alt: 'Architecture', width: 1600, height: 900 },
  ],
  corporate: [
    { src: '/images/corporate1.jpg', alt: 'Product shoot', width: 1200, height: 800 },
    { src: '/images/corporate2.jpg', alt: 'Fashion lookbook', width: 800, height: 1200 },
    { src: '/images/corporate3.jpg', alt: 'Food photography', width: 1200, height: 800 },
    { src: '/images/corporate4.jpg', alt: 'Architecture', width: 1600, height: 900 },
    { src: '/images/corporate5.jpg', alt: 'Food photography', width: 1200, height: 800 },
    { src: '/images/corporate6.jpg', alt: 'Architecture', width: 1600, height: 900 },
  ],
};

const categories: { id: Category; label: string }[] = [
  { id: 'weddings', label: 'Weddings' },
  { id: 'proposals', label: 'Proposals' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'corporate', label: 'Corporate' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('weddings');
  const currentPhotos = galleryData[activeCategory];

  return (
    <Container className="py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-brand-orange">Gallery</span>
        </h1>
        <p className="text-secondary max-w-2xl mx-auto">
          Explore our work across different categories.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-brand-orange text-black'
                : 'bg-black/5 dark:bg-white/5 text-secondary hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <FancyboxMasonry photos={currentPhotos} />
    </Container>
  );
}

