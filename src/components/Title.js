import React from "react";
import styled from "styled-components";

export default function Title({ title }) {
  return (
    <TitleWrapper className="row">
      <div className="col">
        <h2 className="text-title">{title}</h2>
        <div className="title-underline" />
      </div>
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 2rem;
  width: 90%;
  position: sticky;
  .title-underline {
    height: 0.25rem;
    width: 7rem;
    color: blue;
    margin: 0 auto;
    // padding: 2rem;
  }
`;
