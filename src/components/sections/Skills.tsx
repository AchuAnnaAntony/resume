import React from 'react';
import { Section } from '@/components/ui/Section';
import { SkillBadge } from '@/components/ui/SkillBadge';
import { skillCategories } from '@/data/skills';

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="max-w-4xl mx-auto">
        {skillCategories.map((category) => (
          <article key={category.category} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {category.category}
            </h3>
            <ul
              className="flex flex-wrap gap-3 list-none"
              aria-label={`${category.category} skills`}
            >
              {category.skills.map((skill) => (
                <li key={skill}>
                  <SkillBadge name={skill} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};

