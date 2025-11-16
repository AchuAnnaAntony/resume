import type { Metadata } from 'next';
import { personalInfo } from '@/data/personal';

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.summary,
  keywords: [
    personalInfo.title,
    'resume',
    'portfolio',
    'software engineer',
    'developer',
  ],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
  },
};

