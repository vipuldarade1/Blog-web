import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBloggerB } from "@fortawesome/free-brands-svg-icons/faBloggerB";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";

const Header = (props) => {
  const [nSearch, SetSearch] = useState("");
  function Search(sarching) {
    SetSearch(sarching);
    props.Getserch(nSearch);
  }

  return (
    <>
      <nav className=" shadow-2xl  rounded h-16 header">
        <ul className="flex space-x-4 ... justify-between ...   ... w-full ...">
          <li className="ml-6 mt-2  ">
            <Link to="/">
              <FontAwesomeIcon
                size="2xl"
                style={{ color: "#ededed" }}
                icon={faBloggerB}
              />
            </Link>
          </li>

          <li className="mr-4">
            <FontAwesomeIcon
              className="absolute ml-1 mt-3 "
              style={{ color: "#b0b0b0" }}
              icon={faMagnifyingGlass}
            />
            <input
              name="search"
              placeholder="       Search blogs"
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
