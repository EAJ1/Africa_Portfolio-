import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '../components/HeroSection';

// Mock requestAnimationFrame for MorphingBlob
vi.stubGlobal('requestAnimationFrame', vi.fn());
vi.stubGlobal('cancelAnimationFrame', vi.fn());

describe('HeroSection', () => {
  it('renders with dark mode', () => {
    render(<HeroSection isDark={true} />);
    expect(screen.getByText('Software')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders with light mode', () => {
    render(<HeroSection isDark={false} />);
    expect(screen.getByText('Software')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders contact links', () => {
    render(<HeroSection isDark={true} />);
    expect(screen.getByText('bulumkojarana@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<HeroSection isDark={true} />);
    expect(screen.getByText('View CV')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders profile image', () => {
    render(<HeroSection isDark={true} />);
    const img = screen.getByAltText('Africa Bulumko Jarana');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/Portfolio.jpg');
  });

  it('renders scroll to explore button', () => {
    render(<HeroSection isDark={true} />);
    expect(screen.getByText('Scroll to explore')).toBeInTheDocument();
  });
});

