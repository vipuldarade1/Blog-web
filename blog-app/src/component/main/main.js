import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useNavigate } from "react-router-dom";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons/faPenSquare";
import axios from "axios";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { Link } from "react-router-dom";
const Main = (props) => {
  const naviagte = useNavigate();
  const navigateUp = useNavigate();
  const blogdata = props.blogdata;
  const [Change, Setchange] = useState([]);
  useEffect(() => {
    Setchange(blogdata);
  }, [props.blogdata]);

  const navigatetdp = (title) => {
    naviagte(`/blog_page/${title}`);
  };

  const Getsearch = (Sdata) => {
    Setchange(
      blogdata.filter((data) =>
        data.title.toLowerCase().includes(Sdata.toLowerCase())
      )
    );
  };
  const handledelete = async (title) => {
    window.confirm("You are deleting blog");
    props.getdel(title);
    await axios
      .delete("http://localhost:3001/delete/" + title)
      .then((res) => {
        alert("Blog has been Deleted");
      })
      .catch((err) => console.log(err));
  };
  const handleupdate = (title) => {
    props.getupdate(title);
    navigateUp(`/update/${title}`);
  };
  function Gocreate() {
    naviagate("/create");
  }
  const naviagate = useNavigate();

  return (
    <>
      <Header data={props.blogdata} Getserch={Getsearch} />

      <div className=" main">
        <ul className="flex flex-wrap">
          {Change && Change.length > 0 ? (
            Change.map((blog, index) => (
              <Card
                style={{ width: "18rem", margin: "1rem", mixHeight: "40rem" }}
                key={index}
                className="card"
              >
                <Card.Body>
                  <Card.Img className="cardimg" src={blog.urlToImage} />
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
                  <button
                    className="update"
                    onClick={() => handleupdate(blog.title)}
                  >
                    <FontAwesomeIcon icon={faPenSquare} />
                  </button>
                  <button
                    className="delete"
                    onClick={() => handledelete(blog.title)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h6>Blog not found</h6>
          )}
          <li></li>
        </ul>
      </div>
      <li className="bottom-9 right-5  fixed">
        <div className="absolute top-11 right-14 w-20 h-14 bg-slate-200 rounded-full ...">
          <p className="pl-3 ... text-slate-800 ">Create Blog</p>
        </div>
        <Link to="create" onClick={Gocreate}>
          <FontAwesomeIcon
            style={{ color: "#cea636" }}
            size="3x"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ml-16 mt-5 duration-300 ..."
            icon={faCirclePlus}
          />
        </Link>
      </li>
      <Footer />
    </>
  );
};

export default Main;
