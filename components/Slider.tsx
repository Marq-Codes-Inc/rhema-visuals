/* components/Slider.tsx */
'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <div className="relative overflow-hidden shadow-2xl" ref={emblaRef}>
      <div className="flex">
        {heroImages.map((src, idx) => (
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
  );
}