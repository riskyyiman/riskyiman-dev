import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/Provider/ThemeProvider';
import { FloatingDock } from '@/components/sections/FloatingDock';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Portfolio',
  description: 'Creative Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground transition-colors duration-200`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <FloatingDock />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
