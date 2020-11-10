import React from "react";
import NavBar from "../components/Navbar";
import styled from "styled-components";
import SideBar from "../components/Sidebar";
import Expense from "../components/PersonalReportPage/Expense";

export default function EmpReport() {
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="container">
        <Title>Expense Reimburse</Title>
        <Expense />
        <Title>Medical Reimburse</Title>
        <Expense />
      </div>
    </>
  );
}

const Title = styled.h1`
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;
