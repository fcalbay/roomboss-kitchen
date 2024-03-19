import { expect, test } from 'vitest';
import { formatTime } from '../index';

test('should correctly format seconds', () => {
  expect(formatTime(35)).toBe('00:00:35');
});

test('should correctly format minutes', () => {
  expect(formatTime(78)).toBe('00:01:18');
});

test('should correctly format hours', () => {
  expect(formatTime(3672)).toBe('01:01:12');
});
