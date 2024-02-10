import Header from "../../component/header/header";
import "./update.css";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Update = (props) => {
  const Params = useParams();
  const [Aouther, setauther] = useState("");
  const [content, setcontent] = useState("");
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [desc, setdesc] = useState("");
  const [published, setpublished] = useState("");
  const [src, setsrc] = useState("");
  const [url, seturl] = useState("");

  const [newArr, SetnewArr] = useState([]);
  const getdata = props.blogdata;
  console.log(getdata);

  const submit = () => {
    console.log("update");
  };
  return (
    <>
      <Header />

      <div className="container flex flex-col ... space-y-6 ... mb-4">
        <div>
          <h3>Update Blog</h3>
        </div>
        <label>author name</label>
        <input
          className="w-52 h-6"
          name=""
          value={Aouther}
          onChange={(e) => setauther(e.target.value)}
        ></input>

        <label>Blog Title</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        ></input>
        <label>content</label>
        <textarea
          className="h-44"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        ></textarea>
        <label>description</label>
        <textarea
          className="h-44"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        ></textarea>
        <label>Image-Url</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        ></input>
        <label>Date</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={[published]}
          type="date"
          onChange={(e) => setpublished(e.target.value)}
        ></input>
        <label>source</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={src}
          onChange={(e) => setsrc(e.target.value)}
        ></input>
        <label>Blog Url</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={url}
          onChange={(e) => seturl(e.target.value)}
        ></input>
        <button type="submits" onClick={() => submit()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Update;
