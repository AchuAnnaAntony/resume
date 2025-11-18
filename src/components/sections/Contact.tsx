'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { personalInfo } from '@/data/personal';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <Section id="contact" title="CONTACT">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Feel free to reach out if you'd like to collaborate or have any
              questions.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Email
                </h4>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-label={`Email ${personalInfo.name} at ${personalInfo.email}`}
                >
                  {personalInfo.email}
                </a>
              </div>
              {personalInfo.phone && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    aria-label={`Call ${personalInfo.name} at ${personalInfo.phone}`}
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              )}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Social
                </h4>
                <div className="flex space-x-4">
                  {personalInfo.linkedin && (
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                      aria-label={`Visit ${personalInfo.name}'s LinkedIn profile (opens in new tab)`}
                    >
                      LinkedIn
                    </a>
                  )}
                  {personalInfo.github && (
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                      aria-label={`Visit ${personalInfo.name}'s GitHub profile (opens in new tab)`}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  aria-required="true"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  aria-required="true"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  aria-required="true"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

