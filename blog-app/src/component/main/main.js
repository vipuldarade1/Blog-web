import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import Header from "../header/header";
import { useNavigate } from "react-router-dom";


const Main = (props) => {
  const naviagte = useNavigate();

  const blogdata = props.blogdata;
  const [Change, Setchange] = useState([]);
  useEffect(() => {
    Setchange(blogdata);
  },[props.blogdata]);

  const navigatetdp = (title) => {
    console.log(title)
    naviagte(`/blog_page/${title}`);
  };

  const Getsearch = (Sdata) => {
    console.log(Sdata);
    Setchange(
      blogdata.filter((data) =>
        data.title.toLowerCase().includes(Sdata.toLowerCase())
      )
    );
  };
  

  return (
    <>
      <Header data={props.blogdata} Getserch={Getsearch} />
   
        <div className="container">
          <ul className="flex flex-wrap">
            {Change &&
              Change.map((blog) => (
                <Card
                  style={{ width: "18rem", margin: "1rem" }}
                  key={blog.title}
                >
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {blog.author}
                    </Card.Subtitle>
                    <Card.Text>{blog.description} </Card.Text>
                    <Card.Link
                      onClick={() => {
                        navigatetdp(blog.title);
                      }}
                    >
                      more
                    </Card.Link>
                  </Card.Body>
                </Card>
              ))}
            <li></li>
          </ul>
        </div>
     
    </>
  );
};

export default Main;
