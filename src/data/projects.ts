export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  isHighlighted: boolean;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Weather App',
    description: 'Aplikasi web responsif yang menyajikan informasi cuaca secara real-time dan prakiraan cuaca akurat berdasarkan lokasi pengguna, dengan antarmuka yang bersih dan intuitif.',
    tags: ['TypeScript', 'React', 'CSS3', 'Weather API'],
    image: '/wheaterapp.png',
    liveUrl: 'https://skycast-green-sigma.vercel.app/',
    githubUrl: 'https://github.com/riskyyiman/wheather-app',
    isHighlighted: true,
  },
  {
    id: '2',
    title: 'MTs Raudhotut Tholibin',
    description: 'Sistem manajemen dan informasi sekolah terpadu yang mencakup portal siswa, profil institusi, dan pengelolaan sumber daya pendidikan berbasis web yang responsif.',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Prisma'],
    image: '/mtsaRaudhotut.png',
    liveUrl: 'https://mts-raudhotut-tholibin.vercel.app/',
    githubUrl: 'https://github.com/riskyyiman/mts-raudhotut-tholibin',
    isHighlighted: true,
  },
  {
    id: '3',
    title: 'SIPELMASD',
    description: 'Sistem Informasi Pelayanan Masyarakat yang dirancang untuk meningkatkan efisiensi birokrasi melalui pengelolaan data pengguna yang aman dan aksesibilitas informasi yang transparan.',
    tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'CSS Modules'],
    image: '/sipelmasd.png',
    liveUrl: 'https://sipelmasd-nu.vercel.app/',
    githubUrl: 'https://github.com/riskyyiman/SIPELMASD',
    isHighlighted: true,
  },
  {
    id: '4',
    title: 'Kydolist',
    description: 'Aplikasi manajemen tugas modern yang dirancang untuk produktivitas harian, dilengkapi dengan fitur penyimpanan data lokal (persistent storage) dan pengalaman pengguna yang optimal.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    image: '/kydol.png',
    liveUrl: 'https://kydolist-app.vercel.app/',
    githubUrl: 'https://github.com/riskyyiman/ky-do-list',
    isHighlighted: false,
  },
  {
    id: '5',
    title: 'SIAKAD SDIT CITAMULIA',
    description: 'Pengembangan Sistem Informasi Akademik untuk digitalisasi administrasi sekolah, mencakup sistem penilaian digital serta pengelolaan data induk kependidikan secara terpusat.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind CSS'],
    image: '/siakad.png',
    githubUrl: 'https://github.com/riskyyiman/SIAKAD-SDIT-CITAMULIA',
    isHighlighted: false,
  },
];
