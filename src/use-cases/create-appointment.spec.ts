import { describe, it, expect } from 'vitest';
import { getFutureDate } from '../tests/utils/get-future-date';

import { Appointment } from './../entities/Appointment';
import { CreateAppointment } from './create-appointment';

describe('Create appointment.', () => {
  it('Should be able to create an appointment.', () => {
    const createAppointment = new CreateAppointment();

    const startsAt = getFutureDate('2022-08-10');
    const endsAt = getFutureDate('2022-08-11');

    expect(
      createAppointment.execute({
        customer: 'Neto Noronha',
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
