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
    url: ""
  });

  const submit = async () => {
    let arr = [{ ...Create }];

    // props.getobj(newArr);
    try {
      await axios.post("http://localhost:3001/", {
        ...arr,
      });
      console.log(...arr);
    } catch (e) {
      console.log(e);
    }
    // navigating("/");
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
          name="Author"
          value={Create.author}
          onChange={(e)=> console.log(setcreate({author: e.target.value }))}
        ></input>

        <label>Blog Title</label>
        <input
          className="w-80 h-6"
          name="title"
          value={Create.title}
          onChange={(e) => setcreate({ title: e.target.value })}
        ></input>
        <label>content</label>
        <textarea
          className="h-44"
          value={Create.content}
          onChange={(e) => setcreate({ content: e.target.value })}
        ></textarea>
        <label>description</label>
        <textarea
          className="h-44"
          value={Create.description}
          onChange={(e) => setcreate({ description: e.target.value })}
        ></textarea>
        <label>Image-Url</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Create.urlToImage}
          onChange={(e) => setcreate({ urlToImage: e.target.value })}
        ></input>
        <label>Date</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Create.publishedAt}
          type="date"
          onChange={(e) => setcreate({ publishedAtr: e.target.value })}
        ></input>
        <label>source</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Create.source}
          onChange={(e) => setcreate({ source: e.target.value })}
        ></input>
        <label>Blog Url</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Create.url}
          onChange={(e) => setcreate({ url: e.target.value })}
        ></input>
        <button type="submits" onClick={() => submit()}>
          Submit
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Create;
