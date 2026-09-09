import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock requestAnimationFrame to prevent infinite loops in jsdom
globalThis.requestAnimationFrame = vi.fn((_: FrameRequestCallback) => 0) as unknown as typeof globalThis.requestAnimationFrame;
globalThis.cancelAnimationFrame = vi.fn() as unknown as typeof globalThis.cancelAnimationFrame;

