'use strict';

const service = require('./jesta.service');

test('get random jesta should return string', () => {
  const value = service.getRandomJesta();
  expect(value).toBeDefined();
});