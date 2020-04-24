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
  databaseToUse = "mongodb://username:password1@ds059938.mlab.com:59938/heroku_mb0llq72";
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




