/* packages/page.tsx */
import { Container } from '@/components/ui/Container';
import PackageCard from '@/components/PackageCard';
import { getAllPackages } from '@/lib/packages';
import Link from 'next/link';

export default function PackagesPage() {
  const allPackages = getAllPackages();

  return (
    <Container className="py-12 md:py-20 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-brand-orange">Packages</span>
        </h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your next project. Custom requests are always welcome.
        </p>
      </div>

      <div className="space-y-12">
        {allPackages.map((pkg, idx) => (
          <PackageCard key={pkg.name} package={pkg} reverse={idx % 2 !== 0} />
        ))}
      </div>

      <div className="mt-16 text-center border-t border-subtle pt-10">
        <p className="text-secondary">
          Need something custom? <Link href="/contact" className="text-brand-orange hover:underline">Contact us</Link> for a personalized quote.
        </p>
      </div>
    </Container>
  );
}
