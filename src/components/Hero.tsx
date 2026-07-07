'use client'

import { motion } from 'framer-motion';
import LivingGradient from './LivingGradient';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-akie-prompt="a matte charcoal cylindrical bluetooth speaker on a dark concrete pedestal, dramatic single-source cyan rim light tracing its edge, faint suspended dust particles, shot on a dark studio floor, moody hardware product photography"
          data-akie-aspect="16:9"
          data-akie-role="full-bleed"
          alt="Aura X1 bluetooth speaker lit dramatically in a dark studio"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1419] via-[#0F1419]/70 to-[#0F1419]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1419] via-[#0F1419]/20 to-transparent" />
        <LivingGradient />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="eyebrow mb-6"
        >
          // AURA X1 — dual-driver bluetooth 5.3
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="display text-left text-[2.8rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl text-[#E8EAED]"
        >
          SOUND<br />
          BUILT LIKE<br />
          <span className="text-[#00D9FF]">HARDWARE.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mt-8 max-w-md text-base md:text-lg leading-relaxed text-[#8B96A5]"
        >
          40 watts across dual titanium drivers. 28-hour battery. IP67 sealed
          against dust and immersion. No app required — pair once, it remembers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#order"
            className="min-h-[44px] px-3 flex items-center border-2 border-[#00D9FF] text-[#00D9FF] uppercase text-xs font-semibold tracking-[0.1em] hover:bg-[#00D9FF] hover:text-[#0F1419] focus-visible:bg-[#00D9FF] focus-visible:text-[#0F1419] transition-colors outline-none"
          >
            Order the Aura X1 — $249
          </a>
          <a
            href="#specs"
            className="min-h-[44px] px-3 flex items-center border-2 border-transparent text-[#E8EAED] uppercase text-xs font-semibold tracking-[0.1em] hover:border-[#8B96A5] focus-visible:border-[#8B96A5] transition-colors outline-none"
          >
            Read the spec sheet ↓
          </a>
        </motion.div>
        <div className="mt-16 grid grid-cols-3 max-w-lg border-t-2 border-[#FF6B35]/40 pt-4">
          {[
            ['40W', 'PEAK OUTPUT'],
            ['28H', 'BATTERY LIFE'],
            ['IP67', 'DUST / WATER'],
          ].map(([val, label]) => (
            <div key={label}>
              <p className="font-display text-2xl text-[#00D9FF]">{val}</p>
              <p className="eyebrow mt-1 text-[10px] tracking-[0.16em]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
