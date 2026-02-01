import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/Provider/ThemeProvider';
import { FloatingDock } from '@/components/sections/FloatingDock';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'Risky Iman | Frontend Developer',
  description: 'Crafting modern digital experiences with precision and soul.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakartaSans.variable} ${geistMono.variable} font-sans bg-background text-foreground transition-colors duration-200 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <FloatingDock />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
