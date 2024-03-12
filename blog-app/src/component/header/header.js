import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBloggerB } from "@fortawesome/free-brands-svg-icons/faBloggerB";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons/faCirclePlus";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

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
      <nav className=" shadow-2xl  rounded h-16 header">
        <ul className="flex space-x-4 ... justify-between ...   ... w-full ...">
          <li className="ml-6 mt-2 hover:scale-125 ">
            <Link  to='/'>
              <FontAwesomeIcon size="2xl"  style={{color: "#ededed",}} icon={faBloggerB} />
            </Link>
          </li>

          <li className="">
          <FontAwesomeIcon className="absolute ml-1 mt-3 "  style={{color: "#b0b0b0",}}  icon={faMagnifyingGlass}/>
            <input
              name="search"
              placeholder="       Search blogs"
              value={nSearch}
              onChange={(e) => Search(e.target.value)}
            ></input>
          </li>
          <li className="ml-6 mt-2 mr-3 hover:scale-125 " >
            <Link to="create" onClick={Gocreate} >
              <FontAwesomeIcon size="2xl" style={{color: "#ededed",}} icon={faCirclePlus} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
