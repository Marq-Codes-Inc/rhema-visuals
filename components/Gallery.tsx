import FancyboxMasonry from '@/components/FancyboxMasonry';

const photos = [
  { src: '/images/gallery/Wedding/wedding (1).jpg', alt: 'Wedding photography', width: 1200, height: 800 },
  { src: '/images/gallery/Wedding/wedding (3).jpg', alt: 'Portrait photography', width: 800, height: 1200 },
  { src: '/images/gallery/Kukyala/kukyala (3).jpg', alt: 'Event coverage', width: 1200, height: 800 },
  { src: '/images/gallery/Wedding/wedding (4).jpg', alt: 'Commercial shoot', width: 1600, height: 900 },
  { src: '/images/gallery/Wedding/wedding (5).jpg', alt: 'Street photography', width: 1200, height: 1200 },
  { src: '/images/gallery/Wedding/wedding (7).jpg', alt: 'Product photography', width: 800, height: 1000 },
  { src: '/images/gallery/Corporate/corporate (6).jpg', alt: 'Product photography', width: 800, height: 1000 },
];

export default function Gallery() {
  return <FancyboxMasonry photos={photos} />;
}


