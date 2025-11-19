'use client';

import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/personal';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16"
      aria-label="Introduction"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/profile.jpg"
                alt={`${personalInfo.name}, ${personalInfo.title}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <header className="flex-1 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              {personalInfo.title}
            </p>
            {personalInfo.shortSummary && (
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-justify">
                {personalInfo.shortSummary}
              </p>
            )}
            <nav
              className="flex flex-wrap gap-4 justify-center"
              aria-label="Hero actions"
            >
              <Button
                variant="primary"
                onClick={handleScrollToContact}
                aria-label="Navigate to contact section"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.open('/resume.pdf', '_blank');
                }}
                aria-label="Download resume PDF"
              >
                Download Resume
              </Button>
            </nav>
          </header>
        </div>
      </div>
    </section>
  );
};

