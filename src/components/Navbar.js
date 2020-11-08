import React, { useState } from "react";
import logo from "../logos/Tonly.svg";
import styled from "styled-components";
import { DetailConsumer } from "../context";
import { FaBell, FaSadCry, FaCaretDown } from "react-icons/fa";
import Dropdown from "./DropDown";
// import NotificationDrop from "./";

import Profile from "../images/profile.jpg";

export default function NavBar() {
  return (
    <DetailConsumer>
      {(value) => {
        return (
          <Nav>
            {/* <FaBars /> */}
            <img src={logo} alt="logo" />
            <i className={FaSadCry} />
            {/* <Hamburger onClick={() => setIsOpen(!isOpen)}> */}
            <span />
            <span />
            <span />
            {/*  </Hamburger> */}
            <Menu>
              <MenuLink>
                <FaBell />
              </MenuLink>
              <MenuLink>Jhon Doe</MenuLink>

              <MenuLink>
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
              </MenuLink>
            </Menu>
          </Nav>
        );
      }}
    </DetailConsumer>
  );
}

const MenuLink = styled.a`
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1.2rem;
  &:hover {
    color: #7b7fda;
    text-decoration: none;
  }
  /* img {
    border-radius: ;
  } */
`;

const Nav = styled.div`
  position: -webkit-sticky;
  position: sticky;
  padding: 0 2rem;
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
  img {
    height: 100%;
    width: 50px;
    position: absolute;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  } */
`;
