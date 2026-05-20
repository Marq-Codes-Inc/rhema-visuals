import { Container } from "@/components/ui/Container";
import PackageCard from "@/components/PackageCard";
import { getAllPackages } from "@/lib/packages";
import Link from "next/link";
import { Check } from "lucide-react";

const categoryDetails: Record<string, { label: string; intro: string }> = {
  proposal: {
    label: "Proposal Packages",
    intro:
      "Capture the moment she says ‘Yes’ with our discreet proposal photography and videography.",
  },
  kukyala: {
    label: "Kukyaala Packages",
    intro:
      "Why not place your Kukyaala Photography and Videography in the hands of the best in Kampala.\n\nWe have a range of Kukyaala package deals which start at only USH 1M and we like to think of these packages as inexpensive. With honest pricing and a variety of incredible package options, we make it easy to deliver your work entirely unique to you.",
  },
  kuhingira: {
    label: "Kwanjula & Kuhingira Packages",
    intro:
      "Are you looking for an experienced photography Company at affordable prices? You found Us! Our pricing and packages are designed to appeal to everyone.\n\nWe specialize in wedding photography, Kukyala, Kwanjula, corporate, Nicah and photo shoots, often traveling to your destination to capture the perfect moments. Our Approach is to Always Light up the Venue with Our Presence while capturing the moments of your special event.",
  },
  wedding: {
    label: "Wedding Packages",
    intro:
      "Our wedding packages are designed to provide you with everything you need to create lasting memories of your special day. Be the envy of your friends and tie the knot in style.\n\nExplore Our easy & romantic wedding options! Our ALL-IN-CLUSIVE WEDDING PACKAGES will offer you a wedding that is Unforgettable in Kampala.",
  },
  "portrait-indoor": {
    label: "Portrait Session – Indoor (Studio)",
    intro:
      "Come to our fully equipped studio for a relaxed, professional portrait experience.",
  },
  "portrait-outdoor": {
    label: "Portrait Session – Outdoor",
    intro:
      "Choose your favorite outdoor location and let us create stunning natural‑light portraits.",
  },
  corporate: {
    label: "Corporate Photoshoot",
    intro:
      "Polished headshots and office lifestyle imagery that elevates your brand.",
  },
  creative: {
    label: "Creative Photoshoot",
    intro:
      "Bold, conceptual photography for those who want to stand out.",
  },
};

const categoryOrder = [
  "proposal",
  "kukyala",
  "kuhingira",
  "wedding",
  "portrait-indoor",
  "portrait-outdoor",
  "corporate",
  "creative",
];

const extraServices = [
  { label: "(2) 4K 50\" Display TVs", price: "USH 750,000" },
  { label: "Extra A3 Photobook", price: "FROM USH 480,000" },
  { label: "Drone Services (Full Day)", price: "USH 500,000" },
  { label: "Extra A4 Photobook", price: "FROM USH 350,000" },
  { label: "360 photo booth | Full day", price: "+ USH 800,000" },
  { label: "Love Story (Shot from Our Office)", price: "Free Of Charge" },
  { label: "Extra Photographer", price: "+ USH 600,000" },
  { label: "Same Day Edit", price: "+ USH 600,000" },
];

export default function PackagesPage() {
  const allPackages = getAllPackages();

  const grouped = allPackages.reduce<Record<string, typeof allPackages>>(
    (acc, pkg) => {
      const cat = pkg.category || "uncategorised";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(pkg);
      return acc;
    },
    {}
  );

  return (
    <Container className="py-12 md:py-20 max-w-5xl">
      {/* Page heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-black">
          Our <span className="text-brand-orange">Packages</span>
        </h1>
        <p className="text-secondary text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your next event. Custom requests are always welcome.
        </p>
      </div>

      {/* Category sections */}
      <div className="space-y-24">
        {categoryOrder.map((cat) => {
          const packages = grouped[cat];
          if (!packages || packages.length === 0) return null;
          const { label, intro } = categoryDetails[cat] || {
            label: cat,
            intro: "",
          };

          return (
            <section key={cat} className="scroll-mt-10">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-3">
                {label}
              </h2>
              {intro && (
                <p className="text-secondary whitespace-pre-line mb-8 max-w-3xl leading-relaxed">
                  {intro}
                </p>
              )}

              {/* Stack layout: cleanly handles horizontal desktop layout without compression */}
              <div className="flex flex-col gap-8">
                {packages.map((pkg) => (
                  <PackageCard key={pkg.name} package={pkg} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Extra Epic Services */}
      <section className="mt-24 border-t border-subtle pt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-3">
          Extra Epic Services
        </h2>
        <p className="text-secondary mb-8 max-w-2xl leading-relaxed">
          Don’t settle for mediocre Events when you aim to exude excellence. Our
          Extra Services are Fairly Priced to bring out the best in your
          Wedding.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extraServices.map((service) => (
            <div
              key={service.label}
              className="flex items-center justify-between bg-card border border-subtle rounded-xl px-5 py-4 shadow-sm"
            >
              <span className="text-brand-black font-medium text-sm flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600 shrink-0" />
                {service.label}
              </span>
              <span className="text-brand-orange font-semibold text-sm whitespace-nowrap ml-4">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Custom contact link */}
      <div className="mt-20 text-center border-t border-subtle pt-10">
        <p className="text-secondary text-base">
          Need something custom?{" "}
          <Link
            href="/contact"
            className="text-brand-orange hover:underline font-semibold"
          >
            Contact us
          </Link>{" "}
          for a personalized quote.
        </p>
      </div>
    </Container>
  );
}