const createError = require("http-errors");
const express = require("express");
const app = express();
require("dotenv").config();

// import routes
const usersRoute = require("./routes/users");
const favoriteRoute = require("./routes/favorites");

app.use("/api/users", usersRoute);
app.use("/api/favorites", favoriteRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Logs the error message
  console.log("ERROR MESSAGE: ", err.message);
  res.sendStatus(err.status || 500);
});

module.exports = app;