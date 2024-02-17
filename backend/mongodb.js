const mongodb = require("mongoose");
mongodb
  .connect("mongodb://localhost:27017/local")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });
const Schema = new mongodb.Schema({
  author: {
    type: String,
    require:true
  },
  content: {
    type: String,
    require:true
  },
  title: {
    type: String,
    require:true
  },
  urlToImage: {
    type: String,
    require:true
  },
  description: {
    type: String,
    require:true
  },
  publishedAt: {
    type: String,
    require:true
  },
  source: {
    type: String,
    require:true
  },
  url: {
    type: String,
    require:true
  },
});
const collection = mongodb.model("collection", Schema);
module.exports = collection;
