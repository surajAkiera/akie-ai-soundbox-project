'use client'

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Specs', href: '#specs' },
  { label: 'Lineup', href: '#lineup' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Order', href: '#order' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
        <a href="#" className="font-display text-lg tracking-[0.15em] text-[#E8EAED]">
          RESONANCE<span className="text-[#00D9FF]">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="eyebrow tracking-[0.18em] text-[#8B96A5] hover:text-[#00D9FF] focus-visible:text-[#00D9FF] transition-colors outline-none focus-visible:underline underline-offset-4"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#order"
            className="min-h-[44px] px-3 flex items-center border-2 border-[#00D9FF] text-[#00D9FF] uppercase text-xs font-semibold tracking-[0.1em] hover:bg-[#00D9FF] hover:text-[#0F1419] focus-visible:bg-[#00D9FF] focus-visible:text-[#0F1419] transition-colors outline-none"
          >
            Buy Now
          </a>
        </nav>
        <button
          className="md:hidden text-[#E8EAED] p-2 outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF]"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#1A202C] border-t-2 border-[#00D9FF]/30 px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-[#E8EAED] tracking-[0.18em]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={() => setOpen(false)}
            className="min-h-[44px] px-3 flex items-center justify-center border-2 border-[#00D9FF] text-[#00D9FF] uppercase text-xs font-semibold tracking-[0.1em]"
          >
            Buy Now
          </a>
        </div>
      )}
    </header>
  );
}
