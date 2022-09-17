import { describe, it, expect } from 'vitest';

import { Appointment } from './../entities/Appointment';
import { CreateAppointment } from './create-appointment';

describe('Create appointment.', () => {
  it('Should be able to create an appointment.', () => {
    const createAppointment = new CreateAppointment();

    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 1);
    endsAt.setDate(endsAt.getDate() + 2);

    expect(
      createAppointment.execute({
        customer: 'Neto Noronha',
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });
});
