import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import ScrollToTop from '@/components/ScrollToTop';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Inter, Parisienne } from 'next/font/google';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import CategoryScrollButtons from '@/components/CategoryScrollButtons';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const parisienne = Parisienne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rhemavisuals.com'),
  title: 'Rhema Visuals | Photography & Cinematography',
  description: 'Professional portfolio of Rhema Visuals. Capturing moments in high-contrast style.',
  openGraph: {
    title: 'Rhema Visuals',
    description: 'Capturing moments beautifully.',
    url: 'https://rhemavisuals.com',
    siteName: 'Rhema Visuals',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF7A00',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${parisienne.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = stored === 'dark' || (stored === null && prefersDark);
                document.documentElement.classList.toggle('dark', isDark);
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="grow pt-20 md:pt-28">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <WhatsAppIcon />
          <CategoryScrollButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
