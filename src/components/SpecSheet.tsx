'use client'

import { motion } from 'framer-motion';

const SPECS = [
  { label: 'DRIVER CONFIG', value: '2x titanium 1.5" tweeter + 3.5" woofer' },
  { label: 'PEAK OUTPUT', value: '40W RMS' },
  { label: 'BLUETOOTH', value: '5.3 — LE Audio, aptX HD' },
  { label: 'BATTERY', value: '28 hrs @ 60% volume' },
  { label: 'CHARGE TIME', value: '2.5 hrs via USB-C PD' },
  { label: 'INGRESS RATING', value: 'IP67 — 1m submersion, 30 min' },
  { label: 'RANGE', value: '40m line of sight' },
  { label: 'WEIGHT', value: '1.2 kg' },
];

export default function SpecSheet() {
  return (
    <section id="specs" className="relative border-t-2 border-[#1A202C]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          // TECHNICAL SPECIFICATION
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-3xl md:text-5xl max-w-2xl mb-14"
        >
          NOTHING HIDDEN.<br />EVERYTHING MEASURED.
        </motion.h2>

        <div className="grid md:grid-cols-2 border-t-2 border-l-2 border-[#1A202C]">
          {SPECS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.05 }}
              className="border-r-2 border-b-2 border-[#1A202C] p-6 md:p-8 flex items-baseline justify-between gap-4 hover:bg-[#1A202C]/60 transition-colors"
            >
              <span className="eyebrow text-[11px] tracking-[0.16em] shrink-0">{s.label}</span>
              <span className="font-display text-sm md:text-base text-right text-[#E8EAED]">
                {s.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
