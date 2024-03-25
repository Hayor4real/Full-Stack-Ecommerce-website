# Full-Stack-Ecommerce-website today

API Documentation
The API provides access to various functionalities within the application. It is RESTful and communicates using JSON.

http://your-api-base-url.com/api

Authentication:
API requests require authentication. Include an auth-token header with a valid user token obtained during login.

Endpoints:
GET /allproducts

Returns a list of all products.
Example: http://your-api-base-url.com/api/allproducts
GET /newcollections

Returns a list of new collection products.
Example: http://your-api-base-url.com/api/newcollections
GET /popularinwomen

Returns a list of popular women's products.
Example: http://your-api-base-url.com/api/popularinwomen
POST /getcart

Retrieves the user's shopping cart.
Requires: auth-token in headers.
Example: http://your-api-base-url.com/api/getcart
POST /addtocart

Adds a product to the user's cart.
Requires: auth-token in headers, itemId in the request body.
Example: http://your-api-base-url.com/api/addtocart
POST /removefromcart

Removes a product from the user's cart.
Requires: auth-token in headers, itemId in the request body.
Example: http://your-api-base-url.com/api/removefromcart

Example Success Response:

{
"success": true,
"data": {
// ... relevant data
}
}

Example Error Response:

{
"success": false,
"errors": "Invalid credentials"
}

Deployment Guide:
Prerequisites:
Node.js and npm installed.
MongoDB database.
Steps:
Clone Repository:

git clone https://github.com/your/repository.git
cd your-project-directory

Install Dependencies:
npm install

Configure Environment Variables:
Create a .env file in the root directory with the following variables:

PORT=4000
MONGODB_URI=mongodb://your-mongodb-uri

Run the Application
npm start

Technologies Used:
Frontend:
React
React Router

Backend:
Node.js
Express
MongoDB

# Full-Stack-Ecommerce-website today
