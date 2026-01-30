'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard = ({ children, className }: SpotlightCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn('relative overflow-hidden rounded-3xl border transition-all duration-300', 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-white/5', className)}
    >
      {/* Efek Cahaya Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, 
            var(--spotlight-color), 
            transparent 40%)`,
        }}
      />

      {/* Konten Utama */}
      <div className="relative z-10">{children}</div>

      {/* Variabel Warna CSS (Injeksi Langsung) */}
      <style jsx>{`
        div {
          --spotlight-color: rgba(6, 182, 212, 0.15); /* Warna Cyan default */
        }
        :global(.dark) div {
          --spotlight-color: rgba(56, 189, 248, 0.1); /* Lebih soft di dark mode */
        }
      `}</style>
    </div>
  );
};
