import FancyboxMasonry from '@/components/FancyboxMasonry';

const photos = [
  { src: '/images/photo1.jpg', alt: 'Wedding photography', width: 1200, height: 800 },
  { src: '/images/photo2.jpg', alt: 'Portrait photography', width: 800, height: 1200 },
  { src: '/images/photo3.jpg', alt: 'Event coverage', width: 1200, height: 800 },
  { src: '/images/photo4.jpg', alt: 'Commercial shoot', width: 1600, height: 900 },
  { src: '/images/photo5.jpg', alt: 'Street photography', width: 1200, height: 1200 },
  { src: '/images/photo6.jpg', alt: 'Product photography', width: 800, height: 1000 },
];

export default function Gallery() {
  return <FancyboxMasonry photos={photos} />;
}
