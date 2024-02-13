import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const naviagate = useNavigate();
  const [nSearch, SetSearch] = useState("");

  function Search(sarching) {
    SetSearch(sarching);
    props.Getserch(nSearch);
  }
  function Gocreate() {
    naviagate("/create");
  }
  return (
    <>
      <nav className="bg-slate-200 shadow-2xl  rounded">
        <ul className="flex space-x-4 ... justify-center ... w-full ...">
          
          <li class="font-sans ... font-medium .. uppercase ...   basis-1  w-full ...">
            <Link to="/" className="text-zinc-700 ">Home</Link>
          </li>

          <li class="font-sans ... font-medium .. uppercase ...   basis-1  w-full ...">
            <Link to="create" onClick={Gocreate} className="text-zinc-700">
              Create Blogs
            </Link>
          </li>
          <li>
            <input
              name="search"
              value={nSearch}
              onChange={(e) => Search(e.target.value)}
              
            ></input>
          </li>

        </ul>
      </nav>
    </>
  );
};

export default Header;
