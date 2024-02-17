const express = require("express");
const app = express();
const collection = require("./mongodb");
const cors = require("cors");
// const bodyparser=require('body-parser')
// const jsonbody=bodyparser.json();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.post("/", async (req, res) => {
  const { newArr1 } = req.body;
  console.log(newArr1);
  await collection.insertMany([newArr1]);
});
console.log("server is on");
app.listen(3001);
