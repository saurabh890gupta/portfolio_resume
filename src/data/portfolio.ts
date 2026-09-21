import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code2,
  Server,
  Cloud,
  Database,
  Layout,
  Wrench,
  BrainCircuit,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  gradient: string;
  icon: LucideIcon;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export const personal = {
  name: 'Saurabh Gupta',
  title: 'Full Stack Developer',
  tagline: 'Building scalable web applications end-to-end',
  email: 'saurabh.gup890@gmail.com',
  location: 'India',
  bio: 'I craft robust, performant web applications from the database layer to the user interface. With deep expertise across the MERN stack, Angular, and AWS cloud infrastructure, I turn complex problems into elegant, maintainable solutions.',
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  { label: 'Email', href: 'mailto:saurabh.gup890.sg76@gmail.com', icon: Mail },
];

export const stats: Stat[] = [
  { label: 'Years Experience', value: '8+', icon: Code2 },
  { label: 'Projects Completed', value: '40+', icon: Layout },
  { label: 'Cloud Deployments', value: '100+', icon: Cloud },
  { label: 'Technologies', value: '15+', icon: Terminal },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['Angular','React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS','Bootstrap'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'JWT Auth', 'WebSockets'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Schema Design', 'Query Optimization'],
  },
  {
    title: 'Cloud / DevOps',
    icon: Cloud,
    skills: ['AWS EC2', 'AWS S3', 'CloudWatch', 'Docker', 'CI/CD', 'Nginx', 'GCP'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence', 'Kibana', 'MongoDB Compass','Robo 3T','Jenkins'],
  },
  {
    title: 'AI Tools',
    icon: BrainCircuit,
    skills: ['Cursor', 'Claude', 'ChatGPT', 'GitHub Copilot'],
  },
];

export const projects: Project[] = [
  {
    title: 'Cloud-Native E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory, payment integration, and an admin dashboard — deployed on AWS with auto-scaling.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS EC2', 'AWS S3'],
    features: ['Stripe payment integration', 'Real-time stock management', 'Admin analytics dashboard', 'S3 image uploads with CDN'],
    gradient: 'from-primary-500/20 to-accent-500/20',
    icon: Code2,
  },
  {
    title: 'Enterprise Task Management System',
    description: 'A collaborative project management tool with team workspaces, real-time updates, and role-based access control.',
    tags: ['Angular', 'TypeScript', 'PostgreSQL', 'Node.js'],
    features: ['Drag-and-drop kanban boards', 'Real-time WebSocket sync', 'Role-based permissions', 'Activity timeline'],
    gradient: 'from-accent-500/20 to-primary-500/20',
    icon: Layout,
  },
  {
    title: 'AWS Infrastructure Monitoring Dashboard',
    description: 'A monitoring and alerting dashboard pulling metrics from AWS CloudWatch, with customizable widgets and anomaly detection.',
    tags: ['React', 'AWS CloudWatch', 'Node.js', 'AWS EC2'],
    features: ['Live CloudWatch metrics', 'Custom alert thresholds', 'Resource utilization graphs', 'Email + Slack notifications'],
    gradient: 'from-primary-600/20 to-accent-600/20',
    icon: Cloud,
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A scalable chat platform supporting 1-on-1 and group conversations with typing indicators and message history.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    features: ['WebSocket-based messaging', 'Online presence tracking', 'Message read receipts', 'Redis pub/sub scaling'],
    gradient: 'from-accent-600/20 to-primary-500/20',
    icon: Server,
  },
  {
    title: 'API Gateway & Microservices Architecture',
    description: 'A production-grade microservices setup with an API gateway handling routing, rate limiting, and authentication.',
    tags: ['Node.js', 'Docker', 'AWS EC2', 'Redis'],
    features: ['Centralized JWT auth', 'Rate limiting per service', 'Docker containerized services', 'Health check monitoring'],
    gradient: 'from-primary-500/20 to-primary-700/20',
    icon: Database,
  },
  {
    title: 'Analytics & Reporting Dashboard',
    description: 'A data visualization platform aggregating business metrics into interactive charts and exportable reports.',
    tags: ['Angular', 'TypeScript', 'MySQL', 'Node.js'],
    features: ['Interactive chart visualizations', 'Scheduled report generation', 'CSV / PDF export', 'Multi-tenant data isolation'],
    gradient: 'from-accent-400/20 to-accent-600/20',
    icon: Terminal,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Aero Business Soloution(Pactap)',
    period: 'Sep 2023 — Present',
    description: 'Leading development of cloud-native web applications and mentoring junior developers.',
    achievements: [
      'Architected microservices infrastructure on AWS EC2, reducing deployment time by 60%',
      'Built reusable Angular component library used across 5+ internal projects',
      'Implemented CloudWatch monitoring pipeline, achieving 99.9% uptime',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Kloudrac Softwares Pvt. Ltd.',
    period: 'Nov 2020 – Sep 2023',
    description: 'Developed and maintained full-stack applications using React, Node.js, and MongoDB.',
    achievements: [
      'Delivered 20+ production features for a high-traffic e-commerce platform',
      'Optimized MongoDB queries, improving API response times by 40%',
      'Set up CI/CD pipelines with automated testing and AWS deployment',
    ],
  },
  {
    role: 'Mean Stack Developer',
    company: 'Mobcoder Technology Pvt. Ltd',
    period: 'Oct 2019 – Oct 2020',
    description: 'Built MVPs and internal tools for early-stage startups across various domains.',
    achievements: [
      'Developed 10+ REST APIs serving 50K+ daily requests',
      'Created responsive UIs with React and Angular',
      'Integrated third-party services including Stripe, SendGrid, and AWS S3',
    ],
  },
  {
    role: 'Mean Stack Developer',
    company: 'Shipgig Ventures Pvt. Ltd',
    period: 'Feb 2018 – Sep 2019',
    description: 'Built MVPs and internal tools for early-stage startups across various domains.',
    achievements: [
      'Developed 10+ REST APIs serving 50K+ daily requests',
      'Created responsive UIs with React and Angular',
      'Integrated third-party services including Stripe, SendGrid, and AWS S3',
    ],
  },
];
