import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactSection } from '../components/ContactSection';

describe('ContactSection', () => {
  it('renders section title', () => {
    render(<ContactSection isDark={true} />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders contact labels', () => {
    render(<ContactSection isDark={true} />);
    expect(screen.getByText('Gmail')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  it('renders contact values', () => {
    render(<ContactSection isDark={true} />);
    expect(screen.getByText('bulumkojarana@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Africa Bulumko Jarana')).toBeInTheDocument();
    expect(screen.getByText('@EAJ1')).toBeInTheDocument();
    expect(screen.getAllByText('South Africa').length).toBeGreaterThan(0);
  });

  it('renders references section', () => {
    render(<ContactSection isDark={true} />);
    expect(screen.getByText('References')).toBeInTheDocument();
    expect(screen.getByText('Kristin Stai')).toBeInTheDocument();
    expect(screen.getByText('Edward Van Niekerk')).toBeInTheDocument();
    expect(screen.getByText('Keshlin Pather')).toBeInTheDocument();
    expect(screen.getByText('Oarabile Mogase')).toBeInTheDocument();
  });

  it('renders communication preferences', () => {
    render(<ContactSection isDark={true} />);
    expect(screen.getByText('Communication Preferences')).toBeInTheDocument();
  });

  it('renders in light mode without errors', () => {
    render(<ContactSection isDark={false} />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });
});

