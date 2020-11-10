import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import defaultBcg from "../images/original.jpg";

export default function DefaultPage() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Hero
        img={defaultBcg}
        title="404 error"
        // children={<Button>Back to Get Started</Button>}
      />
    </>
  );
}
