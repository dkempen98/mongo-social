// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete users and thoughts in my database
// WHEN I test API POST and DELETE routes in Insomnia
// THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// WHEN I open API GET routes in Insomnia for users and thoughts
// THEN the data for each of these routes is displayed in a formatted JSON

// THEN my server is started and the Mongoose models are synced to the MongoDB database

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
