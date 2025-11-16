import { render, screen } from '@testing-library/react';
import { Skills } from '@/components/sections/Skills';

// Mock the data
jest.mock('@/data/skills', () => ({
  skills: [
    { name: 'React', category: 'Frameworks', level: 'expert' },
    { name: 'TypeScript', category: 'Languages', level: 'advanced' },
  ],
}));

describe('Skills Component', () => {
  it('renders skills section', () => {
    render(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('displays skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Frameworks')).toBeInTheDocument();
    expect(screen.getByText('Languages')).toBeInTheDocument();
  });

  it('displays skill names', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
});

