'use strict';

const service = require('./jesta.service');

const MIN_JESTA_LENGTH = 5;

test('get random jesta should return string', () => {
  const value = service.getRandomJesta();
  expect(value).toBeDefined();
  expect(typeof value).toBe('string');
  expect(value.length).toBeGreaterThan(MIN_JESTA_LENGTH);
});