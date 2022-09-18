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
  ├── repositories
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
  ├── repositories
  ├── tests
  ├── use-cases
    ...
    ├── create-appointment.ts
    ...
...
```

- create-appointment:
  - CreateAppointment.

### REPOSITORIES

```bash
...
├── src
  ├── entities
  ├── repositories
    ├── in-memory
      ├── appointment-repository.ts
  ├── tests
  ├── use-cases
...
```

- appointment-repository.

### TESTING THE APPLICATION

- Functions
  - get-future-date
    - Increases date with one year.

```bash
...
├── src
  ├── entities
  ├── repositories
  ├── tests
    ├── utils
      ...
      ├── get-future-date.ts
      ...
  ├── use-cases
...
```

- For application test, running:

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
  ├── repositories
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

### REFERENCE

<div>
  <table>
    <thead>
      <tr>
        <th>Rocketseat</th>
      </tr>
    </thhead>
    <tbody>
      <tr>
        <td><img src="https://avatars.githubusercontent.com/u/68549162?s=200&v=4" alt="Rocketseat" width="100x" /></td>
      </tr>
      <tr>
        <td style="text-align: center">
          <a href="https://www.youtube.com/watch?v=jBOLRzjEERk&ab_channel=Rocketseat" target="_blank">Youtube</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
