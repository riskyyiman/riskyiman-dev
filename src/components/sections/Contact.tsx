'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, MapPin, Clock, Loader2, X, User, MessageSquare } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsLoading(true);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
      .then(() => {
        setShowPopup(true);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch((err) => console.error('Error:', err))
      .finally(() => setIsLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-10 md:py-32 bg-background text-foreground transition-colors duration-500 overflow-hidden px-6">
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* --- LEFT SIDE --- */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-cyan-500 rounded-full" />
                <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest">Contact Me</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                Let&apos;s build <br />
                {/* PERBAIKAN: Slate-400 agar terlihat di mode terang, Slate-800/70 di mode gelap */}
                <span className="text-slate-400 dark:text-slate-700 italic font-light">the future.</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Punya ide besar? <span className="text-foreground font-semibold underline decoration-cyan-500/30 underline-offset-4">Pintu digital saya selalu terbuka.</span>
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="grid gap-3">
              {[
                { icon: Mail, label: 'Email', value: 'riskyiman699@gmail.com', color: 'bg-blue-500' },
                { icon: MapPin, label: 'Location', value: 'Jawa Tengah, ID', color: 'bg-rose-500' },
                { icon: Clock, label: 'Availability', value: 'Open for projects', color: 'bg-amber-500' },
              ].map((info, idx) => (
                <div key={idx} className="group p-4 rounded-2xl bg-card border border-border hover:border-cyan-500/50 transition-all flex items-center gap-4">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm transition-transform group-hover:scale-110', info.color)}>
                    <info.icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">{info.label}</p>
                    <p className="font-semibold truncate text-sm md:text-base">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div className="lg:col-span-5" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <form ref={formRef} onSubmit={handleSubmit} className="relative p-8 md:p-10 rounded-[2.5rem] bg-card border border-border shadow-2xl shadow-slate-200/50 dark:shadow-none space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-slate-500 ml-1">Nama Lengkap</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama"
                      className="w-full bg-background border border-border focus:border-cyan-500 rounded-2xl pl-12 pr-4 py-4 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold text-slate-500 ml-1">Alamat Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@perusahaan.com"
                      className="w-full bg-background border border-border focus:border-cyan-500 rounded-2xl pl-12 pr-4 py-4 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-slate-500 ml-1">Pesan Anda</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-5 text-slate-400" size={18} />
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan Anda..."
                    className="w-full min-h-[150px] bg-background border border-border focus:border-cyan-500 rounded-2xl pl-12 pr-4 py-4 outline-none resize-none transition-all text-sm"
                  />
                </div>
              </div>

              <Magnetic>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    'w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300',
                    isSubmitted ? 'bg-emerald-500 text-white' : 'bg-foreground text-background hover:opacity-90 shadow-lg',
                  )}
                >
                  {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : isSubmitted ? <CheckCircle size={18} /> : <Send size={16} />}
                  {isLoading ? 'Mengirim...' : isSubmitted ? 'Terkirim' : 'Kirim Pesan'}
                </button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
