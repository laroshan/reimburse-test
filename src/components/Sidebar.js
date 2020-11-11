import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DetailConsumer } from "../context";

export default function SideBar() {
  return (
    <DetailConsumer>
      {(value) => {
        const { links, open } = value;
        return (
          <SideWrapper open={open}>
            <ul>
              {links.map((link) => {
                return (
                  <div
                    className={
                      window.location.pathname === link.path
                        ? "active"
                        : "non-active"
                    }
                  >
                    <li key={link.id}>
                      <Link className="sidebar-link" to={link.path}>
                        {link.icon}
                        <span>{link.text}</span>
                      </Link>
                    </li>
                  </div>
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
  top: 70px;

  width: 100%;
  height: 100%;
  background: rgba(159, 159, 160, 0.1);
  z-index: 1;

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
    /* padding: 0.5rem 0.5rem 0.5rem 2rem;   */
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 18rem;
  }
  @media (max-width: 1000px) {
    display: ${(props) => (props.open ? "none" : "flex")};
    background: rgba(255, 255, 255, 0.7);
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  span {
    padding: 0.5rem 0.5rem;
  }
  li {
    padding: 1rem;
  }
  .active {
    border-left: 4px solid red;
  }
`;
