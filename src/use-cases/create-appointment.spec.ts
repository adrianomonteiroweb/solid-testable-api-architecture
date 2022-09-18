import { describe, it, expect } from 'vitest';
import { InMemoryAppointmentsRepository } from '../repositories/in-memory/in-memory-appointments-repository';
import { getFutureDate } from '../tests/utils/get-future-date';

import { Appointment } from './../entities/Appointment';
import { CreateAppointment } from './create-appointment';

describe('Create appointment.', () => {
  it('Should be able to create an appointment.', () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository();

    const createAppointment = new CreateAppointment(appointmentsRepository);

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

  it('Should not be able to create an appointment with overlapping dates.', async () => {
    const appointmentsRepository = new InMemoryAppointmentsRepository();

    const createAppointment = new CreateAppointment(appointmentsRepository);

    const startsAt = getFutureDate('2022-08-10');
    const endsAt = getFutureDate('2022-08-15');

    await createAppointment.execute({
      customer: 'Neto Noronha',
      startsAt,
      endsAt,
    });

    expect(
      createAppointment.execute({
        customer: 'Neto Noronha',
        startsAt: getFutureDate('2022-08-14'),
        endsAt: getFutureDate('2022-08-18'),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        customer: 'Neto Noronha',
        startsAt: getFutureDate('2022-08-09'),
        endsAt: getFutureDate('2022-08-14'),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        customer: 'Neto Noronha',
        startsAt: getFutureDate('2022-08-09'),
        endsAt: getFutureDate('2022-08-16'),
      })
    ).rejects.toBeInstanceOf(Error);

    expect(
      createAppointment.execute({
        customer: 'Neto Noronha',
        startsAt: getFutureDate('2022-08-11'),
        endsAt: getFutureDate('2022-08-14'),
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
