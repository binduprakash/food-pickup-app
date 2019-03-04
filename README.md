# Midterm Project - Restaurant Pickup App

This project was built by [Bindu Prakash](https://github.com/binduprakash "Bindu's GitHub Profile"), [Tyler Tomczyk](https://github.com/tylosh "Tyler's Github Profile"), and [John Connolly](https://github.com/new-dart "John's Github Profile") with the assistance of the Lighthouse Labs' mentors and the other students in our cohort.

Naan Stop! is a fictional restaurant with an Pickup Order Management system that will text customers with order updates.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information:

- DB_HOST=localhost
- DB_USER=labber
- DB_PASS=labber
- DB_NAME=midterm
- DB_SSL=false
- DB_PORT=5432

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

![The Main Page: Here you see the menu of a fictional restaurant. Clicking any of the Menu Types on the left will redirect you to its spot in the Menu Container.](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop%20Index%20Page.png?raw=true)
Here you see the menu of a fictional restaurant. Clicking any of the Menu Types on the left will redirect you to its spot in the Menu Container.

![Menu Form Validation: Only numerical values are allowed in the form. If a negative number were entered, a popup will let the customer know that their entry is invalid.](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop%20Menu%20Form%20Validation.png?raw=true)
Our customer is trying to be sneaky! Since numerical values are allowed in the form a negative number were could be entered, but a popup will let the customer know that their entry is invalid, and has to be a postive integer.

![Order Confirmation Page: Here the customer can review their order. If they are satisfied with the order, they can submit it to the restaurant. They will provide their first and last name as well as their phone number so that they can be texted with updates.](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop%20Order%20Confirmation%20Page.png?raw=true)
Here the customer can review their order. If they are satisfied with the order, they can submit it to the restaurant. They will provide their first and last name as well as their phone number so that they can be texted with updates.

![Order Confirmed! Upon submission of the order, the customer will be sent to this page.](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop%20Order%20Confirmed%20Page.png?raw=true)
Order Confirmed! Upon submission of the order, the customer will be sent to this page as well as receive a text from the restaurant.

![Order Confirmation Text](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop!%20Customer%20Order%20Confirmation%20Text.png?raw=true)
Order Confirmation Text

![New Order! The Restaurant Admin receives a text informing them that they have a new and unconfirmed order. They will go to the Admin Page on their computer to see the latest order they have to handle.](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop!%20New%20Order%20Text.png?raw=true)
New Order! The Restaurant Admin receives a text informing them that they have a new and unconfirmed order. They will go to the Admin Page on their computer to see the latest order they have to handle.

![The Orders List: The admininstrative side of the restaurant will see a few tables with all their orders, past and present. Orders are sorted by the date created, and are grouped by their Order Status. Clicking on an order will take you to a more detailed page.](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop%20Admin%20Orders%20List.png?raw=true)
The admininstrative side of the restaurant will see a few tables with all their orders, past and present. Orders are sorted by the date created, and are grouped by their Order Status. Clicking on an order will take you to a more detailed page.

![Order Details: The restaurant can look at individual orders. All their relevant contact info is displayed, as well as a detailed list of their order. They restaurant can choose how long the order will take to be prepared, and alter its current status (Unconfirmed, In Progress, Completed, and Cancel). Giving the order a new status will send a text to the customer telling them how long it will take, or if it has been cancelled.](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop%20Order%20Details%20Page.png?raw=true)
The restaurant can look at individual orders. All their relevant contact info is displayed, as well as a detailed list of their order. They restaurant can choose how long the order will take to be prepared, and alter its current status (Unconfirmed, In Progress, Completed, and Cancel). Giving the order a new status will send a text to the customer telling them how long it will take, or if it has been cancelled.

![Order Status Changed: When an order's status is altered, it moves into its associated table. (Bob's Order was just confirmed by the restaurant, so now it's In Progress).](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop%20Order%20Status%20Changed.png?raw=true)
When an order's status is altered, it moves into its associated table. (Bob's Order was just confirmed by the restaurant, so now it's In Progress).

![Order Cancellation: If for whatever reason the order needs to be cancelled, the restaurant can set the order's Status to 'Cancel' and it will send the customer an appropriate text message. The order will then disappear from the Orders List.](https://github.com/new-dart/food-pickup-app/blob/master/docs/Naan%20Stop!%20Order%20Cancellation%20Text.png?raw=true)
Order Cancellation: If for whatever reason the order needs to be cancelled, the restaurant can set the order's Status to 'Cancel' and it will send the customer an appropriate text message. The order will then disappear from the Orders List.
