'use client'

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const PRODUCTS = [
  {
    name: 'Aura Mini',
    tagline: 'Pocket-sized. Full-range.',
    specLine: '15W · 14hr · IPX6',
    price: '$129',
    imagePrompt:
      'a small compact matte black cylindrical bluetooth speaker resting on a dark wooden desk, soft cyan accent light from the side, minimal shadow, hardware product photography',
  },
  {
    name: 'Aura X1',
    tagline: 'The flagship. Room-filling.',
    specLine: '40W · 28hr · IP67',
    price: '$249',
    imagePrompt:
      'a mid-size matte charcoal cylindrical bluetooth speaker standing on a dark concrete surface, dramatic cyan rim light, dark studio background, hardware product photography',
    featured: true,
  },
  {
    name: 'Aura Max',
    tagline: 'Outdoor. Uncompromised.',
    specLine: '80W · 36hr · IP68',
    price: '$389',
    imagePrompt:
      'a large rugged matte black bluetooth speaker with visible carry strap on rocky outdoor terrain at dusk, cyan and orange rim lighting, dramatic hardware product photography',
  },
];

export default function ProductLineup() {
  return (
    <section id="lineup" className="relative border-t-2 border-[#1A202C] bg-[#0F1419]">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-4"
        >
          // THE LINEUP
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-3xl md:text-5xl max-w-2xl mb-14"
        >
          THREE SIZES.<br />ONE STANDARD.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.name} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
