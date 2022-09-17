import { expect, test } from 'vitest';
import { getFutureDate } from '../tests/utils/get-future-date';

import { Appointment } from './Appointment';

test('Create an appointment', () => {
  const startsAt = getFutureDate('2022-08-10');
  const endsAt = getFutureDate('2022-08-11');

  const appointment = new Appointment({
    customer: 'Adriano Monteiro',
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual('Adriano Monteiro');
});

test('Cannot create an appointment with and date before start date.', () => {
  const startsAt = getFutureDate('2022-08-10');
  const endsAt = getFutureDate('2022-08-09');

  expect(() => {
    return new Appointment({
      customer: 'Adriano Monteiro',
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test('Cannot create an appointment with start date before now.', () => {
  const startsAt = getFutureDate('2022-08-17');
  const endsAt = getFutureDate('2022-08-17');

  expect(() => {
    return new Appointment({
      customer: 'Adriano Monteiro',
      startsAt,
      endsAt,
    });
  }).toThrow();
});
