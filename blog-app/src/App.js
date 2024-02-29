import "./App.css";
import Main from "./component/main/main";
import Create from "./pages/create/create";
import Bpage from "./pages/blog_page/blog_page";
import Update from "./pages/update/update";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const url =
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9ffc57759a18406eb520e14919a63e0b";
  let all_blog = [];
  const [blog, SetBlog] = useState([]);
  console.log(blog)
  const [newCreate, Setnewcreate] = useState([]);
  console.log(newCreate);
  useEffect(() => {
    fetch(url)
      .then((get) => get.json())
      .then((data) => {
        all_blog = data.articles;

        SetBlog(data.articles);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getdata")
      .then((get) => Setnewcreate(get.data))
      .catch((err) => console.log(err));

    SetBlog({
      ...blog,
      author:newCreate.author,
      content: newCreate.content,
      title: newCreate.title,
      urlToImage: newCreate.urlToImaget,
      description: newCreate.description,
      publishedAt: newCreate.publishedAtt,
      source: newCreate.source,
      url: newCreate.url,
    });
  }, []);

  const getdelete = (title) => {
    SetBlog(blog.filter((blog) => title !== blog.title));
  };
  const [getUpdate, SetUpdate] = useState("");

  const getup = (title) => {
    SetUpdate(title);
  };
  const CompUpdate = (data) => {
    SetBlog(
      blog.map((blog) => {
        if (blog.title === data[0].title) {
          return {
            ...blog,
            author: data[0].author,
            content: data[0].content,
            description: data[0].description,
            publishedAt: data[0].publishedAt,

            src: data[0].src.name,
            title: data[0].title,
            url: data[0].url,
            urlToImage: data[0].urlToImage,
          };
        } else {
          return blog;
        }
      })
    );
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main blogdata={blog} getdel={getdelete} getupdate={getup} />
            }
          />
          <Route path="/blog_page/:title" element={<Bpage blogdata={blog} />} />
          <Route path="Create" element={<Create blogdata={blog} />} />
          <Route
            path="/update/:title"
            element={
              <Update
                blogdata={blog}
                setupdate={getUpdate}
                Updating={CompUpdate}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
