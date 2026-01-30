import { Hero } from '@/components/sections/Hero';
import { TechStack } from '@/components/sections/TechStack';
import { GithubOverview } from '@/components/sections/GithubOverview';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TechStack />
      <GithubOverview />
    </main>
  );
}
