import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { TypewriterText } from '../components/TypewriterText';

describe('TypewriterText', () => {
  it('renders with cursor initially', () => {
    const { container } = render(<TypewriterText text="Hello World" speed={100} />);
    // The component renders a span with a cursor inside
    const outerSpan = container.querySelector('span');
    expect(outerSpan).toBeInTheDocument();
  });

  it('eventually displays the full text', async () => {
    render(<TypewriterText text="Hello" speed={10} />);
    
    // Wait for the text to fully appear
    await waitFor(() => {
      expect(screen.getByText('Hello')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('displays the first character quickly', async () => {
    render(<TypewriterText text="ABCDE" speed={10} />);
    
    await waitFor(() => {
      expect(screen.getByText('A')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('renders with custom className', () => {
    const { container } = render(
      <TypewriterText text="Test" speed={100} className="custom-class" />
    );
    const span = container.querySelector('span');
    expect(span).toHaveClass('custom-class');
  });
});

