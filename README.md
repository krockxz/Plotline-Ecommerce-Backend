
# Billing System Backend
This is a Node.js server along with the frontend created with react redux for a billing system that provides seamless functionality and a user-friendly experience. The server exposes features via APIs based on REST principles and handles different scenarios that may arise during billing processes.

## Features
The server has endpoints to enable the following functionalities for users:
- Create an account.
- Fetch all products and services information with their prices.
- Add a product or service to the cart.
- Remove a product or service from the cart.
- Clear the cart.
- View total bill (should include price, quantity, and tax on each item as well as total value of selected items).
- Confirm the order.
The server also has an additional API for admin to see all the orders.
## Tax Calculation
The server integrates tax calculation based on the price range of products and services using the given rules in the problem statement.
## How to run
After installation of all dependencies,
Step 1 : use command npm run dev followed by npm start in cd backend to run the server.
Step 2 :use command npm start in cd frontend to run the react redux app.
## For admin dashboard
Email: dummy@gmail.com
Password: Qwerty123