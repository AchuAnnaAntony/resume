import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = '',
  ariaLabel,
}) => {
  return (
    <section
      id={id}
      className={`py-16 ${className}`}
      aria-labelledby={title ? `${id}-title` : undefined}
      aria-label={ariaLabel}
    >
      <div className="container mx-auto px-4">
        {title && (
          <h2
            id={`${id}-title`}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

