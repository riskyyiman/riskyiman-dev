'use client';

import React from 'react';
import { motion, TargetAndTransition, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
  transition: {
    duration: 5,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  },
};

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-16 md:pt-32 md:pb-0 px-6 transition-colors duration-500">
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto z-10 relative max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* --- LEFT COLUMN: CONTENT (Teks & Tombol) --- */}
          {/* order-1 agar muncul di atas pada Mobile */}
          <div className="lg:col-span-7 flex flex-col items-center md:items-start text-center md:text-left w-full order-1">
            {/* Tagline Label */}
            <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-8 bg-cyan-500 rounded-full" />
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest">Creative Engineer</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 custom={0.1} initial="hidden" animate="visible" variants={fadeUp} className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter text-foreground leading-[0.85] mb-10">
              Risky Iman <br />
              <span className="text-slate-400 dark:text-slate-700 italic font-light">Lael Prasetio.</span>
            </motion.h1>

            {/* Description - Rata Kanan Kiri (text-justify) */}
            <motion.p custom={0.2} initial="hidden" animate="visible" variants={fadeUp} className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-medium text-justify">
              Mendedikasikan diri pada presisi visual dan keunggulan teknis. Berfokus pada pengembangan antarmuka berperforma tinggi melalui ekosistem{' '}
              <span className="text-foreground font-bold underline decoration-cyan-500/30 underline-offset-4">Next.js</span>.
            </motion.p>

            {/* CTA Buttons - Full width pada mobile (w-full sm:w-auto) */}
            <motion.div custom={0.3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-5 w-full md:w-auto mb-16">
              {/* Link ke halaman Projects */}
              <Link href="/projects" className="w-full sm:w-auto">
                <Magnetic>
                  <button className="group relative w-full flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background rounded-2xl font-bold text-sm uppercase tracking-widest transition-all hover:shadow-2xl hover:shadow-cyan-500/20 active:scale-95">
                    Proyek Saya
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </Magnetic>
              </Link>

              {/* Link ke halaman Contact */}
              <Link href="/contact" className="w-full sm:w-auto">
                <Magnetic>
                  <button className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-card border border-border text-foreground rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-sm">
                    Hubungi Saya
                  </button>
                </Magnetic>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div custom={0.4} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-6">
              <div className="flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Magnetic key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-card border border-border text-slate-500 hover:text-cyan-600 hover:border-cyan-500/50 transition-all shadow-sm"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  </Magnetic>
                ))}
              </div>
              <div className="h-px w-12 bg-border hidden sm:block" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Let's Connect</span>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: CODE CARD --- */}
          {/* order-2 agar muncul di bawah pada Mobile */}
          <div className="lg:col-span-5 relative flex justify-center items-center order-2 mt-8 lg:mt-0">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative w-full">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />

              <motion.div animate={floatAnimation} className="relative z-20 w-full bg-card border border-border rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200/50 dark:shadow-none">
                {/* Window Header */}
                <div className="flex items-center justify-between mb-8 border-b border-border pb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                    <Terminal size={14} className="text-cyan-500" />
                    developer.ts
                  </div>
                </div>

                {/* Code Body */}
                <div className="font-mono text-sm leading-relaxed space-y-4 text-left">
                  <div className="flex gap-2">
                    <span className="text-cyan-500 italic">type</span>
                    <span className="text-foreground font-bold">Developer</span>
                    <span className="text-slate-400">=</span>
                    <span className="text-slate-400">{'{'}</span>
                  </div>

                  <div className="pl-6 space-y-2 border-l-2 border-slate-100 dark:border-slate-800">
                    <p className="flex gap-3">
                      <span className="text-slate-400">name:</span>
                      <span className="text-cyan-600 dark:text-cyan-400">'Risky Iman'</span>,
                    </p>
                    <p className="flex gap-3">
                      <span className="text-slate-400">focus:</span>
                      <span className="text-cyan-600 dark:text-cyan-400">'Front-End Developer'</span>,
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-400">status:</span>
                      <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase">
                        <Sparkles size={10} /> Open to work
                      </span>
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
