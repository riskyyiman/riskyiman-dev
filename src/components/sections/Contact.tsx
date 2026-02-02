'use client';

import React, { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Send, CheckCircle, MapPin, Clock, Loader2, User, MessageSquare } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsLoading(true);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
      .then(() => {
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
    <section id="contact" className="relative py-10 md:py-24 bg-background text-foreground overflow-hidden px-6">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-0.5 w-10 bg-cyan-500 rounded-full" />
                <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold uppercase tracking-[0.3em]">Connect</span>
              </div>

              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10">
                Let&apos;s build <br />
                <span className="text-slate-300 dark:text-slate-800 italic font-light">the future.</span>
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-md font-medium mb-12">
                Punya ide besar? <span className="text-foreground font-bold underline decoration-cyan-500/30 underline-offset-8">Pintu digital saya selalu terbuka</span> untuk kolaborasi inovatif.
              </p>
            </motion.div>

            <motion.div custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="grid gap-4 mt-auto">
              {[
                { icon: Mail, label: 'Email', value: 'riskyiman699@gmail.com', color: 'bg-cyan-500' },
                { icon: MapPin, label: 'Location', value: 'Jawa Tengah, ID', color: 'bg-indigo-500' },
                { icon: Clock, label: 'Availability', value: 'Open for projects', color: 'bg-emerald-500' },
              ].map((info, idx) => (
                <div key={idx} className="group p-5 rounded-2xl bg-card/50 border border-border hover:border-cyan-500/40 transition-all flex items-center gap-5 shadow-sm">
                  <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-500', info.color)}>
                    <info.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase font-black text-slate-400 tracking-[0.2em] mb-1">{info.label}</p>
                    <p className="font-bold text-sm md:text-base text-foreground">{info.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div className="lg:col-span-6" custom={0.1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <form ref={formRef} onSubmit={handleSubmit} className="relative h-full flex flex-col p-8 md:p-12 rounded-[2.5rem] bg-card border border-border shadow-2xl shadow-slate-200/50 dark:shadow-none">
              <div className="space-y-8 grow">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] ml-1">Nama Lengkap</label>
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500" size={18} />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-background/50 border border-border focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 rounded-2xl pl-14 pr-6 py-5 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] ml-1">Alamat Email</label>
                    <div className="relative">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@example.com"
                        className="w-full bg-background/50 border border-border focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 rounded-2xl pl-14 pr-6 py-5 outline-none transition-all text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 grow">
                  <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] ml-1">Pesan Anda</label>
                  <div className="relative h-[calc(100%-2rem)]">
                    <MessageSquare className="absolute left-5 top-6 text-slate-400" size={18} />
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Apa yang bisa kita kerjakan bersama?"
                      className="w-full h-full min-h-50 bg-background/50 border border-border focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/5 rounded-4xl pl-14 pr-6 py-6 outline-none resize-none transition-all text-sm font-medium"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={cn(
                      'w-full py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all duration-500 active:scale-[0.98]',
                      isSubmitted ? 'bg-emerald-500 text-white shadow-emerald-500/20' : 'bg-foreground text-background hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-cyan-500/10',
                    )}
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin w-5 h-5" />
                    ) : isSubmitted ? (
                      <CheckCircle size={20} className="animate-in zoom-in duration-500" />
                    ) : (
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                    {isLoading ? 'Processing...' : isSubmitted ? 'Message Sent' : 'Send Message'}
                  </button>
                </Magnetic>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
