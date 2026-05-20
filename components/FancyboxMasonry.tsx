'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface PhotoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface FancyboxMasonryProps {
  photos: PhotoItem[];
}

function MasonryImage({ photo }: { photo: PhotoItem }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      data-fancybox="gallery"
      data-src={photo.src}
      // no data-caption, no background
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-transparent"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        unoptimized
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto object-cover transition-all duration-700 
          group-hover:scale-[1.02] group-hover:brightness-90 
          ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}

export default function FancyboxMasonry({ photos }: FancyboxMasonryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    Fancybox.bind(container, '[data-fancybox="gallery"]', {
      backdrop: {
        background: 'rgba(0, 0, 0, 0.75)',
        blur: '8px',
      },
      zoom: {
        pan: { friction: 0.8 },
        zoom: { friction: 0.8 },
      },
      Carousel: { infinite: false },
      Toolbar: { display: ['zoom', 'close'] },
      Images: { zoom: true },
      Thumbs: false,
      Caption: { enabled: false },
    } as any);

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
    >
      {photos.map((photo, idx) => (
        <div key={idx} className="break-inside-avoid">
          <MasonryImage photo={photo} />
        </div>
      ))}
    </div>
  );
}