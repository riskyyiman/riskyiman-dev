'use client';

import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, ArrowRight, ShieldCheck, ArrowUpRight, CalendarDays, SortAsc } from 'lucide-react';
import Image from 'next/image';
import { SpotlightCard } from '../ui/SpotlightCard';
import { projectsData } from '@/data/projects';
import { certificates } from '@/data/certificate';
import { cn } from '@/lib/utils';

type SortOption = 'latest' | 'oldest' | 'name';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'highlighted'>('all');
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('latest');

  const certScrollRef = useRef<HTMLDivElement>(null);
  const [certScrollProgress, setCertScrollProgress] = useState(0);

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter((project) => project.isHighlighted);

  const sortedCertificates = useMemo(() => {
    const data = [...certificates];
    return data.sort((a, b) => {
      if (sortBy === 'latest') return new Date(b.issued).getTime() - new Date(a.issued).getTime();
      if (sortBy === 'oldest') return new Date(a.issued).getTime() - new Date(b.issued).getTime();
      if (sortBy === 'name') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [sortBy]);

  const handleScroll = () => {
    const el = certScrollRef.current;
    if (el) {
      const scrollPercentage = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
      setCertScrollProgress(scrollPercentage);
    }
  };

  return (
    <section className="relative py-10 md:py-24 bg-background text-foreground transition-colors duration-500 overflow-hidden px-6">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col lg:grid-cols-12 lg:flex-row lg:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-8 bg-cyan-500 rounded-full" />
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-widest">Showcase</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              Proyek <br />
              <span className="text-slate-400 dark:text-slate-700 italic font-light">& Portofolio.</span>
            </h2>
          </motion.div>

          <div className="inline-flex p-1 bg-card border border-border rounded-2xl self-start">
            {['all', 'highlighted'].map((id) => (
              <button
                key={id}
                onClick={() => setFilter(id as any)}
                className={cn('relative px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all', filter === id ? 'text-white dark:text-slate-950' : 'text-slate-500')}
              >
                {filter === id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-slate-950 dark:bg-white rounded-xl shadow-sm" />}
                <span className="relative z-10">{id === 'all' ? 'Semua' : 'Unggulan'}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
                <SpotlightCard className="group flex flex-col h-full bg-card border-border hover:border-cyan-500/40 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500">
                  <div className="relative overflow-hidden h-56 shrink-0 bg-slate-100 dark:bg-slate-950">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    {project.isHighlighted && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="flex items-center justify-center w-8 h-8 bg-cyan-500 rounded-full shadow-lg border border-white/20">
                          <Star className="w-4 h-4 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-8 font-medium">{project.description}</p>
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-lg bg-background border border-border text-slate-500 dark:text-slate-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-6 pt-6 border-t border-border">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-cyan-600 transition-colors uppercase tracking-widest">
                            <ExternalLink size={14} /> Preview
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-cyan-600 transition-colors uppercase tracking-widest">
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

        <div className="pt-20 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-8 bg-indigo-500 rounded-full" />
                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold uppercase tracking-widest">Recognition</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
                Sertifikasi <br />
                <span className="text-slate-400 dark:text-slate-700 italic font-light">& Pencapaian.</span>
              </h2>
            </motion.div>

            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex items-center gap-2 p-1.5 bg-card border border-border rounded-xl">
                <button onClick={() => setSortBy('latest')} className={cn('p-2 rounded-lg transition-all', sortBy === 'latest' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-foreground')} title="Terbaru">
                  <CalendarDays size={16} />
                </button>
                <button onClick={() => setSortBy('name')} className={cn('p-2 rounded-lg transition-all', sortBy === 'name' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-foreground')} title="Urut Nama">
                  <SortAsc size={16} />
                </button>
              </div>

              <div className="md:hidden flex flex-col items-end gap-2 w-full">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Geser untuk melihat semua</span>
                <div className="w-full h-0.5 bg-border rounded-full overflow-hidden">
                  <motion.div className="h-full bg-indigo-500" style={{ width: `${certScrollProgress || 10}%` }} />
                </div>
              </div>
            </div>
          </div>

          <div ref={certScrollRef} onScroll={handleScroll} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 pb-6">
            {sortedCertificates.map((cert, index) => {
              const isHiddenOnDesktop = !showAllCertificates && index >= 6;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.1 }}
                  className={cn('min-w-[85vw] md:min-w-0 snap-center transition-all duration-500', isHiddenOnDesktop ? 'md:hidden' : 'md:block')}
                >
                  <div className="group relative flex flex-col h-full bg-card border border-border rounded-[2.5rem] p-3 hover:border-indigo-500/30 transition-all duration-500">
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-4xl bg-background">
                      <Image src={cert.image} alt={cert.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md border border-white/20">
                        <ShieldCheck className="w-3 h-3 text-emerald-500" />
                        <span className="text-[8px] font-bold uppercase text-slate-900 dark:text-white">Verified</span>
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-indigo-500">{cert.issuer}</span>
                        <span className="text-[9px] font-mono text-slate-400">{cert.issued}</span>
                      </div>
                      <h3 className="text-base font-bold leading-tight mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">{cert.title}</h3>
                      <div className="mt-auto pt-4 border-t border-border">
                        <a href={cert.URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link">
                          <span className="text-[10px] font-bold text-slate-500 group-hover/link:text-foreground transition-colors uppercase tracking-widest">Kredensial</span>
                          <div className="w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center transition-all group-hover/link:bg-indigo-500 group-hover/link:text-white">
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:rotate-45" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {!showAllCertificates && certificates.length > 6 && (
            <div className="hidden md:flex justify-center mt-16">
              <button
                onClick={() => setShowAllCertificates(true)}
                className="group flex items-center gap-3 px-10 py-4 bg-card border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-500 font-bold text-[10px] uppercase tracking-[0.2em]"
              >
                Lihat Semua Sertifikasi
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
