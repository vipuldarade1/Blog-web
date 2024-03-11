// import fetch from "node-fetch";
// import mongoose from "mongoose";
const express = require("express");
const app = express();

const collection = require("./mongodb");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.post("/", async (req, res) => {
  try {
    const arr5 = req.body;
    // console.log("Received data:", req.body);
    // console.log("data:", arr5);
    await collection.insertMany([arr5]);
    res.status(200).send("done");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getdata", async (req, res) => {
  await collection
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
app.put("/update/:title", async (req, res) => {
  const newupdate = req.body;

  try {
    await collection.updateOne(
      { title: req.params.title },
      {
        $set: newupdate,
      }
    );
  } catch (error) {
    console.log(error);
  }
});
app.delete("/delete/:title", async (req, res) => {
  try {
    await collection.deleteOne({ title: req.params.title });
  } catch (err) {
    console.log(err);
  }
});
console.log("server is on");
app.listen(3001);
