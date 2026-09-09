import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Simple Test', () => {
  it('renders text', () => {
    render(React.createElement('div', null, 'Hello World'));
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});

