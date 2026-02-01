'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Rocket, Users, GraduationCap, MapPin, Laptop, Sparkles, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Code2,
    title: 'Modern Development',
    description: 'Membangun arsitektur web yang bersih, skalabel, dan mudah dipelihara menggunakan standar industri terbaru.',
    color: 'bg-cyan-500',
  },
  {
    icon: MonitorSmartphone,
    title: 'Adaptive Design',
    description: 'Menciptakan pengalaman pengguna yang konsisten dan responsif di berbagai perangkat, mulai dari mobile hingga desktop.',
    color: 'bg-blue-500',
  },
  {
    icon: Rocket,
    title: 'Optimized Performance',
    description: 'Fokus pada kecepatan akses dan efisiensi kode untuk memastikan performa aplikasi tetap berada di level tertinggi.',
    color: 'bg-indigo-500',
  },
  {
    icon: Users,
    title: 'Collaborative Growth',
    description: 'Terbiasa bekerja dalam tim dengan alur kerja Git yang efisien dan komunikasi yang transparan.',
    color: 'bg-sky-500',
  },
];

const personalInfo = [
  { label: 'Pekerjaan', value: 'Mahasiswa IT', icon: Laptop },
  { label: 'Institusi', value: 'UMP Purwokerto', icon: GraduationCap },
  { label: 'Domisili', value: 'Purwokerto, ID', icon: MapPin },
  { label: 'Keahlian', value: 'Front-End Dev', icon: Code2 },
  { label: 'IPK Terakhir', value: '3.64', icon: Sparkles },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-10 md:py-32 bg-background text-foreground transition-colors duration-500 overflow-hidden px-6">
      {/* --- BACKGROUND DECOR (Konsisten dengan Contact) --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER SECTION --- */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-cyan-500 rounded-full" />
                <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest">Profile Overview</span>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                Mengenal <br />
                <span className="text-slate-400 dark:text-slate-700 italic font-light">Saya.</span>
              </h2>
            </motion.div>

            {/* Availability Badge - Clean Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-card border border-border shadow-xl shadow-slate-200/50 dark:shadow-none self-start"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-slate-800 dark:text-emerald-400 uppercase tracking-widest">Available for Freelance</span>
            </motion.div>
          </div>

          {/* --- MAIN CONTENT GRID --- */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* LEFT SIDE: BIO & INFO */}
            <motion.div className="lg:col-span-7 space-y-16" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-8">
                <h3 className="text-3xl md:text-5xl font-black tracking-tight flex items-center gap-4">
                  <Target className="text-cyan-500 w-8 h-8 md:w-10 md:h-10" />
                  Risky Iman L.P.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed text-justify md:text-left font-medium">
                  Saya adalah mahasiswa Teknik Informatika dari <strong className="text-foreground font-black">Universitas Muhammadiyah Purwokerto</strong> yang memiliki gairah besar dalam dunia pengembangan web. Berfokus pada sisi{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-8">Front-End</span>, saya senang mengubah desain kompleks menjadi antarmuka digital yang interaktif.
                </p>

                {/* Quote Card (Sesuai style Contact Form) */}
                <div className="relative p-8 rounded-[2.5rem] bg-card border border-border shadow-xl shadow-slate-200/40 dark:shadow-none">
                  <div className="absolute -left-1 top-8 bottom-8 w-1.5 bg-cyan-500 rounded-full" />
                  <p className="text-foreground text-lg md:text-xl leading-relaxed italic font-medium">
                    &quot;Bagi saya, pemrograman bukan sekadar menulis baris kode, melainkan proses menciptakan solusi inovatif yang mempermudah kehidupan.&quot;
                  </p>
                </div>
              </div>

              {/* Personal Info Bar (Clean Card Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info) => (
                  <div key={info.label} className="group p-4 rounded-2xl bg-card border border-border hover:border-cyan-500/50 transition-all flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <info.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{info.label}</p>
                      <p className="font-bold text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE: SPECIALIZATIONS */}
            <motion.div className="lg:col-span-5 space-y-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-6 bg-slate-300 dark:bg-slate-800" />
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest font-mono">My Specializations</p>
              </div>

              <div className="grid gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="group p-6 rounded-[2rem] border border-border bg-card shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-500">
                    <div className="flex gap-6">
                      <div className={cn('shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500', feature.color)}>
                        <feature.icon size={24} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xl font-black group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
