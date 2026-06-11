'use client';

import { useEffect, useState } from 'react';

export default function FontToggle() {
  const [isPoppins, setIsPoppins] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('font');
    if (stored === 'poppins') {
      document.documentElement.classList.add('font-poppins');
      setIsPoppins(true);
    }
  }, []);

  const toggle = () => {
    const next = !isPoppins;
    setIsPoppins(next);

    if (next) {
      document.documentElement.classList.add('font-poppins');
      localStorage.setItem('font', 'poppins');
    } else {
      document.documentElement.classList.remove('font-poppins');
      localStorage.setItem('font', 'calligraphic');
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label={isPoppins ? 'Switch to calligraphic font' : 'Switch to Poppins font'}
    >
      <img
        src="/italic-outline-icon.svg"
        alt="Font style"
        className="w-5 h-5"
      />
    </button>
  );
}