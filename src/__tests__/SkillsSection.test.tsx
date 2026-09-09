import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillsSection } from '../components/SkillsSection';

describe('SkillsSection', () => {
  it('renders section title', () => {
    render(<SkillsSection isDark={true} />);
    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<SkillsSection isDark={true} />);
    const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'Infrastructure', 'CMS', 'Productivity', 'Soft Skills'];
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('renders specific skills', () => {
    render(<SkillsSection isDark={true} />);
    const expectedSkills = ['React', 'JavaScript', 'C#', 'MS SQL', 'Azure AD', 'WordPress'];
    expectedSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('renders soft skills', () => {
    render(<SkillsSection isDark={true} />);
    const softSkills = ['Problem Solving', 'Communication', 'Leadership', 'Creativity', 'Adaptability'];
    softSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('renders in light mode without errors', () => {
    render(<SkillsSection isDark={false} />);
    expect(screen.getByText('Skills & Expertise')).toBeInTheDocument();
  });
});

