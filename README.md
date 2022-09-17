# SOLID TESTABLE API ARCHITECTURE

Repository of architectural studies of a testable api with SOLID concepts in classes and TypeScript.

### TECHNOLOGIES

- DevDependencies:

  - Eslint Standard;
    - To standardize formatting during development.
  - Vitest;
    - Test module compatible with jest, typescript and others...
  - date-fns.
    - Used for handling dates in a function to generate future dates.

### ENTITIES

```bash
...
├── src
  ├── entities
    ...
    ├── Appointment.ts
    ...
  ├── tests
  ├── use-cases
...
```

- Appointment:

  - customer;
  - startAt;
  - endAt.

### USE CASES

```bash
...
├── src
  ├── entities
  ├── tests
  ├── use-cases
    ...
    ├── create-appointment.ts
    ...
...
```

- create-appointment:
  - CreateAppointment.

### TESTING THE APPLICATION

- Functions
  - get-future-date
    - Increases date with one year.

```bash
...
├── src
  ├── entities
  ├── tests
    ├── utils
      ...
      ├── get-future-date.ts
      ...
  ├── use-cases
...
```

```zsh
npm test
```

```bash
...
├── src
  ├── entities
    ...
    ├── appointment.spec.ts
    ...
  ├── tests
    ├── utils
      ...
      ├── get-future-date.spec.ts
      ...
  ├── use-cases
    ...
    ├── create-appointment.spec.ts
    ...
...
```
