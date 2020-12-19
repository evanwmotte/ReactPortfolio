const express = require("express");
const path = require("path");
require('dotenv').config({silent: true})
const app = express();

const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}!`);
});
