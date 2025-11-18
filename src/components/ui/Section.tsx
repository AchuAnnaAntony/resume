'use client';

import React, { useState, useEffect, useRef } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

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
            ref={titleRef}
            id={`${id}-title`}
            className={`text-3xl font-bold text-center mb-12 hover:underline underline-offset-8 transition-all ${
              isVisible ? 'fade-in' : 'opacity-0'
            }`}
            style={{ color: '#2563EB' }}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

