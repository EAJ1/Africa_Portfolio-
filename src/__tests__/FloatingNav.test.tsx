import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FloatingNav } from '../components/FloatingNav';

const expectedLabels = [
  'Home', 'About', 'Skills', 'Projects',
  'Technologies', 'Experience', 'Education', 'Contact'
];

describe('FloatingNav', () => {
  it('renders all navigation items', () => {
    render(<FloatingNav isDark={true} />);
    
    expectedLabels.forEach(label => {
      const button = screen.getByTitle(label);
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('aria-label', `Navigate to ${label}`);
    });
  });

  it('renders with correct number of nav buttons', () => {
    render(<FloatingNav isDark={true} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(expectedLabels.length);
  });

  it('renders in light mode without errors', () => {
    render(<FloatingNav isDark={false} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(8);
  });
});

