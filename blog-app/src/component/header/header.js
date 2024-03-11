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
      <nav className="bg-slate-900 shadow-2xl  rounded h-16">
        <ul className="flex space-x-4 ... justify-center ... w-full ...">
          
          <li class="font-sans ... font-medium .. uppercase ...   basis-1  w-full ...">
            <Link to="/" className="text-zinc-300 "><h6>Home</h6></Link>
          </li>

          <li class="font-sans ... font-medium .. uppercase ...   basis-1  w-full ...">
            <Link to="create" onClick={Gocreate} className="text-zinc-300">
              <h6>Create Blogs</h6>
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
