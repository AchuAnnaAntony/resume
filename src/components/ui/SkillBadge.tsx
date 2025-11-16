import React from 'react';

interface SkillBadgeProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  level,
  className = '',
}) => {
  const levelColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800',
    expert: 'bg-red-100 text-red-800',
  };

  const colorClass = level ? levelColors[level] : 'bg-gray-100 text-gray-800';

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorClass} ${className}`}
    >
      {name}
    </span>
  );
};

