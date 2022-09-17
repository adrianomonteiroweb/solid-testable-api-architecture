import { expect, test } from 'vitest';

import { Appointment } from './Appointment';

test('Create an appointment', () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 1);
  endsAt.setDate(endsAt.getDate() + 2);

  const appointment = new Appointment({
    customer: 'Adriano Monteiro',
    startsAt,
    endsAt,
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual('Adriano Monteiro');
});

test('Cannot create an appointment with and date before start date.', () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 2);
  endsAt.setDate(endsAt.getDate() + 1);

  expect(() => {
    return new Appointment({
      customer: 'Adriano Monteiro',
      startsAt,
      endsAt,
    });
  }).toThrow();
});

test('Cannot create an appointment with start date before now.', () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() - 1);
  endsAt.setDate(endsAt.getDate() + 3);

  expect(() => {
    return new Appointment({
      customer: 'Adriano Monteiro',
      startsAt,
      endsAt,
    });
  }).toThrow();
});
