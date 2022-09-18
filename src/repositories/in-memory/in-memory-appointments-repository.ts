import { areIntervalsOverlapping } from 'date-fns';

import { Appointment } from '../../entities/Appointment';
import { AppointmentsRepository } from './../appointment-repository';

export class InMemoryAppointmentsRepository implements AppointmentsRepository {
  public items: Appointment[] = [];

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment);
  }

  async findOverlappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null> {
    const overLappingAppointment = this.items.find((appointment) => {
      return areIntervalsOverlapping(
        { start: startsAt, end: endsAt },
        { start: appointment.startsAt, end: appointment.endsAt },
        { inclusive: true }
      );
    });

    if (!overLappingAppointment) return null;

    return overLappingAppointment;
  }
}
