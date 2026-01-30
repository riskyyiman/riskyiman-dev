'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Rocket, Users, GraduationCap, MapPin, Laptop, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Modern Development',
    description: 'Membangun arsitektur web yang bersih, skalabel, dan mudah dipelihara menggunakan standar industri terbaru.',
    color: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: MonitorSmartphone,
    title: 'Adaptive Design',
    description: 'Menciptakan pengalaman pengguna yang konsisten dan responsif di berbagai perangkat, mulai dari mobile hingga desktop.',
    color: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Rocket,
    title: 'Optimized Performance',
    description: 'Fokus pada kecepatan akses dan efisiensi kode untuk memastikan performa aplikasi tetap berada di level tertinggi.',
    color: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    icon: Users,
    title: 'Collaborative Growth',
    description: 'Terbiasa bekerja dalam tim dengan alur kerja Git yang efisien dan komunikasi yang transparan untuk mencapai target proyek.',
    color: 'text-sky-600 dark:text-sky-400',
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
    <section id="about" className="relative min-h-screen py-16 md:py-24 bg-background transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* --- Header Section: Responsive alignment --- */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-28">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                <span className="h-px w-12 bg-cyan-500 rounded-full"></span>
                <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Profile Overview</span>
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.85]">
                Mengenal <br />
                <span className="text-slate-400 dark:text-slate-500 italic">Saya.</span>
              </h2>
            </motion.div>

            {/* Availability Badge: Mobile-friendly sizing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-card backdrop-blur-xl shadow-xl shadow-slate-200/40 dark:shadow-none self-center md:self-end"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-[9px] md:text-[11px] font-black text-slate-800 dark:text-emerald-400 uppercase tracking-[0.2em]">Available for Freelance</span>
            </motion.div>
          </div>

          {/* --- Main Content Grid: Adaptive Columns --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Bio Section: High contrast text */}
            <motion.div className="lg:col-span-7 space-y-12" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-8">
                <h3 className="text-3xl md:text-5xl font-black text-foreground flex items-center justify-center md:justify-start gap-4 tracking-tight">
                  <Sparkles className="text-cyan-500 w-8 h-8 md:w-10 md:h-10" />
                  Risky Iman Lael Prasetio
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-base md:text-xl leading-relaxed text-justify md:text-left">
                  Saya adalah seorang mahasiswa Teknik Informatika dari <strong className="text-foreground font-black">Universitas Muhammadiyah Purwokerto</strong> yang memiliki gairah besar dalam dunia pengembangan web. Berfokus pada sisi{' '}
                  <span className="text-cyan-600 dark:text-cyan-400 font-black underline decoration-cyan-500/40 underline-offset-8">Front-End</span>, saya senang mengubah desain kompleks menjadi antarmuka digital yang interaktif dan ramah
                  pengguna.
                </p>

                {/* Quote Card: Enhanced contrast in white mode */}
                <div className="relative  group p p-8 rounded-4xl  border-l-[6px] md:border-l-8 border-cyan-500 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:scale-[1.01]">
                  <p className="text-black dark:text-slate-200 text-base md:text-lg leading-relaxed italic font-medium">
                    &quot;Bagi saya, pemrograman bukan sekadar menulis baris kode, melainkan proses menciptakan solusi inovatif yang mampu mempermudah kehidupan banyak orang.&quot;
                  </p>
                </div>
              </div>

              {/* Personal Info Bar: Responsive Grid (1 to 3 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 border-y border-border">
                {personalInfo.map((info) => (
                  <div key={info.label} className="group flex md:block items-center gap-5 md:gap-0">
                    <div className="md:hidden p-3 rounded-xl bg-cyan-500/10 text-cyan-600">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black mb-1 md:mb-3">{info.label}</p>
                      <div className="flex items-center gap-4">
                        <div className="hidden md:flex p-3 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                          <info.icon className="w-5 h-5" />
                        </div>
                        <p className="text-foreground font-bold text-sm md:text-base leading-tight">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specializations Section: Card-style responsiveness */}
            <motion.div className="lg:col-span-5 space-y-10" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                <div className="h-px w-8 bg-cyan-500"></div>
                <p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em] font-mono">My Specializations</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="group p-6 md:p-8 rounded-4xl border border-border bg-card shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-500">
                    <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                      <div className="shrink-0 w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                        <feature.icon className={`w-8 h-8 ${feature.color} group-hover:text-white transition-colors duration-500`} />
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-foreground text-xl font-black group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{feature.description}</p>
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
