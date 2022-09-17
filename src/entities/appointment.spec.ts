import { expect, test } from 'vitest';

import { Appointment } from './Appointment';

test('Create an appointment', () => {
  const appointment = new Appointment({
    customer: 'Adriano Monteiro',
    startsAt: new Date(),
    endsAt: new Date(),
  });

  expect(appointment).toBeInstanceOf(Appointment);
  expect(appointment.customer).toEqual('Adriano Monteiro');
});
