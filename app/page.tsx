import Gallery from '@/components/Gallery';
import Slider from '@/components/Slider';
import VideoCarousel from '@/components/VideoCarousel';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import PackageCard from '@/components/PackageCard';
import { getFeaturedPackages } from '@/lib/packages';

export default function Home() {
  const featuredPackages = getFeaturedPackages();

  return (
    <div className="space-y-20 md:space-y-28 pb-12">
      {/* Hero Section */}
      <Container className="pt-5 md:pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter leading-[1.1] text-brand-black font-display">
              RHEMA{' '}
              <span className="text-brand-orange">VISUALS</span>{' '}
              <span className="inline text-base sm:text-lg md:text-2xl font-normal tracking-[0.15em] align-baseline ml-2 text-brand-black">
                Ltd
              </span>
            </h1>
            <p className="text-secondary text-sm uppercase tracking-widest mt-4">
              Photography & Cinematography
            </p>
          </div>
          <p className="text-secondary max-w-xs text-sm uppercase tracking-widest border-l-2 border-brand-orange pl-4">
            Capturing beauty.
          </p>
        </div>
        <div className="overflow-hidden shadow-2xl">
          <Slider />
        </div>
      </Container>

      {/* Gallery Section */}
      <section id="work" className="scroll-mt-24">
        <Container>
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black">
              Samples of our <span className="text-brand-orange">Work</span>
            </h2>
            <div className="h-px grow mx-4 bg-black/10 dark:bg-white/10 hidden md:block" />
            <span className="text-secondary font-mono text-sm bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">
              PORTFOLIO '2026
            </span>
          </div>
          <Gallery />
          <div className="flex justify-end mt-10">
            <Link href="/gallery">
              <Button variant="outline" size="md">View More Work →</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Packages Section */}
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-black">
            Our <span className="text-brand-orange">Packages</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Choose the perfect plan for your next project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPackages.map((pkg) => (
            <PackageCard key={pkg.name} package={pkg} featured />
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <Link href="/packages">
            <Button variant="outline" size="md">See All Packages →</Button>
          </Link>
        </div>
      </Container>

      {/* Video Carousel Section */}
      <section className="bg-black/5 dark:bg-white/5 py-16 md:py-24 border-y border-subtle">
        <Container>
          <div className="max-w-6xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black">Motion Content</h2>
            <p className="text-secondary max-w-lg mx-auto">
              Cinematic storytelling, professional and high res production.
            </p>
            <VideoCarousel />
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <Container>
        <div className="text-center py-12 md:py-20 rounded-md border border-subtle bg-card">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black">Ready to Capture your beautiful moments?</h2>
          <Link href="/contact">
            <Button size="lg">GET IN TOUCH</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}