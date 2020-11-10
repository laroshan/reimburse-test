import React from "react";
import styled from "styled-components";

const SortingBar = () => {
  return (
    <Container>
      <Report>Report Title</Report>
      <Date>Date</Date>
      <TechLead>TechLead</TechLead>
      <Amount>Amount</Amount>
      <Status>Status</Status>
    </Container>
  );
};

export default SortingBar;

const Container = styled.div`
  display: flex;
  padding: 0.4rem 1rem;
  background-color: red;
  margin: 2rem 0;
  border-radius: 5px;
  position: relative;
`;

const Text = styled.h1`
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: 500;
  color: black;
`;

const Report = styled(Text)`
  width: 30%;
`;

const Date = styled(Text)`
  width: 15%;
`;

const TechLead = styled(Text)`
  width: 10%;
`;

const Amount = styled(Text)`
  width: 15%;
`;

const Status = styled(Text)``;
