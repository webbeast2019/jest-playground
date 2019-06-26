'use strict';
// https://jestjs.io/docs/en/tutorial-jquery
const component = require('./jesta.component');

test('get random jesta should return string', () => {
  document.body.innerHTML = component.jestaTemplate;
  component.initComponent(document.body);
  document.querySelector('.get-jesta-btn').onclick();
  const display = document.querySelector('.jesta-display');

  expect(display.innerHTML).toEqual('aaa');
});