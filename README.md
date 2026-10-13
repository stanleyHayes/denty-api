# denty-api

denty api is an application containing JavaScript. The checked-in dependency manifests use Express, MongoDB via Mongoose. Source modules cover `UserSession`, `Appointment`, `Article`, `Record`, `Session`, `User`, `Appointments`, `Articles`, `Records`, `Users`.

## Repository layout

- `controllers/` — 1 tracked file(s); source examples: `controllers/UserSession.js`.
- `models/` — 5 tracked file(s); source examples: `models/Appointment.js`, `models/Article.js`.
- `routes/` — 4 tracked file(s); source examples: `routes/Appointments.js`, `routes/Articles.js`.

## Local setup

Run each package setup block from the repository root. For workspace repositories, install dependencies at the root before running application-specific scripts.

Clone this repository and enter its directory:

```sh
git clone https://github.com/stanleyHayes/denty-api.git
cd denty-api
```

### Node package: `package.json`

Use Node.js and npm.

```sh
npm install
```

- `node index.js` — executes the package entry point.
- The package test script is a placeholder and exits with an error; it does not run an automated test suite.

## Configuration

The application declares `dotenv`. Review environment-variable references in the source and supply your own local values before starting it. Keep credentials out of Git; do not reuse committed credentials.

## Source entry points

- [controllers/UserSession.js](controllers/UserSession.js)
- [index.js](index.js)
- [models/Appointment.js](models/Appointment.js)
- [models/Article.js](models/Article.js)
- [models/Record.js](models/Record.js)
- [models/Session.js](models/Session.js)
- [models/User.js](models/User.js)
- [routes/Appointments.js](routes/Appointments.js)

## Development notes

Commands above come from the tracked manifests and source layout. External services and runtime configuration may be required. Documentation updates do not establish that the application is deployed or that its tests pass.
