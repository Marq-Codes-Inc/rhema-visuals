import { Container } from '@/components/ui/Container';
import Image from 'next/image';
import rehemahImg from '@/public/images/team/rehemah.jpg';

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-20 max-w-4xl">
      {/* Hero / CEO Intro */}
      <div className="space-y-12">
        <div className="border-l-4 border-brand-orange pl-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-display">
            About <span className="text-brand-orange">Rhema Visuals</span>
          </h1>
          <p className="text-secondary text-lg mt-4">
            Storytellers of light, love, and life’s most precious moments.
          </p>
        </div>

        {/* CEO Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 prose prose-invert prose-lg text-secondary space-y-4 leading-relaxed">
            <p>
              Hi, I’m <strong className="text-brand-black">Rehema Namaganda</strong> the heart and eyes behind Rhema Visuals. 
              Photography found me long before I ever picked up a camera. I’ve always been captivated by the way light dances on a baby’s lashes, 
              the quiet tenderness of a family huddled together, and the unspoken joy of two people saying “I do.”
            </p>
            <p>
              For me, every click isn’t just about a picture it’s about preserving a feeling. I believe the best images are the ones that make you 
              stop, smile, and remember exactly what that moment felt like. That’s why I pour so much care into every session, whether it’s a newborn 
              curled in a parent’s arms or a bride’s first look at her groom.
            </p>
            <p>
              I specialize in turning fleeting seconds into timeless art with a style that’s clean, warm, and intentionally composed. My approach 
              blends gentle direction with genuine, candid observation so that even the shyest baby or the most camera‑shy dad can relax and be themselves.
            </p>
            <p>
              When I’m not behind the lens, you’ll find me experimenting with new lighting techniques, curating galleries that tell a story from start 
              to finish, or simply soaking up time with the people I love most. I can’t wait to meet you and create something beautiful together.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-brand-orange shadow-lg">
              <Image src={rehemahImg} alt="Rehemah" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="pt-8">
          <h2 className="text-3xl font-bold mb-6 font-display">
            What I <span className="text-brand-orange">Create</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Maternity & Newborn', desc: 'Soft, intimate portraits that celebrate the miracle of new life.' },
              { title: 'Baby Milestones', desc: 'From first smiles to first steps captured with patience and playfulness.' },
              { title: 'Family Portraits', desc: 'Real connection over stiff poses. We’ll laugh, cuddle, and I’ll capture the in‑betweens.' },
              { title: 'Weddings & Proposals', desc: 'Cinematic storytelling for your biggest day, with an eye for every emotional detail.' },
              { title: 'Artistic Visuals', desc: 'Creative concepts, editorial‑style shoots, and video work that feels like a short film.' },
              { title: 'Corporate & Branding', desc: 'Clean, professional headshots and content that elevates your business.' },
            ].map((item) => (
              <div key={item.title} className="border border-subtle rounded-md p-6 bg-card hover:border-brand-orange transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-2 text-brand-black">{item.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy / Mission */}
        <div className="border-t border-subtle pt-8">
          <blockquote className="text-2xl italic font-light text-secondary max-w-3xl leading-relaxed">
            “I don’t just take photos; I freeze the love, the chaos, and the little details that make your story uniquely yours.”
          </blockquote>
          <p className="text-secondary mt-4">— Rehemah Namaganda, Founder & Lead Photographer</p>
        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-8">
          <h2 className="text-3xl font-bold mb-8 font-display">
            Frequently Asked <span className="text-brand-orange">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I book a session?',
                a: 'Simply reach out via our Contact page or email hello@rhemavisuals.com. We’ll chat about your vision, pick a date, and I’ll send over a booking proposal and retainer invoice to lock it in.',
              },
              {
                q: 'What should we wear for a family session?',
                a: 'I always recommend coordinating, not matching. Soft, neutral tones, timeless patterns, and comfortable fabrics photograph beautifully and keep the focus on faces and emotions.',
              },
              {
                q: 'Do you travel for weddings or destination shoots?',
                a: 'Absolutely! I love capturing love wherever it takes you. Travel fees are calculated based on location and are always transparent upfront.',
              },
              {
                q: 'How long until we receive our gallery?',
                a: 'For portrait sessions, your online gallery is ready within 2–3 weeks. Weddings and larger events take 6–8 weeks. I’ll send a few sneak peeks within 48 hours because I know you’re excited!',
              },
              {
                q: 'Do you offer albums or prints?',
                a: 'Yes all packages include a private online gallery where you can order professional‑grade prints, canvases, and heirloom albums directly.',
              },
              {
                q: 'What if my child is shy or won’t sit still?',
                a: 'That’s the best part I don’t expect them to! I’ll follow their lead, play games, and capture the real moments. Those are the images you’ll cherish most.',
              },
            ].map((faq) => (
              <details key={faq.q} className="group border border-subtle rounded-md p-5 bg-card hover:border-brand-orange transition-colors duration-200 cursor-pointer">
                <summary className="text-lg font-semibold text-brand-black list-none flex justify-between items-center">
                  {faq.q}
                  <span className="ml-4 text-brand-orange group-open:rotate-45 transition-transform duration-200 text-xl">+</span>
                </summary>
                <p className="mt-4 text-secondary leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-subtle">
          <p className="text-secondary text-lg mb-4">Ready to make some magic together?</p>
          <a href="/contact" className="inline-block bg-brand-orange text-black px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            Let’s Connect
          </a>
        </div>
      </div>
    </Container>
  );
}
