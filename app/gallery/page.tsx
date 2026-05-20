/* gallery/page.tsx */
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Container } from '@/components/ui/Container';

type Category = 'weddings' | 'portraits' | 'proposals' | 'commercial'| 'corporate';

const galleryData: Record<Category, { src: string; alt: string }[]> = {
  weddings: [
    { src: '/images/wedding1.jpg', alt: 'Wedding ceremony' },
    { src: '/images/wedding2.jpg', alt: 'Bridal portrait' },
    { src: '/images/wedding3.jpg', alt: 'First dance' },
    { src: '/images/wedding4.jpg', alt: 'Reception details' },
    { src: '/images/wedding5.jpg', alt: 'Wedding ceremony' },
    { src: '/images/wedding6.jpg', alt: 'Bridal portrait' },
    { src: '/images/wedding7.jpg', alt: 'First dance' },
    { src: '/images/wedding8.jpg', alt: 'Reception details' },
    { src: '/images/wedding9.jpg', alt: 'Reception details' }
  ],
  portraits: [
    { src: '/images/portrait1.jpg', alt: 'Studio portrait' },
    { src: '/images/portrait2.jpg', alt: 'Outdoor portrait' },
    { src: '/images/portrait3.jpg', alt: 'Black and white' },
    { src: '/images/portrait4.jpg', alt: 'Environmental portrait' },
    { src: '/images/portrait5.jpg', alt: 'Studio portrait' },
    { src: '/images/portrait6.jpg', alt: 'Outdoor portrait' }
  ],
  proposals: [
    { src: '/images/proposal1.jpg', alt: 'Proposal' },
    { src: '/images/proposal2.jpg', alt: 'Proposal' },
    { src: '/images/proposal3.jpg', alt: 'Proposal' },
    { src: '/images/proposal4.jpg', alt: 'Proposal' },
    { src: '/images/proposal5.jpg', alt: 'Proposal' },
    { src: '/images/proposal6.jpg', alt: 'Proposal' },
  ],
  commercial: [
    { src: '/images/commercial1.jpg', alt: 'Product shoot' },
    { src: '/images/commercial2.jpg', alt: 'Fashion lookbook' },
    { src: '/images/commercial3.jpg', alt: 'Food photography' },
    { src: '/images/commercial4.jpg', alt: 'Architecture' },
    { src: '/images/commercial5.jpg', alt: 'Architecture' },
    { src: '/images/commercial6.jpg', alt: 'Architecture' },
    
  ],
  corporate: [
    { src: '/images/corporate1.jpg', alt: 'Product shoot' },
    { src: '/images/corporate2.jpg', alt: 'Fashion lookbook' },
    { src: '/images/corporate3.jpg', alt: 'Food photography' },
    { src: '/images/corporate4.jpg', alt: 'Architecture' },
    { src: '/images/corporate5.jpg', alt: 'Food photography' },
    { src: '/images/corporate6.jpg', alt: 'Architecture' }
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
  const [lightboxIndex, setLightboxIndex] = useState(-1);
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {currentPhotos.map((photo, idx) => (
          <div
            key={idx}
            className="group relative aspect-4/3 overflow-hidden cursor-pointer bg-black/5 dark:bg-white/5"
            onClick={() => setLightboxIndex(idx)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
              unoptimized
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={currentPhotos}
      />
    </Container>
  );
}
