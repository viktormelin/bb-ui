import { act, renderHook } from '@testing-library/react';
import useUrl from './useUrl';

describe('should test useUrl hook', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: new URL(window.location.href),
    });
  });

  it('should test that base url is correct', async () => {
    const expectedUrl = 'https://www.example.com/mypath';
    window.location.href = expectedUrl;

    const { result } = renderHook(() => useUrl());

    expect(result.current.baseUrl).toBe('https://www.example.com');
  });
});
