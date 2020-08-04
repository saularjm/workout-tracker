// Require dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Set port
const PORT = process.env.PORT || 3030;

// Require model
const db = require("./models/workouts.js");

// Configure express
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to mongodb, locally or in env for heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Require routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Run app
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});