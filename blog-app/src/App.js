import "./App.css";
import Main from "./component/main/main";
import Create from "./pages/create/create";
import Bpage from "./pages/blog_page/blog_page";
import Update from "./pages/update/update";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const url =
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9ffc57759a18406eb520e14919a63e0b";
  let all_blog = [];
  const [blog, SetBlog] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((get) => get.json())
      .then((data) => {
        all_blog = data.articles;

        SetBlog(data.articles);
      });
  }, []);

  const getcreate = (get) => {
    SetBlog([...blog, get]);
  };

  const getdelete = (title) => {
    SetBlog(blog.filter((blog) => title !== blog.title));
  };
  const [getUpdate, SetUpdate] = useState("");

  const getup = (title) => {
   
    SetUpdate(title);
  };
  const CompUpdate = (data) => {
    console.log(data)
    SetBlog(blog.map(blog=>{
      if(blog.title===data.title){
        return {...blog,...data}
      } else {
        return blog
      }
    }))
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
          <Route
            path="Create"
            element={<Create blogdata={blog} getobj={getcreate} />}
          />
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
