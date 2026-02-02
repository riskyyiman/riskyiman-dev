'use client';

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Globe, Heart } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';
import Link from 'next/link';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Jakarta',
      }).format(new Date());
      setTime(now);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative pt-16 pb-8 md:pt-24 md:pb-12 bg-background overflow-hidden px-6 border-t border-border/40">
      <div className="absolute bottom-[-1%] md:bottom-[-2%] left-0 w-full pointer-events-none select-none overflow-hidden leading-none opacity-[0.03] dark:opacity-[0.05]">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex whitespace-nowrap font-black text-[18vw] md:text-[22vw] tracking-tighter text-foreground"
        >
          <span className="pr-10 md:pr-20">RISKY IMAN LAEL</span>
          <span className="pr-10 md:pr-20">RISKY IMAN LAEL</span>
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20">
          <motion.div variants={fadeInUp} initial="initial" whileInView="visible" viewport={{ once: true }} className="lg:col-span-6 space-y-8">
            <div className="space-y-4 md:space-y-6">
              <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter">
                  Risky <span className="text-slate-400 dark:text-slate-600 italic font-light">Iman.</span>
                </h3>
              </Link>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md font-medium">
                Mentransformasi baris kode menjadi pengalaman digital yang <span className="text-foreground font-semibold underline decoration-cyan-500/30 underline-offset-4">memanusiakan teknologi.</span>
              </p>
            </div>

            <div className="flex gap-3 md:gap-4">
              {[
                { href: 'https://github.com/riskyyiman', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/riskyimanlaelprasetio/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:riskyiman699@gmail.com', icon: Mail, label: 'Email' },
              ].map((social, i) => (
                <Magnetic key={i}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-card border border-border flex items-center justify-center text-slate-500 hover:text-cyan-500 hover:border-cyan-500/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            {/* Index Section */}
            <motion.div variants={fadeInUp} initial="initial" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 font-mono">Navigasi</p>
              <ul className="space-y-3">
                {['Home', 'About', 'Projects', 'Contact'].map((label) => (
                  <li key={label}>
                    <Link href={label === 'Home' ? '/' : `/${label.toLowerCase()}`} className="text-sm font-semibold text-slate-500 hover:text-foreground transition-colors flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-3 h-px bg-cyan-500 transition-all duration-300"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="visible" viewport={{ once: true }} className="space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 font-mono">Location</p>
              <div className="space-y-4">
                <div className="flex items-start gap-2.5">
                  <MapPin size={14} className="text-cyan-500 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-foreground">Purwokerto, ID</p>
                    <p className="text-[11px] text-slate-500 font-medium">Jawa Tengah</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="initial" whileInView="visible" viewport={{ once: true }} className="col-span-2 md:col-span-1 space-y-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 font-mono">Local Time</p>
              <div className="inline-block px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-border/50">
                <p className="text-xl font-black font-mono tabular-nums text-foreground tracking-tight">{time || '--:--'}</p>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">WIB / GMT+7</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 order-2 md:order-1">
            © {currentYear} <span className="text-foreground">Risky Iman Lael Prasetio</span>
          </div>

          <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-slate-400 order-1 md:order-2">
            <span className="flex items-center gap-1.5">
              Built with <Heart size={10} className="text-rose-500 fill-rose-500/20" /> by Risky
            </span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-border"></span>
            <span>Next.js Enthusiast</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
