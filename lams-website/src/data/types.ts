export interface Pillar {
  icon: string;
  title: string;
  text: string;
}

export interface Feature {
  icon: string;
  title: string;
  color: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface HomeData {
  navigation: string[];
  pillars: Pillar[];
  features: Feature[];
  stats: StatItem[];
  blogPosts: BlogPost[];
}
