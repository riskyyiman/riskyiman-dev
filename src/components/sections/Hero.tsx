'use client';

import React from 'react';
import { motion, TargetAndTransition, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Terminal } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';

const socialLinks = [
  { href: 'https://github.com/riskyyiman', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/riskyimanlaelprasetio/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:riskyiman699@gmail.com', icon: Mail, label: 'Mail' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.2, 0.65, 0.3, 0.9] as const,
    },
  }),
};

const floatAnimation: TargetAndTransition = {
  y: [-10, 10],
  rotate: [-1, 1],
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  },
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-16 md:pt-48 md:pb-0 px-6 md:px-12 lg:px-20 transition-colors duration-500">
      <div className="container mx-auto z-10 relative max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left w-full order-1">
            {/* Quote Label */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-cyan-500 rounded-full"></span>
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.3em]">Design is how it works.</span>
            </motion.div>

            {/* Headline: Kontras diperbaiki untuk White Mode */}
            <motion.h1 custom={0.1} initial="hidden" animate="visible" variants={fadeUp} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-foreground leading-[0.95] md:leading-[0.9] mb-8">
              Risky Iman <br />
              <span className="text-slate-400 dark:text-slate-500/60 italic text-4xl sm:text-6xl lg:text-7xl">Lael Prasetio.</span>
            </motion.h1>

            {/* Description: Rata Kanan-Kiri tanpa Hyphen */}
            <motion.p custom={0.2} initial="hidden" animate="visible" variants={fadeUp} className="text-justify hyphens-none text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-12 font-light w-full">
              Seorang <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Creative Engineer</span> yang mendedikasikan diri pada presisi visual dan keunggulan teknis. Berfokus pada pengembangan antarmuka berperforma tinggi
              melalui ekosistem <strong className="text-foreground font-semibold underline decoration-cyan-500/30">Next.js</strong>.
            </motion.p>

            {/* Button Hero */}
            <motion.div custom={0.3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-5 w-full md:w-auto mb-16">
              <div className="w-full sm:w-auto">
                <Magnetic strength={0.1}>
                  <button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4.5 bg-foreground text-background rounded-2xl font-bold text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 active:scale-95">
                    Lihat Portofolio
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Magnetic>
              </div>

              <div className="w-full sm:w-auto">
                <Magnetic strength={0.1}>
                  <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4.5 bg-transparent border border-border text-foreground rounded-2xl font-bold text-sm hover:bg-foreground hover:text-background transition-all duration-300">
                    Hubungi Saya
                  </button>
                </Magnetic>
              </div>
            </motion.div>

            {/* Social Icons & Label */}
            <motion.div custom={0.4} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-8 justify-center md:justify-start w-full">
              <div className="flex gap-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Magnetic key={label} strength={0.2}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 rounded-2xl bg-card border border-border text-slate-500 hover:text-cyan-500 hover:border-cyan-500/30 transition-all shadow-sm"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Magnetic>
                ))}
              </div>
              <div className="hidden md:flex items-center gap-4 pl-6 border-l border-border">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] font-bold">Ikuti Saya</span>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: VISUAL (CODE CARD) --- */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-full order-2 mt-4 lg:mt-0">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative w-full flex justify-center">
              <motion.div
                animate={floatAnimation}
                className="relative z-20 w-full max-w-105 bg-card/40 dark:bg-card/60 backdrop-blur-3xl border border-border rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-black/50"
              >
                {/* Header Card */}
                <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-400/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400/80" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black">
                    <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                    risky.tsx
                  </div>
                </div>

                {/* Konten Kode */}
                <div className="font-mono text-xs md:text-sm leading-8 space-y-1">
                  <div className="flex gap-2">
                    <span className="text-cyan-500 font-bold italic">const</span>
                    <span className="text-foreground font-bold">Profile</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-slate-400">{'{'}</span>
                  </div>
                  <div className="pl-6 border-l-2 border-cyan-500/20 ml-1">
                    <div className="flex gap-3">
                      <span className="text-slate-400">nama:</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-medium">'Risky Iman'</span>,
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-400">role:</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-medium">'Creative Engineer'</span>,
                    </div>
                    <div className="flex gap-3">
                      <span className="text-slate-400">status:</span>
                      <span className="text-emerald-500 font-bold tracking-widest uppercase text-[10px] mt-1 bg-emerald-500/10 px-2 py-0.5 rounded">'Active'</span>
                    </div>
                  </div>
                  <div className="text-slate-400">{'}'}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
