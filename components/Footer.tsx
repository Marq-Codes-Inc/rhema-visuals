/* components/Footer.tsx */
import { Container } from './ui/Container';
import { FaInstagram, FaFacebook, FaTiktok, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/rhema_visuals_ltd', icon: FaInstagram },
  { name: 'Facebook', href: 'https://facebook.com/rhemavisuals', icon: FaFacebook },
  { name: 'TikTok', href: 'https://www.tiktok.com/@rhemavisuals1', icon: FaTiktok },
  { name: 'X (Twitter)', href: 'https://twitter.com/rhemavisuals', icon: FaXTwitter },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">
              RHEMA <span className="text-brand-orange">VISUALS</span>
              <span className="text-xs font-mono ml-1">LTD</span>
            </h3>
            <p className="text-sm text-secondary">
              Capturing moments with high-contrast, modern aesthetics.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Location</h4>
            <address className="not-italic text-secondary text-sm space-y-1">
              <p>Kampala, Wilson Street</p>
              <p>Jesco Building Room CE-10</p>
            </address>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Contact</h4>
            <div className="text-secondary text-sm space-y-2">
              <p className="flex items-center gap-2">
                <FaPhone className="w-3.5 h-3.5 text-brand-orange" />
                <a href="tel:+256755311193" className="hover:text-brand-orange transition">+256 755 311 193</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="w-3.5 h-3.5 text-brand-orange" />
                <a href="mailto:rhemavisuals@gmail.com" className="hover:text-brand-orange transition">rhemavisuals@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-brand-orange transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-subtle text-center text-xs text-secondary">
          <p>© {currentYear} Rhema Visuals Ltd. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}