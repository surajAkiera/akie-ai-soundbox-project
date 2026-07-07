'use client'

import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  tagline: string;
  specLine: string;
  price: string;
  imagePrompt: string;
  featured?: boolean;
  index: number;
}

export default function ProductCard({
  name,
  tagline,
  specLine,
  price,
  imagePrompt,
  featured,
  index,
}: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className={`border-[3px] border-[#00D9FF] bg-[#1A202C] flex flex-col ${
        featured ? 'md:-translate-y-6' : ''
      }`}
      style={{
        boxShadow: featured
          ? '0 16px 64px color-mix(in oklch, #00D9FF 22%, #0F1419 78%)'
          : '0 2px 8px color-mix(in oklch, #0F1419 70%, black 30%)',
      }}
    >
      <div className="relative aspect-[4/3] bg-[#0F1419] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-akie-prompt={imagePrompt}
          data-akie-aspect="3:4"
          data-akie-role="inline"
          alt={`${name} bluetooth speaker product photo`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {featured && (
          <span className="absolute top-3 left-3 eyebrow bg-[#0F1419] border border-[#FF6B35] text-[#FF6B35] px-2 py-1 text-[10px]">
            FLAGSHIP
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl text-[#E8EAED]">{name}</h3>
        <p className="text-sm text-[#8B96A5] mt-1">{tagline}</p>
        <p className="eyebrow mt-4 text-[10px] tracking-[0.14em]">{specLine}</p>
        <div className="h-[2px] bg-[#FF6B35] my-4" />
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl text-[#00D9FF]">{price}</span>
          <a
            href="#order"
            className="min-h-[44px] px-3 flex items-center border-2 border-[#00D9FF] text-[#00D9FF] uppercase text-xs font-semibold tracking-[0.1em] hover:bg-[#00D9FF] hover:text-[#0F1419] focus-visible:bg-[#00D9FF] focus-visible:text-[#0F1419] transition-colors outline-none"
          >
            Select
          </a>
        </div>
      </div>
    </motion.article>
  );
}
