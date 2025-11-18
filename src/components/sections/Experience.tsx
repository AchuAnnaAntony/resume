import React from 'react';
import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/ui/Timeline';
import { experiences } from '@/data/experience';

export const Experience: React.FC = () => {
  const timelineItems = experiences.map((exp) => ({
    id: exp.id,
    title: exp.title,
    subtitle: exp.company || '',
    date: exp.period,
    description: exp.responsibilities,
    current: exp.type === 'transition' && exp.period.includes('Present'),
  }));

  return (
    <Section id="experience" title="EXPERIENCE">
      <div className="max-w-4xl mx-auto" role="region" aria-label="Work experience">
        <Timeline items={timelineItems} />
      </div>
    </Section>
  );
};

