'use client';

import { useState } from 'react';
import FancyboxMasonry from '@/components/FancyboxMasonry';
import { Container } from '@/components/ui/Container';

type Category = 'weddings' | 'portraits' | 'proposals' | 'commercial' | 'corporate';

const galleryData: Record<Category, { src: string; alt: string; width: number; height: number }[]> = {
  weddings: [
    { src: '/images/gallery/Wedding/wedding (1).jpg', alt: 'Bride and groom sharing a moment during the wedding ceremony', width: 1200, height: 800 },
    { src: '/images/gallery/Wedding/wedding (2).jpg', alt: 'Elegant bridal portrait showing gown details', width: 800, height: 1200 },
    { src: '/images/gallery/Wedding/wedding (3).jpg', alt: 'Newlyweds enjoying their romantic first dance', width: 1200, height: 800 },
    { src: '/images/gallery/Wedding/wedding (4).jpg', alt: 'Candid moment of guests celebrating at the reception decor', width: 1600, height: 900 },
    { src: '/images/gallery/Wedding/wedding (5).jpg', alt: 'Close-up of the wedding rings during the exchange of vows', width: 1200, height: 800 },
    { src: '/images/gallery/Wedding/wedding (6).jpg', alt: 'Groom looking sharp in a tailored tuxedo for his portrait', width: 800, height: 1200 },
    { src: '/images/gallery/Wedding/wedding (7).jpg', alt: 'Emotional wedding party toast during the reception dinner', width: 1200, height: 800 },
    { src: '/images/gallery/Wedding/wedding (8).jpg', alt: 'Beautifully decorated head table at the wedding reception venue', width: 1600, height: 900 },
    { src: '/images/gallery/Wedding/wedding (8).jpg', alt: 'Wide angle shot of the wedding reception venue layout', width: 1600, height: 900 },
    { src: '/images/gallery/Wedding/wedding (25).jpg', alt: 'Bride and bridesmaids sharing a laugh while getting ready', width: 800, height: 1000 },
    { src: '/images/gallery/Wedding/wedding (23).jpg', alt: 'Artistic outdoor portrait of the bride and groom at sunset', width: 800, height: 1000 },
    { src: '/images/gallery/Wedding/wedding (26).jpg', alt: 'Elegant wedding cake cutting ceremony', width: 800, height: 1000 },
    { src: '/images/gallery/Wedding/wedding (27).jpg', alt: 'Grand entrance of the bride and groom into the reception hall', width: 1600, height: 900 },
    { src: '/images/gallery/Wedding/wedding (30).jpg', alt: 'Scenic wide shot of an outdoor garden wedding ceremony setting', width: 1600, height: 900 },
    { src: '/images/gallery/Kukyaala/kukyaala (11).jpg', alt: 'Traditional Kukyaala pre-wedding ceremony introduction decor and gifts', width: 800, height: 1000 },
    { src: '/images/gallery/Kukyaala/kukyaala (12).jpg', alt: 'Family members interacting during a traditional Kukyaala ceremony', width: 800, height: 1000 },
    { src: '/images/gallery/Kukyaala/kukyaala (13).jpg', alt: 'Bride-to-be dressed in traditional attire for the Kukyaala visit', width: 800, height: 1000 },
    { src: '/images/gallery/Kukyaala/kukyaala (14).jpg', alt: 'Candid laughter during a traditional Ugandan pre-wedding introduction', width: 800, height: 1000 },
    { src: '/images/gallery/Kukyaala/kukyaala (15).jpg', alt: 'Beautiful portrait of the couple during their Kukyaala ceremony', width: 800, height: 1000 },
  ],
  portraits: [
    { src: '/images/gallery/Portraits/portrait (1).jpg', alt: 'Professional studio portrait with clean, focused lighting', width: 1200, height: 800 },
    { src: '/images/gallery/Portraits/portrait (2).jpg', alt: 'Natural light outdoor portrait in a scenic park setting', width: 800, height: 1200 },
    { src: '/images/gallery/Portraits/portrait (3).jpg', alt: 'Expressive dramatic black and white fine art portrait', width: 1200, height: 800 },
    { src: '/images/gallery/Portraits/portrait (4).jpg', alt: 'Environmental portrait showcasing the subject in their creative workspace', width: 1600, height: 900 },
    { src: '/images/gallery/Portraits/portrait (5).jpg', alt: 'Close-up headshot of a smiling model against a neutral background', width: 1200, height: 800 },
    { src: '/images/gallery/Portraits/portrait (6).jpg', alt: 'Lifestyle portrait capturing joyful movement outdoors', width: 800, height: 1200 },
    { src: '/images/gallery/Portraits/portrait (7).jpg', alt: 'Casual portrait of a man leaning against a rustic brick wall', width: 800, height: 1200 },
    { src: '/images/gallery/Portraits/portrait (8).jpg', alt: 'Maternity portrait capturing a mother-to-be in soft evening light', width: 800, height: 1200 },
    { src: '/images/gallery/Portraits/portrait (9).jpg', alt: 'High-fashion editorial portrait highlighting bold styling and pose', width: 800, height: 1200 },
    { src: '/images/gallery/Portraits/portrait (10).jpg', alt: 'Serene portrait of a woman amidst blooming spring flowers', width: 800, height: 1200 },
  ],
  proposals: [
    { src: '/images/gallery/Proposals/proposal (1).jpg', alt: 'Surprise marriage proposal captured live at a scenic viewpoint', width: 1200, height: 800 },
    { src: '/images/gallery/Proposals/proposal (2).jpg', alt: 'Close-up of the emotional reaction during a surprise proposal', width: 1200, height: 800 },
    { src: '/images/gallery/Proposals/proposal (3).jpg', alt: 'Groom-to-be down on one knee presenting the engagement ring', width: 800, height: 1200 },
    { src: '/images/gallery/Proposals/proposal (4).jpg', alt: 'The newly engaged couple embracing after saying yes', width: 1600, height: 900 },
    { src: '/images/gallery/Proposals/proposal (5).jpg', alt: 'Romantic beach setup with fairy lights and flowers for a proposal', width: 1200, height: 800 },
    { src: '/images/gallery/Proposals/proposal (6).jpg', alt: 'Close-up of the diamond engagement ring on the bride-to-be\'s hand', width: 1200, height: 800 },
  ],
  commercial: [
    { src: '/images/gallery/Commercial/commercial (1).jpg', alt: 'Sleek studio product photography for an electronic gadget', width: 1200, height: 800 },
    { src: '/images/gallery/Commercial/commercial (2).jpg', alt: 'High-concept fashion lookbook imagery featuring modern apparel', width: 800, height: 1200 },
    { src: '/images/gallery/Commercial/commercial (3).jpg', alt: 'Editorial food photography showcasing a gourmet signature dish', width: 1200, height: 800 },
    { src: '/images/gallery/Commercial/commercial (4).jpg', alt: 'Architectural photography highlighting a luxury modern home exterior', width: 1600, height: 900 },
    { src: '/images/gallery/Commercial/commercial (5).jpg', alt: 'Interior design commercial shoot of a minimalist living room', width: 1200, height: 800 },
    { src: '/images/gallery/Commercial/commercial (6).jpg', alt: 'E-commerce product lineup displayed cleanly against a white background', width: 1600, height: 900 },
  ],
  corporate: [
    { src: '/images/gallery/Corporate/corporate (1).jpg', alt: 'Professional corporate headshot of a business executive', width: 1200, height: 800 },
    { src: '/images/gallery/Corporate/corporate (2).jpg', alt: 'Team collaboration meeting in a modern open-concept corporate office', width: 800, height: 1200 },
    { src: '/images/gallery/Corporate/corporate (3).jpg', alt: 'Keynote speaker addressing an audience at a business conference', width: 1200, height: 800 },
    { src: '/images/gallery/Corporate/corporate (4).jpg', alt: 'Candid networking event with professionals interacting and exchanging ideas', width: 1600, height: 900 },
    { src: '/images/gallery/Corporate/corporate (5).jpg', alt: 'Corporate panel discussion during an annual industry summit', width: 1200, height: 800 },
    { src: '/images/gallery/Corporate/corporate (6).jpg', alt: 'Wide shot of a modern corporate office building and lobby design', width: 1600, height: 900 },
  ],
};

const categories: { id: Category; label: string }[] = [
  { id: 'weddings', label: 'Weddings' },
  // { id: 'proposals', label: 'Proposals' },
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
