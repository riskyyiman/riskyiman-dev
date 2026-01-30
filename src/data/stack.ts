export interface TechStack {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
}

export const techStackData: TechStack[] = [
  // Frontend
  { name: 'HTML', icon: 'Code2', category: 'frontend' },
  { name: 'CSS', icon: 'Palette', category: 'frontend' },
  { name: 'JavaScript', icon: 'FileCode', category: 'frontend' },
  { name: 'TypeScript', icon: 'FileType', category: 'frontend' },
  { name: 'React.js', icon: 'Component', category: 'frontend' },
  { name: 'Next.js', icon: 'Layers', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'Wind', category: 'frontend' },
  // Backend
  { name: 'Node.js', icon: 'Server', category: 'backend' },
  { name: 'Python', icon: 'Code', category: 'backend' },
  // Database
  { name: 'MySQL', icon: 'Database', category: 'database' },
  { name: 'Firebase', icon: 'Flame', category: 'database' },
  // Tools
  { name: 'Git', icon: 'GitBranch', category: 'tools' },
  // Design
  { name: 'Figma', icon: 'Figma', category: 'design' },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' },
  { id: 'design', label: 'Design' },
];
