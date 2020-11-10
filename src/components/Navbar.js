import React from "react";
import logo from "../logos/Tonly.svg";
import styled from "styled-components";
import { DetailConsumer } from "../context";
import { FaBell, FaCaretDown, FaBars } from "react-icons/fa";

import Profile from "../images/profile.jpg";

export default function NavBar() {
  // const [click, setClick] = useState(true);
  //dropdown

  // const handleClick = () => {
  //   setClick(!click);
  // };
  // const closeMobileMenu = () => {
  //   setClick(false);
  // };

  return (
    <DetailConsumer>
      {(value) => {
        const { handleOpen } = value;
        return (
          <NavWrapper>
            <div>
              <FaBars className="fa-bar" onClick={handleOpen} />
              <img src={logo} alt="logo" className="logo" />
            </div>

            <Menu>
              <li className="nav-item">
                <FaBell className="nav-links" />
              </li>
              <li className="nav-item">
                <h4>Jhon Doe</h4>
              </li>
              <li className="nav-item">
                {/* <img src={Profile} alt="profile" /> */}
                <div className="container">
                  <div className="row">
                    <div className="col col-xs-6 col-md-4">
                      <img src={Profile} alt="profile" />
                    </div>
                    <div className="col col-xs-6 col-md-4">
                      <FaCaretDown />
                    </div>
                  </div>
                </div>
              </li>
            </Menu>
          </NavWrapper>
        );
      }}
    </DetailConsumer>
  );
}

// const MenuLink = styled.a`
//   padding: 1rem 1rem;
//   cursor: pointer;
//   text-align: center;
//   text-decoration: none;
//   color: white;
//   transition: all 0.3s ease-in;
//   font-size: 1.2rem;
//   &:hover {
//     color: #7b7fda;
//     text-decoration: none;
//     background-color: transparent;
//     transition: all 0.2s ease-out;
//   }
// `;

const NavWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #ee3934;
  top: 0;
  z-index: 1;
  width: 100%;
  left: 0;
  right: 0;
  /*  */
  .logo {
    color: white;
    justify-self: start;
    margin-left: 5px;
    // cursor: pointer;
    text-decoration: none;
    //position: absolute;
    width: 70px;
    //font-weight: bolder;
  }
  .fa-bar {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    .fa-bar {
      color: white;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: absolute;
      margin-top: 20px;
    }
    .logo {
      margin-left: 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  list-style: none;

  h4 {
    padding: 0rem 0rem;
    text-align: center;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-in;
    font-size: 1.2rem;
  }
  img {
    height: 100%;
    width: 50px;
    position: relative;
  }
  .nav-item {
    display: flex;
    align-items: center;
    padding: 0rem 0.5rem;
    /* height: 50px; */
  }
`;
