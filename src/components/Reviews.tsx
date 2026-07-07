'use client'

import { motion } from 'framer-motion';

const REVIEWS = [
  {
    quote:
      'Left it running on the porch through a storm. Still pairs instantly, still sounds like the first day.',
    name: 'M. Okonkwo',
    detail: 'Aura X1 owner, 14 months',
  },
  {
    quote:
      'The bass doesn\'t distort at max volume. I checked. Repeatedly. Neighbors have opinions now.',
    name: 'S. Tanaka',
    detail: 'Aura Max owner, 6 months',
  },
  {
    quote:
      'Battery indicator is honest — 28 hours means 28 hours, not "up to." That alone earned my trust.',
    name: 'R. Delgado',
    detail: 'Aura X1 owner, 3 months',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative border-t-2 border-[#1A202C]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          // FIELD REPORTS
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-3xl md:text-5xl max-w-2xl mb-14"
        >
          FROM PEOPLE<br />WHO ACTUALLY USE IT.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t-2 border-[#FF6B35] pt-6"
            >
              <p className="text-lg leading-relaxed text-[#E8EAED]">
                &ldquo;{r.quote}&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-display text-sm text-[#00D9FF]">{r.name}</p>
                <p className="eyebrow text-[10px] mt-1">{r.detail}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
