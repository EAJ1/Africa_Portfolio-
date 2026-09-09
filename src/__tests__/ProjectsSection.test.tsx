import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsSection } from '../components/ProjectsSection';

describe('ProjectsSection', () => {
  it('renders section title', () => {
    render(<ProjectsSection isDark={true} />);
    expect(screen.getByText('Project Portfolio')).toBeInTheDocument();
  });

  it('renders featured projects', () => {
    render(<ProjectsSection isDark={true} />);
    expect(screen.getByText('AI Resume Builder – CVantage')).toBeInTheDocument();
    expect(screen.getByText('EchoBridge – AI-Powered Accessibility Assistant')).toBeInTheDocument();
    expect(screen.getByText('AI Prototype Project – Finance Sector: Fraud Detection')).toBeInTheDocument();
  });

  it('renders project subtitles', () => {
    render(<ProjectsSection isDark={true} />);
    expect(screen.getByText('AI-Powered Resume Generator')).toBeInTheDocument();
    expect(screen.getByText('Accessibility Innovation')).toBeInTheDocument();
    expect(screen.getByText('AI-Powered Fraud Detection Prototype')).toBeInTheDocument();
  });

  it('renders featured badge', () => {
    render(<ProjectsSection isDark={true} />);
    const featuredBadges = screen.getAllByText('⭐ Featured');
    expect(featuredBadges).toHaveLength(3);
  });

  it('renders GitHub CTA section', () => {
    render(<ProjectsSection isDark={true} />);
    expect(screen.getByText('View all projects on')).toBeInTheDocument();
    expect(screen.getByText(/GitHub Profile @EAJ1/)).toBeInTheDocument();
  });

  it('renders in light mode without errors', () => {
    render(<ProjectsSection isDark={false} />);
    expect(screen.getByText('Project Portfolio')).toBeInTheDocument();
  });
});

