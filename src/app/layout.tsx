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
  icons: {
    icon: [
      { url: '/favicon-96x96.png?v=1', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg?v=1', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico?v=1',
    apple: [{ url: '/apple-touch-icon.png?v=1', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
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
