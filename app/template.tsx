'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  // Re-trigger animation on route change
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove('animate-fadeIn');
      void ref.current.offsetWidth; // trigger reflow
      ref.current.classList.add('animate-fadeIn');
    }
  }, [pathname]);

  return (
    <div ref={ref} className="animate-fadeIn">
      {children}
    </div>
  );
}
