'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiPrisma, SiDocker, SiAmazonwebservices, SiFramer } from 'react-icons/si';

const techs = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'Docker', icon: SiDocker },
  { name: 'AWS', icon: SiAmazonwebservices },
  { name: 'Framer Motion', icon: SiFramer },
];

const duplicatedTechs = [...techs, ...techs];

export const TechStack = () => {
  return (
    <section className="py-16 bg-background overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Sub-label dengan accent cyan */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-500"></span>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.3em]">My Arsenal</span>
            <span className="h-px w-10 bg-cyan-500"></span>
          </motion.div>

          {/* Title menggunakan warna semantik */}
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Tech Stack <span className="text-slate-400 dark:text-slate-500/50 italic font-light">& Tools</span>
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Masking: Menggunakan variabel --background agar otomatis pas */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 py-6 px-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 35,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {duplicatedTechs.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-5 px-10 py-5 rounded-3xl bg-card/40 dark:bg-white/5 border border-border backdrop-blur-md shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/40 transition-all duration-500 group/item"
            >
              <tech.icon className="w-7 h-7 text-slate-400 group-hover/item:text-cyan-500 transition-colors duration-300" />
              <span className="text-xl font-bold text-slate-600 dark:text-slate-300 group-hover/item:text-foreground whitespace-nowrap transition-colors">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
