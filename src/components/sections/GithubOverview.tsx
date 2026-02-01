'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Book, Activity, Code2, Layers } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

// --- TIPE DATA ---
interface RepoData {
  language: string;
  stargazers_count: number;
}

interface LanguageStat {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

// --- WARNA BAHASA (Github Colors) ---
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  React: '#61dafb',
  Dart: '#00B4AB',
  Java: '#b07219',
  Go: '#00ADD8',
  Unknown: '#64748b',
};

export const GithubOverview = () => {
  const [profile, setProfile] = useState<any>(null);
  const [languages, setLanguages] = useState<LanguageStat[]>([]);
  const [loading, setLoading] = useState(true);
  // Tambahkan state mounted untuk menangani masalah hidrasi
  const [mounted, setMounted] = useState(false);

  // Palet warna hijau autentik GitHub
  const githubTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  useEffect(() => {
    // Set mounted menjadi true setelah komponen masuk ke DOM browser
    setMounted(true);

    const fetchData = async () => {
      try {
        const profileRes = await fetch('https://api.github.com/users/riskyyiman');
        const profileData = await profileRes.json();
        setProfile(profileData);

        const reposRes = await fetch('https://api.github.com/users/riskyyiman/repos?per_page=100&sort=updated');
        const reposData: RepoData[] = await reposRes.json();

        const langMap: Record<string, number> = {};
        let totalReposWithLang = 0;

        reposData.forEach((repo) => {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
            totalReposWithLang++;
          }
        });

        const langStats: LanguageStat[] = Object.keys(langMap)
          .map((lang) => ({
            name: lang,
            count: langMap[lang],
            percentage: Math.round((langMap[lang] / totalReposWithLang) * 100),
            color: LANGUAGE_COLORS[lang] || '#10b981',
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        setLanguages(langStats);
        setLoading(false);
      } catch (err) {
        console.error('Gagal mengambil data GitHub:', err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const DonutChart = ({ data }: { data: LanguageStat[] }) => {
    let cumulativePercent = 0;
    return (
      <div className="relative w-40 h-40 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          {data.map((lang) => {
            const strokeDasharray = `${lang.percentage} 100`;
            const strokeDashoffset = -cumulativePercent;
            cumulativePercent += lang.percentage;
            return (
              <circle
                key={lang.name}
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke={lang.color}
                strokeWidth="12"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
                strokeLinecap="butt"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Code2 className="w-6 h-6 text-slate-400 mb-1" />
          <span className="text-[10px] uppercase font-bold text-muted-foreground">Top Langs</span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* --- CARD 1: CALENDAR --- */}
          <div className="lg:col-span-2 p-8 rounded-4xl bg-card border border-border backdrop-blur-md shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Github className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">GitHub Activity</h3>
                    <p className="text-sm text-slate-500 font-medium">Statistik kontribusi real-time</p>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-emerald-500 tabular-nums">{loading ? '-' : profile?.public_repos}</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Repos</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-black text-emerald-500 tabular-nums">{loading ? '-' : profile?.followers}</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Followers</span>
                  </div>
                </div>
              </div>

              <div className="w-full overflow-x-auto no-scrollbar py-2">
                <div className="min-w-175 flex justify-center p-6 bg-background/50 rounded-3xl border border-border">
                  {/* Gunakan conditional rendering: hanya tampilkan GitHubCalendar jika mounted true */}
                  {mounted ? (
                    <GitHubCalendar username="riskyyiman" blockSize={12} blockMargin={4} fontSize={13} theme={githubTheme} showWeekdayLabels />
                  ) : (
                    <div className="h-37.5 flex items-center justify-center text-muted-foreground">Loading Calendar...</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* --- CARD 2: TOP LANGUAGES --- */}
          <div className="lg:col-span-1 p-8 rounded-4xl bg-card border border-border backdrop-blur-md shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
            <div className="w-full flex justify-between items-center mb-10">
              <h3 className="text-lg font-bold text-foreground">Most Used</h3>
              <Layers className="w-5 h-5 text-emerald-500" />
            </div>

            <div className="mb-10 scale-110">{!loading && <DonutChart data={languages} />}</div>

            <div className="w-full space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: lang.color }}></span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">{lang.name}</span>
                  </div>
                  <span className="font-mono text-slate-400 dark:text-slate-500">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- CARD 3: SPOTLIGHT PROJECT --- */}
          <div className="lg:col-span-3 p-10 rounded-4xl bg-linear-to-r from-emerald-500/5 to-transparent border border-emerald-500/20 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
              <Star className="w-64 h-64 text-emerald-500 rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-6 border border-emerald-500/20">
                  <Star className="w-3 h-3 fill-current" /> Spotlight Project
                </div>
                <h3 className="text-4xl font-black text-foreground mb-3 tracking-tight">Indonesia Siaga</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-base leading-relaxed">Membangun ekosistem mitigasi bencana berbasis AI untuk meningkatkan efektivitas respons darurat di Indonesia.</p>
              </div>

              <motion.a
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/riskyyiman/siap-siaga"
                target="_blank"
                className="px-8 py-4 rounded-2xl bg-emerald-500 text-white font-black text-sm shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all flex items-center gap-3"
              >
                <GitFork className="w-5 h-5" />
                View Repository
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
