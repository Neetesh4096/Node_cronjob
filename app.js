const express = require("express");
const app = express();
const task = require("./task");

app.get("/start", task.start);
app.get("/stop", task.stop);

module.exports = app;
