import { test, expect } from 'vitest';
import { folderExists, isFile, nameVariable, toCamelCase } from './utils.js';

//
test('toCamelCase', () => {
  expect(toCamelCase('file-issues .png')).toBe('fileIssuesPng');
});

//
test('nameVariable', () => {
  expect(nameVariable('file-issues .png')).toBe(
    'export const rAssetfileIssuesPng = "file-issues .png"; \n',
  );
});

//
test('isFile', () => {
  expect(isFile(`${process.cwd()}/src/utils.ts`)).toBe(true);
});

//
test('folderExists', () => {
  expect(folderExists(`${process.cwd()}/src`)).toBe(true);
});
