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
    source: {
      name:""
    },
    url: "",
  });

  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setcreate((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const submit = async (e) => {
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
        <label>Author name</label>
        <input
          className="w-52 h-7"
          name="author"
          placeholder=" Author name"
          value={Create.author}
          onChange={(e) => handlechange(e)}
        ></input>

        <label>Blog Title</label>
        <input
          className="w-80 h-7"
          name="title"
          placeholder="Blog Title"
          value={Create.title}
          onChange={(e) => handlechange(e)}
        ></input>
        <label>Content</label>
        <textarea
          className="h-44 w-3/4"
          name="content"
          placeholder="Content"
          value={Create.content}
          onChange={(e) => handlechange(e)}
        ></textarea>
        <label>Description</label>
        <textarea
          className="h-44 w-3/4"
          name="description"
          placeholder="Description"
          value={Create.description}
          onChange={(e) => handlechange(e)}
        ></textarea>
        <label>Image-Url</label>
        <input
          className="w-80 h-7"
          name="urlToImage"
          placeholder="Image-Url"
          value={Create.urlToImage}
          onChange={(e) => handlechange(e)}
        ></input>
        <label>Published Date</label>
        <input
          className="w-80 h-7"
          name="publishedAt"
          placeholder="Published Date"
          value={Create.publishedAt}
          type="date"
          onChange={(e) => handlechange(e)}
        ></input>
        <label>Source</label>
        <input
          className="w-80 h-7"
          name="source"
          placeholder="Source"
          value={Create.source.name}
          onChange={(e) => handlechange(e)}
        ></input>
        <label>Blog Url</label>
        <input
          className="w-80 h-7"
          name="url"
          placeholder="Blog Url"
          value={Create.url}
          onChange={(e) => handlechange(e)}
        ></input>
        <button type="submits" className="bg-[#1d4ed8]" onClick={(e) => submit(e)}>
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Create;
