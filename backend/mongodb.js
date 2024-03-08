const mongodb = require("mongoose");
mongodb
  .connect("mongodb://localhost:27017/local")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });
const newSchema = new mongodb.Schema({
  author: {
    type: String,
    required:true
  },
  content: {
    type: String,
    required:true
  },
  title: {
    type: String,
    required:true
  },
  urlToImage: {
    type: String,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  publishedAt: {
    type: String,
    required:true
  },
  source:{
    name:[String]
  } ,
  url: {
    type: String,
    required:true
  },
});
const collection = mongodb.model("collection1", newSchema);
module.exports = collection;
