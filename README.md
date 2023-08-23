Submission by Kunal Roy Choudhury(RA2011003010834)
# Billing System Backend
This is a Node.js server along with the frontend created with react redux for a billing system that provides seamless functionality and a user-friendly experience. The backend server has been connected to MongoDB Atlas as database.The same collection is also availabe in ecommerceweb\backend\data.json.The server exposes features via APIs based on REST principles and handles different scenarios that may arise during billing processes. The api calls are in ecommerceweb\backend\routes.
![Screenshot (30)](https://github.com/krockxz/Plotline-Ecommerce-Backend/assets/71250874/eefd675a-0b51-42c1-83de-9c7929bf600b)
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
## All the api keys have been stored in Plotline-Ecommerce-Backend\ecommerceweb\backend\services\.env and will be automatically enabled.
