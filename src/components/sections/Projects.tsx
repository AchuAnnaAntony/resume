'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="PROJECTS">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
        aria-label="Projects"
      >
        {projects.map((project) => (
          <article key={project.id} role="listitem">
            <Card>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              {project.highlights && project.highlights.length > 0 && (
                <ul className="list-disc list-inside mb-4 text-gray-600 dark:text-gray-400 space-y-1">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.link && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => window.open(project.link, '_blank')}
                    aria-label={`View ${project.title} project`}
                  >
                    View Project
                  </Button>
                )}
              </div>
            </Card>
          </article>
        ))}
      </div>
    </Section>
  );
};

