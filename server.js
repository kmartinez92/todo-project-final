const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var databaseToUse = "";

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  databaseToUse = "mongodb://nicknaieem:Password1@ds155631.mlab.com:55631/heroku_bslkc1b9";
} 
else {
  databaseToUse = "mongodb://127.0.0.1:27017/todos";
}

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || databaseToUse;

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI);

app.listen(PORT, function () {
  console.log(`App is running on port: ${PORT}`);
});




