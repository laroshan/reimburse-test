import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function DropDown() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <dropWrapper>
      <div className="container">
        <ul
          onClick={handleClick}
          className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        >
          <li>
            <Link className="dropdown-link" to="/">
              Jhon Doe
            </Link>
          </li>
        </ul>
      </div>
    </dropWrapper>
  );
}

const dropWrapper = styled.div`
  .dropdown-menu {
    width: 200px;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;
  }
  .dropdown-menu li {
    background: #1888ff;
    cursor: pointer;
  }
  .dropdown-menu li:hover {
    background: #5cabff;
  }
  .dropdown-menu.clicked {
    // display: none;
  }
  .dropdown-link {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 1rem;
  }
`;
