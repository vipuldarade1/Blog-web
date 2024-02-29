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

app.get("/getdata", (req, res) => {
  collection
    .find()
    .then((data) => res.json(data))
    .then((data) => console.log(data))
    .catch((err) => res.json(err));
});
console.log("server is on");
app.listen(3001);
