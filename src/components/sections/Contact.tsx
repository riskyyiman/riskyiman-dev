'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, MapPin, Clock, Loader2, X } from 'lucide-react';
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
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => setIsLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-12 md:py-24 bg-background transition-colors duration-500 overflow-hidden px-6">
      {/* --- BACKGROUND DECOR (Agar selaras dengan Projects) --- */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-50 dark:opacity-100">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      {/* --- SUCCESS TOAST --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md">
            <div className="bg-white dark:bg-slate-900 border border-emerald-500/30 p-4 rounded-2xl shadow-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-500" />
              </div>
              <div className="grow">
                <p className="text-slate-900 dark:text-white font-bold text-sm">Pesan Terkirim!</p>
                <p className="text-slate-500 dark:text-slate-400 text-xs">Saya akan segera menghubungi Anda.</p>
              </div>
              <button onClick={() => setShowPopup(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER --- */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-0.5 w-10 bg-cyan-500 rounded-full"></span>
                <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">Collaboration</span>
              </div>
              <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-slate-100 leading-none">
                Let&apos;s Create <br className="hidden md:block" />
                <span className="text-slate-400 dark:text-slate-500 italic">Something Great.</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-stretch">
            {/* Left side: Info */}
            <motion.div className="lg:col-span-2 space-y-12" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-8">
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">Punya ide proyek yang menarik atau sekadar ingin menyapa? Saya selalu terbuka untuk diskusi teknologi dan kolaborasi kreatif.</p>

                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email Me', value: 'riskyiman699@gmail.com' },
                    { icon: MapPin, label: 'Based In', value: 'Jawa Tengah, Indonesia' },
                    { icon: Clock, label: 'Response Time', value: 'Within 24 Hours' },
                  ].map((info, idx) => (
                    <div key={idx} className="flex items-center gap-5 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:border-cyan-500/50 transition-all duration-300">
                        <info.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-500 tracking-widest">{info.label}</p>
                        <p className="text-slate-900 dark:text-slate-200 font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form ref={formRef} onSubmit={handleSubmit} className="p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-500 tracking-widest ml-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-500 tracking-widest ml-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-500 tracking-widest ml-2">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full min-h-[150px] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/5 transition-all resize-none placeholder:text-slate-400"
                  />
                </div>

                <Magnetic className="w-full">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={cn(
                      'w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-500 shadow-lg shadow-slate-900/10 dark:shadow-none',
                      isSubmitted ? 'bg-emerald-500 text-white' : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-cyan-600 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-white',
                    )}
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={18} /> Pesan Terkirim
                      </>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
