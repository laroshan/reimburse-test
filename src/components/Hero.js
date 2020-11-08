import React from "react";
import styled from "styled-components";
// import mainBcg from '../images/'

export default function Hero({ img, title, children }) {
  return (
    <HeroWrapper img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
  }
`;
