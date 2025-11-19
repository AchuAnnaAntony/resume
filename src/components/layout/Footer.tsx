import React from 'react';
import { personalInfo } from '@/data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            )}
            {personalInfo.linkedin && (
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            )}
            {personalInfo.website && (
              <a
                href={personalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Website
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

