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
          <li>
            <input
              name="search"
              value={nSearch}
              onChange={(e) => Search(e.target.value)}
            ></input>
          </li>

          <li class="font-sans ... font-medium .. uppercase ... text-zinc-700  basis-1  w-full ...">
            <Link to="/">Home</Link>
          </li>

          <li class="font-sans ... font-medium .. uppercase ... text-zinc-700  basis-1  w-full ...">
            <Link to="create" onClick={Gocreate}>
              Create Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
