'use client';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

// Array updated to 5 images
const heroImages = [
  '/images/hero/hero (1).jpg',
  '/images/hero/hero (2).jpg',
  '/images/hero/hero (3).jpg',
  '/images/hero/hero (4).jpg',
  '/images/hero/hero (5).jpg',
];

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative group">
      {/* Viewport container */}
      <div className="overflow-hidden shadow-2xl" ref={emblaRef}>
        <div className="flex">
          {heroImages.map((src, idx) => (
            /* Maintained your original responsive vh heights */
            <div key={idx} className="relative flex-[0_0_100%] h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[85vh] min-w-0">
              <Image
                src={src}
                alt={`Hero ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots Overlay */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === selectedIndex 
                ? 'w-8 bg-white' 
                : 'w-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
