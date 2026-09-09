import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EducationSection } from '../components/EducationSection';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, onMouseMove, onMouseLeave, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
    h2: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <h2 {...rest}>{children}</h2>;
    },
    h3: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <h3 {...rest}>{children}</h3>;
    },
    h4: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <h4 {...rest}>{children}</h4>;
    },
    p: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <p {...rest}>{children}</p>;
    },
    span: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <span {...rest}>{children}</span>;
    },
    a: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <a {...rest}>{children}</a>;
    },
    button: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <button {...rest}>{children}</button>;
    },
    section: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <section {...rest}>{children}</section>;
    },
    cite: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <cite {...rest}>{children}</cite>;
    },
    blockquote: ({ children, ...props }: any) => {
      const { initial, animate, exit, whileHover, whileTap, whileInView, viewport, transition, variants, layoutId, ...rest } = props;
      return <blockquote {...rest}>{children}</blockquote>;
    },
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
  useMotionValue: (val = 0) => ({ get: () => val, set: () => {} }),
  useTransform: () => 0,
  useSpring: (v: any) => v,
  useScroll: () => ({ scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } }),
  useInView: () => true,
  useAnimation: () => ({ start: async () => {}, stop: () => {}, set: () => {} }),
  useMotionTemplate: () => '',
  useVelocity: () => 0,
  isValidMotionProp: () => false,
  useReducedMotion: () => false,
}));

describe('EducationSection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders the section heading', () => {
    render(<EducationSection isDark={true} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('renders education institutions', () => {
    render(<EducationSection isDark={true} />);
    expect(screen.getByText('Belgium iTversity Campus')).toBeInTheDocument();
    expect(screen.getByText('Metro Deaf School')).toBeInTheDocument();
  });

  it('renders certifications section heading', () => {
    render(<EducationSection isDark={true} />);
    expect(screen.getByText('Certifications & Training')).toBeInTheDocument();
  });

  it('renders certification entries', () => {
    render(<EducationSection isDark={true} />);
    expect(screen.getByText('AWS Cloud Practitioner Foundation')).toBeInTheDocument();
    expect(screen.getByText('iOS Development')).toBeInTheDocument();
  });

  it('renders the quote', () => {
    render(<EducationSection isDark={true} />);
    expect(screen.getByText(/Moving to Metro Deaf School/)).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<EducationSection isDark={false} />);
    expect(screen.getByText(/Academic journey from deaf education/)).toBeInTheDocument();
  });
});

