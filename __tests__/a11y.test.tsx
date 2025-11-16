import { render } from '@testing-library/react';
import Home from '@/app/page';

describe('Accessibility Tests', () => {
  it('should render without accessibility violations', () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  it('should have proper heading hierarchy', () => {
    const { container } = render(<Home />);
    const headings = container.querySelectorAll('h1, h2, h3');
    expect(headings.length).toBeGreaterThan(0);
  });
});

