import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/000-404.png";

export default function DefaultPage() {
  return (
    <>
      <Hero
        img={defaultBcg}
        title="404 error"
        // children={<Button>Back to Get Started</Button>}
      />
    </>
  );
}
