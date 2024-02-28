const express = require("express");
const app = express();
const collection = require("./mongodb");
const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors)
app.post("/", async (req, res) => {
  const {...arr5} = req.body;
  res.send('hi')
  console.log(...arr5);
  await collection.insertMany([...arr5]);
});
console.log("server is on");
app.listen(3001);
