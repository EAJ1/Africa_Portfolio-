import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExperienceSection } from '../components/ExperienceSection';

describe('ExperienceSection', () => {
  it('renders section title', () => {
    render(<ExperienceSection isDark={true} />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('renders all experience entries', () => {
    render(<ExperienceSection isDark={true} />);
    expect(screen.getByText('IT Support and Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('IT Support Technician')).toBeInTheDocument();
    expect(screen.getByText('Customer Service Volunteer')).toBeInTheDocument();
  });

  it('renders company names', () => {
    render(<ExperienceSection isDark={true} />);
    expect(screen.getByText('Capaciti')).toBeInTheDocument();
    expect(screen.getByText('First National Bank')).toBeInTheDocument();
    expect(screen.getByText('Selo Events Business')).toBeInTheDocument();
  });

  it('renders employment types', () => {
    render(<ExperienceSection isDark={true} />);
    expect(screen.getByText('Learnership')).toBeInTheDocument();
    expect(screen.getByText('Full-time')).toBeInTheDocument();
    expect(screen.getByText('Volunteer')).toBeInTheDocument();
  });

  it('renders motivational quote', () => {
    render(<ExperienceSection isDark={true} />);
    expect(screen.getByText(/I am primarily motivated by the opportunity/)).toBeInTheDocument();
  });

  it('renders in light mode without errors', () => {
    render(<ExperienceSection isDark={false} />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });
});

