'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export const FloatingDock = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => setIsOpen(false), [pathname]);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className={cn('transition-all duration-500 pointer-events-auto', 'w-full md:mt-6', 'md:w-auto md:max-w-max')}>
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={cn('relative flex items-center justify-between transition-all duration-300', 'px-4 py-3 md:px-3 md:py-2', 'backdrop-blur-md border shadow-2xl', 'bg-card/70 border-border', 'rounded-b-2xl md:rounded-full')}
        >
          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.href} className="relative px-3 py-2">
                  <AnimatePresence>{isActive && <motion.div layoutId="nav-glow" className="absolute inset-0 bg-cyan-500/10 dark:bg-white/5 rounded-full -z-10" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}</AnimatePresence>

                  <motion.div whileHover={{ y: -2 }} className={cn('flex items-center gap-2 px-1 transition-colors duration-200', isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-500 hover:text-foreground')}>
                    <Icon className="w-4.5 h-4.5" strokeWidth={isActive ? 2.5 : 2} />
                    <span className="text-xs font-bold tracking-tight">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}

            <div className="h-4 w-px bg-border mx-2" />

            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* --- MOBILE NAVIGATION BAR --- */}
          <div className="flex md:hidden w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-black text-xs">R</div>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-xl bg-background border border-border text-foreground transition-all active:scale-90">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </motion.nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="md:hidden absolute top-full left-4 right-4 mt-4 p-3 bg-card/95 backdrop-blur-2xl border border-border shadow-2xl rounded-4xl z-40"
            >
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-2xl transition-all',
                      pathname === item.href ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-600 dark:text-slate-400 hover:bg-background border border-transparent hover:border-border',
                    )}
                  >
                    <item.icon size={20} strokeWidth={pathname === item.href ? 3 : 2} />
                    <span className="font-black text-sm uppercase tracking-wider">{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const ThemeToggle = ({ theme, setTheme }: ThemeToggleProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Memuat suara yang sudah kamu simpan di public/sounds/switch.mp3
    audioRef.current = new Audio('/sounds/switch.mp3');
    audioRef.current.volume = 0.15; // Volume lembut agar nyaman di telinga
  }, []);

  const toggleTheme = (event: React.MouseEvent) => {
    // Putar suara haptic segera saat diklik
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }

    // @ts-ignore - Fallback jika browser tidak mendukung View Transitions
    if (!document.startViewTransition) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

    // @ts-ignore
    const transition = document.startViewTransition(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });

    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];

      document.documentElement.animate(
        {
          clipPath: theme === 'dark' ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 800, // Durasi lebih lama agar "ombak" terlihat lebih sinematik
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)', // Kurva transisi ultra-smooth
          pseudoElement: theme === 'dark' ? '::view-transition-old(root)' : '::view-transition-new(root)',
        },
      );
    });
  };

  return (
    <button onClick={toggleTheme} className="p-2 md:p-1.5 rounded-full text-slate-500 hover:bg-background border border-transparent hover:border-border transition-all duration-300">
      <AnimatePresence mode="wait">
        <motion.div key={theme} initial={{ opacity: 0, rotate: -90, scale: 0.8 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.8 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
          {theme === 'dark' ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-cyan-600" />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
