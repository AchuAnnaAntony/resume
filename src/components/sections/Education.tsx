import React from 'react';
import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/ui/Timeline';
import { education } from '@/data/education';

export const Education: React.FC = () => {
  const timelineItems = education.map((edu, index) => ({
    id: `edu-${index}`,
    title: `${edu.degree} in ${edu.field}`,
    subtitle: edu.institution,
    date: edu.year || '',
    description: [`Location: ${edu.location}`],
    current: false,
  }));

  return (
    <Section id="education" title="EDUCATION">
      <div className="max-w-4xl mx-auto" role="region" aria-label="Education history">
        <Timeline items={timelineItems} />
      </div>
    </Section>
  );
};

