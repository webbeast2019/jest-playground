'use strict';

const service = require('./jesta.service');

const MIN_JESTA_LENGTH = 5;

test('get random jesta should return string', () => {
  const value = service.getRandomJesta();

  expect(value).toBeDefined();
  expect(typeof value).toMatch('string');
  expect(value.length).toBeGreaterThan(MIN_JESTA_LENGTH);
});

test('getRandomLongJesta should return string of minimum length', () => {
  const minLength = Math.floor(Math.random() * 20);
  const value = service.getRandomLongJesta(minLength);

  expect(value).toBeDefined();
  expect(typeof value).toMatch('string');
  expect(value.length).toBeGreaterThan(minLength);
});

test('getRandomShortJesta should return string of maximum length', () => {
  const maxLength = Math.floor(Math.random() * 20 + 20);
  const value = service.getRandomShortJesta(maxLength);

  expect(value).toBeDefined();
  expect(typeof value).toMatch('string');
  expect(value.length).toBeLessThan(maxLength);
});

test('getJestaContains should return string containing', () => {
  const containingString = 'Macchiato';
  const value = service.getJestaContains(containingString);

  expect(value).toBeDefined();
  expect(typeof value).toMatch('string');
  expect(value.includes(containingString)).toBeTruthy();
});

test('getAllJestaStartWith should return string with', () => {
  const startingString = 'Hey';
  const value = service.getJestaStartWith(startingString);
  const startingStringLen = startingString.length;

  expect(value).toBeDefined();
  expect(typeof value).toMatch('string');
  expect(value.substr(0, startingStringLen)).toBe(startingString);
});