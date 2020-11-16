import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";

export default function DefaultPage() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Hero
        img={defaultBcg}
        title="404 error"
        children={
          <Link to="/forms">
            <button>Back to Get Started</button>
          </Link>
        }
      />
    </>
  );
}
