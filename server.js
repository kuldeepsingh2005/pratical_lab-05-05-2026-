const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/practical")
.then(() => console.log("connected"))
.catch(() => console.log("error"));

// show data
app.get("/", async (req, res) => {
  const data = await Student.find();
  res.render("index", { data });
});

// add data
app.post("/add", async (req, res) => {
  await Student.create(req.body);
  res.redirect("/");
});

app.listen(3000, () => {
    console.log("server running at http://localhost:3000");
});