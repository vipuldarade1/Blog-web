import { useState } from "react";
import Header from "../../component/header/header";
import axios from "axios";
import "./create.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../component/footer/footer";
const Create = (props) => {
  const navigating = useNavigate();
  const [Create, setcreate] = useState({
    author: "",
    content: "",
    title: "",
    urlToImage: "",
    description: "",
    publishedAt: "",
    source: "",
    url: "",
  });
  const data=props.blogdata
  console.log(data);
  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setcreate((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    let arr5 = Create;

    try {
      await axios.post("http://localhost:3001/", {
        ...arr5,
      });
      console.log(arr5);
    } catch (e) {
      console.log(e);
    }
    navigating("/");
  };

  return (
    <>
      <Header />

      <div className="container flex flex-col ... space-y-6 ... mb-4">
        <div>
          <h3>Create Blog</h3>
        </div>
        <label>author name</label>
        <input
          className="w-52 h-6"
          name="author"
          value={Create.author}
          onChange={(e) => handlechange(e)}
        ></input>

        <label>Blog Title</label>
        <input
          className="w-80 h-6"
          name="title"
          value={Create.title}
          onChange={(e) => handlechange(e)}
        ></input>
        <label>content</label>
        <textarea
          className="h-44"
          name="content"
          value={Create.content}
          onChange={(e) => handlechange(e)}
        ></textarea>
        <label>description</label>
        <textarea
          className="h-44"
          name="description"
          value={Create.description}
          onChange={(e) => handlechange(e)}
        ></textarea>
        <label>Image-Url</label>
        <input
          className="w-80 h-6"
          name="urlToImage"
          value={Create.urlToImage}
          onChange={(e) => handlechange(e)}
        ></input>
        <label>Date</label>
        <input
          className="w-80 h-6"
          name="publishedAt"
          value={Create.publishedAt}
          type="date"
          onChange={(e) => handlechange(e)}
        ></input>
        <label>source</label>
        <input
          className="w-80 h-6"
          name="source"
          value={Create.source}
          onChange={(e) => handlechange(e)}
        ></input>
        <label>Blog Url</label>
        <input
          className="w-80 h-6"
          name="url"
          value={Create.url}
          onChange={(e) => handlechange(e)}
        ></input>
        <button type="submits" onClick={(e) => submit(e)}>
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Create;
