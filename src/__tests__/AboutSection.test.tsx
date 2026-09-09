import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AboutSection } from '../components/AboutSection';

describe('AboutSection', () => {
  it('renders section title', () => {
    render(<AboutSection isDark={true} />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders personal story', () => {
    render(<AboutSection isDark={true} />);
    expect(screen.getByText(/deaf software developer/)).toBeInTheDocument();
    expect(screen.getByText(/Metro Deaf School/)).toBeInTheDocument();
    expect(screen.getByText(/First National Bank/)).toBeInTheDocument();
  });

  it('renders all feature cards', () => {
    render(<AboutSection isDark={true} />);
    expect(screen.getByText('Accessibility Advocate')).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('IT Support Expert')).toBeInTheDocument();
    expect(screen.getByText('Problem Solver')).toBeInTheDocument();
  });

  it('renders feature descriptions', () => {
    render(<AboutSection isDark={true} />);
    expect(screen.getByText(/Bringing unique perspective to inclusive design/)).toBeInTheDocument();
    expect(screen.getByText(/Proficient in React, C#/)).toBeInTheDocument();
  });

  it('renders in light mode without errors', () => {
    render(<AboutSection isDark={false} />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });
});

