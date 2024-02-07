import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'

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
  const handledelete=title=>{
    alert('You are deleting blog')
    props.getdel(title)
  }

  return (
    <>
      <Header data={props.blogdata} Getserch={Getsearch} />
   
        <div className="container">
          <ul className="flex flex-wrap">
            {Change &&
              Change.map((blog,index) => (
                <Card
                  style={{ width: "18rem", margin: "1rem" ,mixHeight:'40rem'}}
                  key={index}
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
                    <button className="delete" onClick={()=>handledelete(blog.title)}><FontAwesomeIcon icon={faTrash} /></button>
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
