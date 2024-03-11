import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import "./update.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
  const Params = useParams();

  const naviagte = useNavigate();
  const [Aouther, setauther] = useState({
    author: "",
    content: "",
    title: "",
    urlToImage: "",
    description: "",
    publishedAt: "",
    source: {
      name: "",
    },
    url: "",
  });
  
  const getdata = props.blogdata;

  const selectdata = getdata.find((data) => data.title === Params.title);

  useEffect(() => {
    setauther({
      ...Aouther,
      author: selectdata.author,
      content: selectdata.content,
      title: selectdata.title,
      urlToImage: selectdata.urlToImage,
      description: selectdata.description,
      src: selectdata.source.name,
      publishedAt: selectdata.publishedAt,
      url: selectdata.url,
    });
  }, []);

  const Update = () => {
  
      axios
        .put("http://localhost:3001/update/" + Aouther.title,Aouther)
        
    
    let arr = [
      {
        ...Aouther,
      },
    ];
    
    props.Updating(arr);
    naviagte("/");
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
          value={Aouther.author}
          onChange={(e) => setauther({ ...Aouther, author: e.target.value })}
        ></input>

        <label>Blog Title</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Aouther.title}
          onChange={(e) => setauther({ ...Aouther, title: e.target.value })}
        ></input>
        <label>content</label>
        <textarea
          className="h-44"
          value={Aouther.content}
          onChange={(e) => setauther({ ...Aouther, content: e.target.value })}
        ></textarea>
        <label>description</label>
        <textarea
          className="h-44"
          value={Aouther.description}
          onChange={(e) =>
            setauther({ ...Aouther, description: e.target.value })
          }
        ></textarea>
        <label>Image-Url</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Aouther.urlToImage}
          onChange={(e) =>
            setauther({ ...Aouther, urlToImage: e.target.value })
          }
        ></input>
        <label>Date</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Aouther.publishedAt}
          type="date"
          onChange={(e) =>
            setauther({ ...Aouther, publishedAt: e.target.value })
          }
        ></input>
        <label>source</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Aouther.src}
          onChange={(e) => setauther({ ...Aouther, source: e.target.value })}
        ></input>
        <label>Blog Url</label>
        <input
          className="w-80 h-6"
          name="Image"
          value={Aouther.url}
          onChange={(e) => setauther({ ...Aouther, url: e.target.value })}
        ></input>
        <button type="submits" onClick={() => Update()}>
          Update
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Update;
