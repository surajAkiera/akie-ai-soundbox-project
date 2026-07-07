'use client'

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function OrderPanel() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      setErrorMsg('email needs an @ and a domain — try again');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, model: 'Aura X1' }),
      });
      if (!res.ok) throw new Error('request failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('order didn\'t go through — check your connection and retry');
    }
  };

  return (
    <section id="order" className="relative border-t-2 border-[#1A202C]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-4">// RESERVE YOUR UNIT</p>
          <h2 className="display text-3xl md:text-5xl mb-6">
            SHIPS IN<br /><span className="text-[#00D9FF]">7 DAYS.</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#8B96A5] max-w-md">
            Every unit is bench-tested before it leaves the warehouse — driver
            balance, seal pressure, battery calibration. Enter your email and
            we\'ll send the checkout link plus your bench-test report.
          </p>
          <div className="mt-10 grid grid-cols-2 max-w-sm border-t-2 border-[#FF6B35]/40 pt-4">
            <div>
              <p className="font-display text-xl text-[#00D9FF]">30-DAY</p>
              <p className="eyebrow mt-1 text-[10px]">RETURN WINDOW</p>
            </div>
            <div>
              <p className="font-display text-xl text-[#00D9FF]">2-YEAR</p>
              <p className="eyebrow mt-1 text-[10px]">WARRANTY</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-[3px] border-[#00D9FF] bg-[#1A202C] p-8"
          style={{ boxShadow: '0 8px 32px color-mix(in oklch, #00D9FF 12%, #0F1419 88%)' }}
        >
          {status === 'success' ? (
            <div>
              <p className="font-display text-2xl text-[#00D9FF] mb-3">
                CONFIRMED.
              </p>
              <p className="text-[#8B96A5] leading-relaxed">
                Checkout link is in your inbox. Your Aura X1 ships within 7
                days, bench-test report attached.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="email" className="eyebrow block mb-3">
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                className="w-full bg-[#0F1419] border-2 border-[#00D9FF]/40 focus:border-[#00D9FF] px-4 py-3 text-[#E8EAED] outline-none transition-colors placeholder:text-[#8B96A5]/50"
                aria-invalid={status === 'error'}
                aria-describedby={status === 'error' ? 'email-error' : undefined}
              />
              {status === 'error' && (
                <p id="email-error" className="mt-2 text-sm text-[#FF6B35]">
                  {errorMsg}
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 w-full min-h-[44px] px-3 flex items-center justify-center border-2 border-[#00D9FF] text-[#00D9FF] uppercase text-xs font-semibold tracking-[0.1em] hover:bg-[#00D9FF] hover:text-[#0F1419] focus-visible:bg-[#00D9FF] focus-visible:text-[#0F1419] transition-colors outline-none disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending…' : 'Reserve the Aura X1'}
              </button>
              <p className="mt-4 text-xs text-[#8B96A5]">
                No spam. One email with your checkout link, nothing else.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
