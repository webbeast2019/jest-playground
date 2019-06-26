'use strict';
const MIN_JESTA_LENGTH = 5;

// https://jestjs.io/docs/en/tutorial-jquery
const component = require('./jesta.component');

test('JestaComponent: simple init test', () => {
  component.initComponent(document.body);
  document.querySelector('.get-jesta-btn').onclick();
  const display = document.querySelector('.jesta-display');

  expect(display.innerHTML).toBeDefined();
  expect(display.innerHTML.length).toBeGreaterThan(MIN_JESTA_LENGTH);
});

test('JestaComponent: init test with contains', () => {
  const contains = 'Hey bro';
  component.initComponent(document.body, contains);
  document.querySelector('.get-jesta-btn').onclick();
  const display = document.querySelector('.jesta-display');

  expect(display.innerHTML).toBeDefined();
  expect(display.innerHTML.length).toBeGreaterThan(MIN_JESTA_LENGTH);
  expect(display.innerHTML.includes(contains)).toBeTruthy();
});