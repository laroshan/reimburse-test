import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DetailConsumer } from "../context";

export default function SideBar() {
  return (
    <DetailConsumer>
      {(value) => {
        const { links, path } = value;
        return (
          <SideWrapper show={path}>
            <ul>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link className="sidebar-link" to={link.path}>
                      {link.icon}
                      <span>{link.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </DetailConsumer>
  );
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 55px;
  width: 100%;
  height: 100%;

  background: rgba(159, 159, 160, 0.1);
  //border: 3px solid blue;
  z-index: 1;

  /* transform: ${(props) =>
    props.show ? "translateX(0)" : "translateX(-110%)"}; */
  /* transform: ${(props) =>
    props.show !== "/" ? "translateX(0)" : "translateX(-110%)"}; */
  //beacuse we add overlay
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: #378c7c;
    padding: 0.5rem 0rem;
    background: transparent;
  }
  .sidebar-link:hover {
    background: #00adee;
    color: white;
    /* padding: 0.5rem 0.5rem 0.5rem 2rem; */
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
  }
  @media (max-width: 876px) {
    display: none;
  }
  ul {
    list-style-type: none;
  }
  span {
    padding: 0.5rem 0.5rem;
  }
  li {
    padding-top: 0.5rem;
  }
`;
