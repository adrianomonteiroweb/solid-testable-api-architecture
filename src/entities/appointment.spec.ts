import { expect, test } from 'vitest';

import { Appointment } from './Appointment';

test('Create an appointment', () => {
  const startsAt = new Date();
  const endsAt = new Date();

  endsAt.setDate(endsAt.getDate() + 1);

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

  endsAt.setDate(endsAt.getDate() - 1);

  expect(() => {
    return new Appointment({
      customer: 'Adriano Monteiro',
      startsAt,
      endsAt,
    });
  }).toThrow();
});
