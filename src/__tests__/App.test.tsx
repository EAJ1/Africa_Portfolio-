import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows loading screen initially', () => {
    render(<App />);
    expect(screen.getByText('Loading portfolio...')).toBeInTheDocument();
    expect(screen.getByAltText('Africa Bulumko Jarana')).toBeInTheDocument();
    expect(screen.getByText('Africa Bulumko Jarana')).toBeInTheDocument();
  });

  it('renders main content after loading', () => {
    render(<App />);
    
    // Advance timers past the 2s loading delay
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    
    // After loading, main sections should be visible
    expect(screen.getByText('Software')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders all main sections after loading completes', () => {
    render(<App />);
    
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Project Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Technologies I Work With')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders footer after loading', () => {
    render(<App />);
    
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    
    expect(screen.getByText(/© 2025 Africa Bulumko Jarana/)).toBeInTheDocument();
    expect(screen.getByText('Accessibility')).toBeInTheDocument();
    expect(screen.getByText('Innovation')).toBeInTheDocument();
    expect(screen.getByText('Excellence')).toBeInTheDocument();
  });
});

