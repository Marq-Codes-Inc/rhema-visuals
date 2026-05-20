/* components/Gallery.tsx */
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const photos = [
  { src: '/images/photo1.jpg', alt: 'Wedding photography', width: 1200, height: 800 },
  { src: '/images/photo2.jpg', alt: 'Portrait photography', width: 800, height: 1200 },
  { src: '/images/photo3.jpg', alt: 'Event coverage', width: 1200, height: 800 },
  { src: '/images/photo4.jpg', alt: 'Commercial shoot', width: 1600, height: 900 },
  { src: '/images/photo5.jpg', alt: 'Street photography', width: 1200, height: 1200 },
  { src: '/images/photo6.jpg', alt: 'Product photography', width: 800, height: 1000 },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="group relative aspect-4/3 overflow-hidden cursor-pointer bg-black/5 dark:bg-white/5"
            onClick={() => setIndex(i)}
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
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </>
  );
}
