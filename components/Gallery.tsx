import FancyboxMasonry from '@/components/FancyboxMasonry';

const photos = [
  { src: '/images/gallery/Wedding/wedding (1).jpg', alt: 'Wedding photography', width: 1200, height: 800 },
  { src: '/images/gallery/Wedding/wedding (3).jpg', alt: 'Portrait photography', width: 800, height: 1200 },
  { src: '/images/gallery/Kukyaala/kukyaala (3).jpg', alt: 'Event coverage', width: 1200, height: 800 },
  { src: '/images/gallery/Wedding/wedding (4).jpg', alt: 'Commercial shoot', width: 1600, height: 900 },
  { src: '/images/gallery/Wedding/wedding (5).jpg', alt: 'Street photography', width: 1200, height: 1200 },
  { src: '/images/gallery/Wedding/wedding (7).jpg', alt: 'Product photography', width: 800, height: 1000 },
  { src: '/images/gallery/Corporate/corporate (6).jpg', alt: 'Product photography', width: 800, height: 1000 },
  { src: '/images/gallery/Kukyaala/kukyaala (11).jpg', alt: 'Product photography', width: 800, height: 1000 },
  { src: '/images/gallery/Wedding/wedding (6).jpg', alt: 'Commercial shoot', width: 1600, height: 900 },
  { src: '/images/gallery/Wedding/wedding (8).jpg', alt: 'Commercial shoot', width: 1600, height: 900 },
  { src: '/images/gallery/Wedding/wedding (25).jpg', alt: 'Product photography', width: 800, height: 1000 },
  { src: '/images/gallery/Wedding/wedding (23).jpg', alt: 'Product photography', width: 800, height: 1000 },
  { src: '/images/gallery/Wedding/wedding (26).jpg', alt: 'Product photography', width: 800, height: 1000 },
  { src: '/images/gallery/Wedding/wedding (27).jpg', alt: 'Commercial shoot', width: 1600, height: 900 },
  { src: '/images/gallery/Wedding/wedding (30).jpg', alt: 'Commercial shoot', width: 1600, height: 900 },
  { src: '/images/gallery/Kukyaala/kukyaala (13).jpg', alt: 'Product photography', width: 800, height: 1000 }
];

export default function Gallery() {
  return <FancyboxMasonry photos={photos} />;
}
