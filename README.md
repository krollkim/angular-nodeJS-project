CRM App

The CRM app is a web-based application built using MySQL, Node.js, and Angular. The app provides a user interface for managing customer records, including creating, editing, and deleting records, as well as searching through existing records.
And a task list, because every company needs to keep track on tasks that need to be one.


Features -

The CRM app offers a number of features that make it a valuable tool for managing customer records, including:

User Authentication - Users must sign up and log in to use the application, which helps to keep customer data secure.

Customer & Contact Record Creation - The app provides a form for creating new customer records, which can include important information such as name, email address, phone number, and notes.

Customer & Contact Record Editing - Users can edit existing customer records, allowing them to update contact information or other important details as needed.

Customer & Contact Record Deletion - If a customer record is no longer needed, users can delete it from the app to keep their records up to date.

Search Functionality - The app includes a search function that allows users to search for customer records by name or email address, making it easy to find the information they need.

Intuitive User Interface - The app's user interface is designed to be easy to use and understand, even for users who are not familiar with the application.


Installation -

To install the CRM app, follow these steps:

Clone the repository to your local machine.

Install XAMPP or WAMP and start the services for Apache and MySQL.

Navigate to the CRM-backend folder and run npm install to install the required dependencies.

Create a new file named .env in the CRM-backend folder and add the following environment variables:

makefileCopy code

DB_HOST=localhost DB_USER=your-mysql-username DB_PASSWORD=your-mysql-password DB_NAME=CRM JWT_SECRET=your-jwt-secret 

Replace your-mysql-username and your-mysql-password with your MySQL credentials, and replace your-jwt-secret with a secret string of your choice.

Run the command node models.js in the CRM-backend folder to create the necessary database tables.

Run the command npm start in the CRM-backend folder to start the server.

Navigate to the CRM-frontend folder and run npm install to install the required dependencies.

Run the command ng serve in the CRM-frontend folder to start the application.

Open your web browser and navigate to http://localhost:4200 to use the CRM app.


Additional Information -

The backend of the application is built with Node.js and uses the MySQL database to store customer data.

The frontend of the application is built with Angular and provides an intuitive user interface for managing customer data.

The database credentials are stored in the .env file.

The .env file is not included in the repository and should never be committed to version control.

There is a file named sqlConnect.js in the CRM-backend folder that can be run to create the MySQL database.

This CRM app is designed for managing customer data and is not intended for other use cases.


Author -

This CRM app was created by Kim Kroll.


License -

This project is licensed under the MIT License.

BTW -
inside the folder of the project there is an exported file of the data base, copy the sql content and paste it in yours.

