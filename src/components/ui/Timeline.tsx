import React from 'react';

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string | string[];
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ items, className = '' }) => {
  return (
    <ol className={`relative ${className}`} aria-label="Timeline">
      <div
        className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"
        aria-hidden="true"
      ></div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <li key={item.id} className="relative pl-12">
            <div
              className="absolute left-2 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"
              aria-hidden="true"
            ></div>
            <article className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <header className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                  )}
                </div>
                <time
                  className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0"
                  dateTime={item.date}
                >
                  {item.date}
                  {item.current && (
                    <span
                      className="ml-2 px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs"
                      aria-label="Current position"
                    >
                      Current
                    </span>
                  )}
                </time>
              </header>
              {Array.isArray(item.description) ? (
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              )}
            </article>
          </li>
        ))}
      </div>
    </ol>
  );
};

