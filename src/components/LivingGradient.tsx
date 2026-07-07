'use client'

import { motion } from 'framer-motion';

export default function LivingGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute h-[140%] w-[140%] -top-1/4 -left-1/4 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,217,255,0.22) 0%, rgba(0,217,255,0.06) 38%, transparent 65%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: ['0%', '12%', '-6%', '0%'],
          y: ['0%', '-8%', '10%', '0%'],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute h-[90%] w-[90%] top-1/3 left-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,107,53,0.14) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: ['0%', '-15%', '8%', '0%'],
          y: ['0%', '10%', '-12%', '0%'],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <div className="grain-overlay" />
    </div>
  );
}
