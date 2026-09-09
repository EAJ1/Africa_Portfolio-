import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ParticleField } from '../components/ParticleField';

describe('ParticleField', () => {
  it('renders a canvas element', () => {
    const { container } = render(<ParticleField isDark={true} />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass('fixed', 'inset-0', 'pointer-events-none', 'z-0');
  });

  it('renders canvas with transparent background', () => {
    const { container } = render(<ParticleField isDark={true} />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toHaveStyle({ background: 'transparent' });
  });

  it('renders in light mode', () => {
    const { container } = render(<ParticleField isDark={false} />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });
});

