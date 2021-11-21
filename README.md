# MERN
**A full stack application using MongoDB, Express, NodeJS and React**

## Built via the tutorial [here](https://github.com/mongodb-developer/mern-stack-example)

## Running Locally
- Create a MongoDB database or copy the connection string for an existing database 
- Fork or clone this repo
- Create a config.env file in the `server` directory
- In the config file, add your MongoDB connection string as `ATLAS_URL=<user:password>@<yourdbconnectionstring>.mongodb.net/<databaseName>?retryWrites=true&w=majority`
- In the config file, set the `PORT` variable as `5000`
- Navigate to the `server` directory and install nodemon with `npm i nodemon`
- Start the server with `nodemon server.js`
- In a separate terminal tab, navigate to the `client` directory and run `npm start`