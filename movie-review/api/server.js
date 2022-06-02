require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");

const app = express();
const db = require("./config/db");
const router = require("./routes");
const passport = require("./config/passport");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(
  sessions({
    secret: "movieReview",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);

db.sync({ force: false })
  .then(() => {
    console.log("DB 'sw_tmdb' connected");
    app.listen(3001, () => console.log("Server: http://localhost:3001"));
  })
  .catch((err) => console.error(err));
