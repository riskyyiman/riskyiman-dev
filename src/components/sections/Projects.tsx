'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, ArrowRight, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { SpotlightCard } from '../ui/SpotlightCard';
import { projectsData } from '@/data/projects';
import { certificates } from '@/data/certificate';
import { cn } from '@/lib/utils';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'highlighted'>('all');
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // Ref dan State untuk Indikator Scroll Sertifikat
  const certScrollRef = useRef<HTMLDivElement>(null);
  const [certScrollProgress, setCertScrollProgress] = useState(0);

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter((project) => project.isHighlighted);

  const displayedCertificates = showAllCertificates ? certificates : certificates.slice(0, 6);

  // Handler untuk menghitung progress scroll
  const handleScroll = () => {
    const el = certScrollRef.current;
    if (el) {
      const scrollLeft = el.scrollLeft;
      const scrollWidth = el.scrollWidth;
      const clientWidth = el.clientWidth;

      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setCertScrollProgress(scrollPercentage);
    }
  };

  return (
    <section className="relative py-12 md:py-24 bg-background transition-colors duration-500 overflow-hidden px-6">
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[40%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-[5%] left-[10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* ================= PROJECT SECTION ================= */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-0.5 w-10 bg-cyan-500 rounded-full"></span>
                <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Showcase</span>
              </div>
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-slate-100 leading-none">
                Karya Terpilih <br className="hidden md:block" />
                <span className="text-slate-500 italic">& Portofolio.</span>
              </h2>
            </motion.div>

            {/* Pill Filter */}
            <div className="inline-flex p-1 bg-slate-100 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl self-start md:self-end">
              {[
                { id: 'all', label: 'Semua' },
                { id: 'highlighted', label: 'Unggulan' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as any)}
                  className={cn(
                    'relative px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300',
                    filter === tab.id ? 'text-white dark:text-slate-950' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
                  )}
                >
                  {filter === tab.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-slate-900 dark:bg-white rounded-xl shadow-lg" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}>
                  <SpotlightCard className="group flex flex-col h-full md:h-[520px] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 transition-all duration-500 hover:border-cyan-500/40">
                    <div className="relative overflow-hidden h-52 shrink-0 bg-slate-100 dark:bg-slate-950">
                      <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                      {project.isHighlighted && (
                        <div className="absolute top-4 right-4 z-20">
                          <div className="flex items-center justify-center w-8 h-8 bg-cyan-500 rounded-full shadow-lg border border-white/20">
                            <Star className="w-4 h-4 text-white fill-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6 font-light">{project.description}</p>
                      <div className="mt-auto space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-50 dark:bg-white/5 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-6 pt-6 border-t border-slate-100 dark:border-white/5">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]"
                            >
                              <ExternalLink size={14} /> Preview
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors uppercase tracking-[0.2em]"
                            >
                              <Github size={14} /> Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ================= CERTIFICATES SECTION ================= */}
          <div className="pt-20 border-t border-slate-200 dark:border-white/5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-0.5 w-10 bg-indigo-500 rounded-full"></span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Recognition</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-slate-100 leading-none">
                  Sertifikasi <br className="hidden md:block" />
                  <span className="text-slate-500 italic">& Penghargaan.</span>
                </h2>
              </motion.div>

              {/* Indikator Scroll (Hanya Muncul di Mobile) */}
              <div className="md:hidden flex flex-col items-end gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Swipe</span>
                <div className="w-20 h-1 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-indigo-500"
                    style={{ width: `${certScrollProgress || 15}%` }} // Default 15% visibility
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>
            </div>

            {/* --- HORIZONTAL SCROLL LAYOUT (Mobile) & GRID (Desktop) --- */}
            <div ref={certScrollRef} onScroll={handleScroll} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
              <AnimatePresence mode="popLayout">
                {displayedCertificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="min-w-[85vw] md:min-w-0 snap-center" // Kunci Layout Mobile
                  >
                    {/* Modern Framed Card Style */}
                    <div className="group relative flex flex-col h-full bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[2rem] p-3 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500/30">
                      {/* Image Area: Inset Style */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.5rem] bg-slate-200 dark:bg-slate-900">
                        <Image src={cert.image} alt={cert.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Verified Badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md border border-white/20 shadow-lg">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-white">Verified</span>
                        </div>

                        {/* Link Icon Center Hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                            <ExternalLink className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-5 pt-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{cert.issuer}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md">{cert.issued}</span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">{cert.title}</h3>

                        <div className="mt-auto pt-4 border-t border-slate-200/50 dark:border-white/5">
                          <a href={cert.URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link w-full">
                            <span className="text-xs font-semibold text-slate-500 group-hover/link:text-slate-900 dark:text-slate-400 dark:group-hover/link:text-white transition-colors">Lihat Kredensial</span>
                            <div className="w-8 h-8 rounded-full bg-transparent group-hover/link:bg-indigo-50 dark:group-hover/link:bg-indigo-500/20 flex items-center justify-center transition-all duration-300">
                              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400 transition-transform group-hover/link:rotate-45" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Tombol Lihat Selengkapnya (Desktop Only / Optional in Mobile) */}
            {!showAllCertificates && certificates.length > 6 && (
              <div className="hidden md:flex justify-center mt-8 pb-20">
                <button onClick={() => setShowAllCertificates(true)} className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full">
                  <div className="absolute inset-0 w-full h-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full transition-all duration-300 group-hover:scale-105" />
                  <span className="relative flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                    Muat Lebih Banyak
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-y-1 group-hover:rotate-90" />
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CSS Utility untuk menyembunyikan scrollbar bawaan */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
