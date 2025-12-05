// /data/mockData.ts
import news from "./news.json";

export const navigation = ["About Us", "Programs", "Contact Us", "News"];

import { Pillar, StatItem, Feature } from "./types";
import {
  Handshake,
  Target,
  Lightbulb,
  Wallet,
  BookOpen,
  Globe,
  TrendingUp,
  BadgeDollarSign,
} from "lucide-react";

export const pillars: Pillar[] = [
  {
    icon: "Handshake",
    title: "Trust",
    text: "We build trust in students through excellence to affordable, outstanding, and transparent relationships.",
  },
  {
    icon: "Target",
    title: "Mission",
    text: "Our mission is powered by providing quality education with integrated programmes to learners worldwide.",
  },
  {
    icon: "Lightbulb",
    title: "Philosophy",
    text: "We believe in the right of affordable, quality education that helps to motivate and create a sense of structure.",
  },
];

export const features: Feature[] = [
  {
    icon: "Wallet",
    title: "Affordable Tuition",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "BookOpen",
    title: "Flexible Learning",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: "Globe",
    title: "Globally-Focused Curriculum",
    color: "from-green-500 to-green-600",
  },
];

export const stats: StatItem[] = [
  { value: "70%", label: "International Learners", icon: "TrendingUp" },
  { value: "50%", label: "Average Tuition Savings", icon: "BadgeDollarSign" },
];

export const ICON_MAP: Record<string, React.ElementType> = {
  Handshake,
  Target,
  Lightbulb,
  Wallet,
  BookOpen,
  Globe,
  TrendingUp,
  BadgeDollarSign,
};

export const blogPosts = news;

const mockData = {
  navigation,
  pillars,
  features,
  stats,
  blogPosts,
};

export default mockData;
