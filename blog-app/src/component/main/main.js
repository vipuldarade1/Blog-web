import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const naviagte = useNavigate();
  const Blogdata=props.blogdata;
  const [Change, Setchange] = useState();
  
  const navigatetdp = (title) => {
    console.log(title);
    naviagte(`/blog_page/${title}`);
  };
  const Getsearch = (Sdata) => {
    
    Setchange(
      Blogdata.filter((data) =>
        data.title.toLowerCase().includes(Sdata.toLowerCase())
      )
    );
    
  };
  
  return (
    <>
      <Header data={props.blogdata} Getserch={Getsearch} />
      <div className="container">
        <ul className="flex flex-wrap">
          {Change.map((blog) => (
            <Card style={{ width: "18rem", margin: "1rem" }} key={blog.title}>
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
