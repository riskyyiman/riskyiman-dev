'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, MonitorSmartphone, Rocket, Users, GraduationCap, MapPin, Laptop, Sparkles, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const features = [
  {
    icon: Code2,
    title: 'Modern Development',
    description: 'Arsitektur web bersih dan skalabel menggunakan standar industri terbaru.',
    color: 'bg-cyan-500',
  },
  {
    icon: MonitorSmartphone,
    title: 'Adaptive Design',
    description: 'Pengalaman pengguna responsif di berbagai perangkat dari mobile ke desktop.',
    color: 'bg-blue-500',
  },
  {
    icon: Rocket,
    title: 'Optimized Performance',
    description: 'Fokus pada kecepatan akses dan efisiensi kode untuk performa maksimal.',
    color: 'bg-indigo-500',
  },
  {
    icon: Users,
    title: 'Collaborative Growth',
    description: 'Bekerja efektif dalam tim dengan alur kerja Git dan komunikasi transparan.',
    color: 'bg-sky-500',
  },
];

const personalInfo = [
  { label: 'Pekerjaan', value: 'Mahasiswa IT', icon: Laptop },
  { label: 'Institusi', value: 'UMP Purwokerto', icon: GraduationCap },
  { label: 'Domisili', value: 'Purwokerto, ID', icon: MapPin },
  { label: 'IPK Terakhir', value: '3.64', icon: Sparkles },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background text-foreground overflow-hidden px-6">
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-6 bg-cyan-500 rounded-full" />
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Profile</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              Mengenal <br />
              <span className="text-slate-300 dark:text-slate-800 italic font-light">Saya.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 space-y-12">
            <motion.div custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="space-y-6">
              <h3 className="text-2xl md:text-4xl font-black tracking-tight flex items-center gap-3 text-foreground">
                <Target className="text-cyan-500 w-6 h-6 md:w-8 md:h-8" />
                Risky Iman L.P.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed text-justify max-w-2xl font-medium">
                Mahasiswa Teknik Informatika dari <strong className="text-foreground font-bold">Universitas Muhammadiyah Purwokerto</strong> yang fokus pada presisi visual dan keunggulan teknis melalui ekosistem{' '}
                <span className="text-foreground font-semibold border-b-2 border-cyan-500/20">Next.js</span>. Saya mentransformasi desain kompleks menjadi produk digital yang intuitif.
              </p>

              <div className="relative p-6 md:p-8 rounded-3xl bg-card/50 border border-border shadow-sm group">
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-cyan-500 rounded-r-full" />
                <p className="text-foreground/90 text-lg md:text-xl text-center leading-snug italic font-light">&quot;Pemrograman adalah proses menciptakan solusi inovatif yang mempermudah kehidupan.&quot;</p>
              </div>
            </motion.div>

            <motion.div custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personalInfo.map((info) => (
                <div key={info.label} className="group p-4 rounded-xl bg-card border border-border hover:border-cyan-500/40 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                    <info.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{info.label}</p>
                    <p className="font-bold text-xs text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <motion.div custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center gap-3 opacity-60">
              <div className="h-px w-8 bg-slate-500" />
              <p className="text-[10px] font-bold uppercase tracking-widest font-mono">Specializations</p>
            </motion.div>

            <div className="grid gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  custom={0.3 + idx * 0.05}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group p-6 rounded-2xl border border-border bg-card/40 hover:bg-card hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
                >
                  <div className="flex gap-5">
                    <div className={cn('shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md', feature.color)}>
                      <feature.icon size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold tracking-tight text-foreground">{feature.title}</h4>
                      <p className="text-xs text-slate-500 leading-normal font-medium">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
