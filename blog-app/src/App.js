import "./App.css";
import Main from "./component/main/main";
import Create from "./pages/create/create";
import Bpage from "./pages/blog_page/blog_page";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Authcontex from "./context/auth-context";

function App() {

  
  const url =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9ffc57759a18406eb520e14919a63e0b";
let all_blog = [];
const [blog, SetBlog] = useState([]);

const usecont=useContext(Authcontex)
  console.log(usecont)
useEffect(() => {
  fetch(url)
    .then((get) => get.json())
    .then((data) => {
      
      all_blog=data.articles
      SetBlog(data.articles);
    });
},[]);



  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Main  blogdata={blog}/>} />
          <Route path="/blog_page/:title" element={<Bpage blogdata={blog}/>} />
          <Route path="/Create" element={<Create  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
