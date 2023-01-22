const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const path = require("path");
const connectDB = require("./config/db");
const router = require("./routes/router");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

const startApp = async () => {
  try {
    connectDB();
    app.listen(port, () => console.log(`Server started on port ${port}`))
    
  } catch (err) {
    console.log(err);
  }
};

startApp();
