# Midterm Project - Restaurant Pickup App

This project was built by [Bindu Prakash](https://github.com/binduprakash "Bindu's GitHub Profile"), [Tyler Tomczyk](https://github.com/tylosh "Tyler's Github Profile"), and [John Connolly](https://github.com/new-dart "John's Github Profile") with the assistance of the Lighthouse Labs' mentors and the other students in our cohort.

Naan Stop! is a fictional restaurant with an Pickup Order Management system that will text customers with order updates.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information:

⋅⋅* DB_HOST=localhost
⋅⋅* DB_USER=labber
⋅⋅* DB_PASS=labber
⋅⋅* DB_NAME=midterm
⋅⋅* DB_SSL=false
⋅⋅* DB_PORT=5432

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`

- Check the migrations folder to see what gets created in the DB

6. Run the seed: `npm run knex seed:run`

- Check the seeds file to see what gets seeded in the DB

7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above
- body-parser 1.15.2 or above
- bootstrap 4.3.1 or above
- dotenv 2.x or above
- ejs 2.4.1 or above
- express 4.13.4 or above
- knex 0.11.10 or above
- knex-logger 0.1 or above
- morgan 1.7 or above
- node-sass-middleware 0.9.8 or above
- pg 6.0.2 or above
- sass 1.17.2 or above
- twilio 3.28.1 or above

## Take us through it!
