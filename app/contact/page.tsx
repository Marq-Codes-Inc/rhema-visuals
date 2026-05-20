/* contact/page.tsx */
'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

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
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="form-name" value="contact" />
      <div className="space-y-2">
        <label className="block text-sm font-medium">Full Name</label>
        <input type="text" name="name" required className="w-full p-3 rounded-md bg-background-color border border-subtle focus:border-brand-orange focus:outline-none" />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" required className="w-full p-3 rounded-md bg-background-color border border-subtle focus:border-brand-orange focus:outline-none" />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 rounded-md bg-background-color border border-subtle focus:border-brand-orange focus:outline-none" />
      </div>
      <Button type="submit" size="md" disabled={status === 'submitting'} className="w-full">
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
      {status === 'success' && <p className="text-green-600 dark:text-green-400 text-center">Thanks! I'll reply soon.</p>}
      {status === 'error' && <p className="text-red-600 dark:text-red-400 text-center">Error – please try again.</p>}
    </form>
  );
}

export default function ContactPage() {
  return (
    <Container className="py-12 md:py-20 max-w-2xl">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-brand-orange">Get in Touch</h1>
          <p className="text-secondary text-lg">Let's bring your vision to life.</p>
        </div>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </Container>
  );
}

