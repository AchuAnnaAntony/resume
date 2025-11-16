import React from 'react';
import { Section } from '@/components/ui/Section';
import { personalInfo } from '@/data/personal';

export const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          {personalInfo.summary && (
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
          )}
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div>
              <dt className="font-semibold text-gray-900 dark:text-white mb-2">
                Location
              </dt>
              <dd className="text-gray-600 dark:text-gray-400">
                {personalInfo.location}
              </dd>
            </div>
            {personalInfo.email && (
              <div>
                <dt className="font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    aria-label={`Email ${personalInfo.name} at ${personalInfo.email}`}
                  >
                    {personalInfo.email}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </article>
      </div>
    </Section>
  );
};

