import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TechnologiesSection } from '../components/TechnologiesSection';

describe('TechnologiesSection', () => {
  it('renders section title', () => {
    render(<TechnologiesSection isDark={true} />);
    expect(screen.getByText('Technologies I Work With')).toBeInTheDocument();
  });

  it('renders technology categories', () => {
    render(<TechnologiesSection isDark={true} />);
    const categories = [
      'Frontend Development',
      'Backend & Databases',
      'Cloud & DevOps',
      'IT Infrastructure',
      'Tools & Productivity',
      'Emerging Technologies'
    ];
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('renders specific technologies', () => {
    render(<TechnologiesSection isDark={true} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('C# & .NET Core')).toBeInTheDocument();
    expect(screen.getByText('Microsoft Azure')).toBeInTheDocument();
    expect(screen.getByText('Windows Server')).toBeInTheDocument();
    expect(screen.getByText('Machine Learning (Python)')).toBeInTheDocument();
  });

  it('renders GitHub CTA', () => {
    render(<TechnologiesSection isDark={true} />);
    expect(screen.getByText(/Want to see these technologies in action/)).toBeInTheDocument();
    expect(screen.getByText(/Explore My GitHub @EAJ1/)).toBeInTheDocument();
  });

  it('renders in light mode without errors', () => {
    render(<TechnologiesSection isDark={false} />);
    expect(screen.getByText('Technologies I Work With')).toBeInTheDocument();
  });
});

