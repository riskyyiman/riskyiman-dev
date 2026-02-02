import { Hero } from '@/components/sections/Hero';
import { TechStack } from '@/components/sections/TechStack';
import { GithubOverview } from '@/components/sections/GithubOverview';
import { Quotes } from '@/components/sections/Quotes';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TechStack />
      <GithubOverview />
      <Quotes />
    </main>
  );
}
