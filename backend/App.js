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
  console.log("update", req.body);
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
// mongoose.connect('mongodb://localhost:27017/local')
// const post=new mongoose.Schema({
//   author: {
//     type: String,
//     required:true
//   },
//   content: {
//     type: String,
//     required:true
//   },
//   title: {
//     type: String,
//     required:true
//   },
//   urlToImage: {
//     type: String,
//     required:true
//   },
//   description: {
//     type: String,
//     required:true
//   },
//   publishedAt: {
//     type: String,
//     required:true
//   },
//   source:{
//     name:{
//       type: String,
//       required:true
//     },
//   } ,
//   url: {
//     type: String,
//     required:true
//   },
// })
// const newcol=mongoose.model('collections1',post)
// async function apipost() {
//   const api = await fetch(
//     "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9ffc57759a18406eb520e14919a63e0b"
//   );
//   const respons = await api.json();

//   for(let i=0;i<respons.length;i++){
//     console.log(respons[i]['author'])
//     const newpost=new newcol({
//       author: respons[i]['author'],
//       content:respons[i]['conten'],
//       title: respons[i]['title'],
//       urlToImage: respons[i]['urlToImage'],
//       description: respons[i]['description'],
//       publishedAt:respons[i]['publishedAt'],
//       source:{
//         name:respons.source[i]['source.name']
//       } ,
//       url: respons.source[i]['url']
//     })
//     newpost.save()
//   }
// }
console.log("server is on");
app.listen(3001);
// apipost()
