import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../components/ThemeToggle';

describe('ThemeToggle', () => {
  it('renders with moon icon when dark mode is true', () => {
    const setIsDark = vi.fn();
    render(<ThemeToggle isDark={true} setIsDark={setIsDark} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    // Should show moon icon for dark mode
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('renders with sun icon when dark mode is false', () => {
    const setIsDark = vi.fn();
    render(<ThemeToggle isDark={false} setIsDark={setIsDark} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    // Should show sun icon for light mode
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('calls setIsDark with opposite value on click', () => {
    const setIsDark = vi.fn();
    render(<ThemeToggle isDark={true} setIsDark={setIsDark} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setIsDark).toHaveBeenCalledWith(false);
  });

  it('calls setIsDark with true when currently light mode', () => {
    const setIsDark = vi.fn();
    render(<ThemeToggle isDark={false} setIsDark={setIsDark} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(setIsDark).toHaveBeenCalledWith(true);
  });
});

