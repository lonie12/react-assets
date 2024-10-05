import { test, expect } from 'vitest';
import { toCamelCase } from './utils.js';

test('toCamelCase', () => {
  expect(toCamelCase('file-issues .png')).toBe('fileIssuesPng');
});
