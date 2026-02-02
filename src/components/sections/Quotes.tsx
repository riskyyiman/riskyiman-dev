'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Quotes = () => {
  return (
    <section className="relative py-10 md:py-20 bg-background overflow-hidden px-6">
      <div className="container mx-auto relative z-10 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }} className="flex flex-col items-center text-center">
          <div className="mb-10 p-4 rounded-2xl bg-card border border-border shadow-sm text-cyan-500">
            <Quote size={32} fill="currentColor" className="opacity-20" />
          </div>

          <blockquote className="space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] text-foreground">
              &quot;Engineering is not just about math and machines, but about <span className="text-slate-400 dark:text-slate-800 italic font-light">thinking logically</span> under pressure.&quot;
            </h2>

            <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-cyan-500/50" />
              <cite className="not-italic font-mono text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Engineering Philosophy</cite>
              <div className="h-px w-8 bg-cyan-500/50" />
            </motion.footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
