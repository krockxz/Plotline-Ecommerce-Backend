Submission by: Kunal Roy Choudhury(RA2011003010834)
# Billing System Backend
This is a Node.js server for a billing system that provides seamless functionality and a user-friendly experience. The server exposes features via APIs based on REST principles and handles different scenarios that may arise during billing processes.

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
