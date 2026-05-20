'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function ContactForm() {
  const searchParams = useSearchParams();
  const packageName = searchParams.get('package');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (packageName) {
      setMessage(`I'm interested in the ${packageName} package. Please share more details.`);
    }
  }, [packageName]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-5 bg-card p-6 md:p-8 rounded-2xl border border-subtle shadow-sm">
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-brand-black">Full Name</label>
        <input 
          type="text" 
          name="name" 
          required 
          placeholder="John Doe"
          className="w-full p-3 rounded-xl bg-background-color border border-subtle focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition text-sm" 
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-brand-black">Email Address</label>
        <input 
          type="email" 
          name="email" 
          required 
          placeholder="johndoe@example.com"
          className="w-full p-3 rounded-xl bg-background-color border border-subtle focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition text-sm" 
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-brand-black">Message</label>
        <textarea 
          name="message" 
          rows={5} 
          required 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          placeholder="Tell us about your upcoming event, dates, and requirements..."
          className="w-full p-3 rounded-xl bg-background-color border border-subtle focus:border-brand-orange focus:ring-1 focus:ring-brand-orange focus:outline-none transition text-sm resize-none" 
        />
      </div>

      <Button type="submit" size="md" disabled={status === 'submitting'} className="w-full py-3 rounded-full font-semibold transition shadow-sm">
        {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 dark:text-green-400 text-sm font-medium text-center bg-green-50 dark:bg-green-950/30 py-2.5 rounded-lg">
          Thanks! We've received your request and will reply shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 dark:text-red-400 text-sm font-medium text-center bg-red-50 dark:bg-red-950/30 py-2.5 rounded-lg">
          Error – Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-16">
      <Container className="pt-10 md:pt-16 max-w-6xl">
        {/* Header Block */}
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-brand-black tracking-tight">
            Get in <span className="text-brand-orange">Touch</span>
          </h1>
          <p className="text-secondary text-base md:text-lg max-w-xl">
            Let's organize, detail, and bring your unique visual stories to life. Drop us a message or find our studio below.
          </p>
        </div>

        {/* 2 Column Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Suspense fallback={<div className="text-center py-12 text-secondary font-medium">Loading form architecture...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <div className="bg-card border border-subtle rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
              <h2 className="text-xl font-bold text-brand-black border-b border-subtle pb-3">
                Studio Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-brand-black">Our Studio Address</h4>
                    <p className="text-secondary text-sm leading-relaxed mt-0.5">
                      Jesco Building, Room CE-10<br />
                      Wilson Street, Kampala, Uganda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0 mt-0.5">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-brand-black">Working Hours</h4>
                    <p className="text-secondary text-sm leading-relaxed mt-0.5">
                      Monday – Saturday: 8:00 AM – 6:00 PM<br />
                      Sundays: By Appointment Only
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0 mt-0.5">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-brand-black">Call or WhatsApp</h4>
                    <a href="tel:+256755311193" className="text-secondary hover:text-brand-orange text-sm block transition mt-0.5">
                      +256 755 311 193
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0 mt-0.5">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-brand-black">Email Inquiries</h4>
                    <a href="mailto:rhemavisuals@gmail.com" className="text-secondary hover:text-brand-orange text-sm block transition mt-0.5">
                      rhemavisuals@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* Embedded Google Interactive Map Architecture */}
      <section className="w-full border-t border-subtle pt-4">
        <Container className="max-w-6xl">
          <div className="text-center md:text-left mb-6">
            <h3 className="text-lg font-bold text-brand-black">Find Us</h3>
            <p className="text-sm text-secondary">Centrally positioned right within downtown Kampala for easy consultation drop-ins.</p>
          </div>
          <div className="w-full h-87.5 md:h-112.5 rounded-2xl overflow-hidden border border-subtle shadow-inner relative bg-neutral-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7577239335593!2d32.576088875841445!3d0.3130799641122176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc801931818b%3A0x633cbcf6b3f7f09f!2sWilson%20St%2C%20Kampala!5e0!3m2!1sen!2sug!4v1716231000000!5m2!1sen!2sug"
              className="w-full h-full border-0 absolute inset-0 z-10"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rhema Visuals Studio Location Map"
            />
          </div>
        </Container>
      </section>
    </div>
  );
}