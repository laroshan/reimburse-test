import React from "react";
import logo from "../logos/Tonly.svg";
import styled from "styled-components";
import { DetailConsumer } from "../context";
import { FaBell, FaRegUser, FaArrowAltCircleDown } from "react-icons/fa";

export default function NavBar() {
  return (
    <DetailConsumer>
      {(value) => {
        const { path } = value;
        return (
          <Nav show={path}>
            <img src={logo} alt="logo" />

            {/* <Hamburger onClick={() => setIsOpen(!isOpen)}> */}
            <span />
            <span />
            <span />
            {/*  </Hamburger> */}
            <Menu>
              <MenuLink>
                <FaBell />
              </MenuLink>
              <MenuLink>Jhon Cena</MenuLink>
              <MenuLink>
                <FaRegUser />
              </MenuLink>
              <MenuLink href="">
                <FaArrowAltCircleDown />
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
  /* transform: ${(props) =>
    props.show !== "/" ? "translateX(0)" : "translateX(-110%)"}; */
  /* transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-100%)"}; */
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
