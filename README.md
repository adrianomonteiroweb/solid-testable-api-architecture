# SOLID TESTABLE API ARCHITECTURE

Repository of architectural studies of a testable api with SOLID concepts in classes and TypeScript.

### TECHNOLOGIES

- DevDependencies:

  - Eslint Standard;
    To standardize formatting during development.
  - Vitest;
    Test module compatible with jest, typescript and others...
  - date-fns.
    Used for handling dates in a function to generate future dates.

### ENTITIES

```bash
.
├── src
│ ├── entities
│     ├── Appointment.ts
```

- Appointment:

  - customer;
  - startAt;
  - endAt.

### USE CASES

```bash
.
├── src
│ ├── use-cases
│     ├── create-appointment.ts
```

- create-appointment:
  - CreateAppointment.

### TESTING THE APPLICATION

```zsh
npm test
```
