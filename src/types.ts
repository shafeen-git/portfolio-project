export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Systems & OOP' | 'Interactive Game' | 'Architecture & Systems' | string;
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge: string;
  iconName: string;
  illustrationType: 'linkiut' | 'xor' | 'pokemon' | 'cache_fsm' | string;
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  result: string;
  highlights?: string[];
  statusBadge?: string;
  accentColor?: string;
}

export interface PlanItem {
  id: string;
  title: string;
  shortCode: string;
  tagline: string;
  category: string;
  description: string;
  status: 'In Progress' | 'Active Exploration' | 'Planned' | 'Upcoming Sprint';
  targetQuarter: string;
  skills: string[];
  objectives: string[];
  iconName: string;
  color: string;
  bgGradient: string;
}

export interface SkillItem {
  name: string;
  category: 'Languages' | 'Databases' | 'Frameworks & Engines' | 'Tools & Ecosystem' | 'AI Workflow' | 'Backend & Systems' | 'Core Languages' | 'Databases & Tools' | 'Frontend & Web';
  level: string;
  icon: string;
  description: string;
  tags: string[];
  codeSnippet?: string;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  department?: string;
  university?: string;
  studentId?: string;
  abstract: string;
  keyHighlights: string[];
  topics: string[];
  date: string;
  readTime: string;
  fullContent?: {
    sectionTitle: string;
    paragraphs: string[];
  }[];
  references: string[];
  featured?: boolean;
  doiOrUrl?: string;
  figures?: {
    title: string;
    caption: string;
    description: string;
    badgeText: string;
    type: 'workflow' | 'ct_scan' | 'comparison';
  }[];
}

export interface InterestItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
  badge: string;
  tags: string[];
  accentGradient: string;
}

export interface SocialPlatform {
  id: string;
  name: string;
  handle: string;
  url: string;
  badge: string;
  description: string;
  color: string;
  bgGradient: string;
  hoverColor: string;
  borderColor: string;
  isEmail?: boolean;
  copyable?: boolean;
}
