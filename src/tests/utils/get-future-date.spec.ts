import { test, expect } from 'vitest';

import { getFutureDate } from './get-future-date';

test('It should be possible to increase the date by 1 year.', () => {
  const year = new Date().getFullYear();

  expect(getFutureDate(`${year}-08-10`).getFullYear()).toEqual(2023);
});
