import React from "react";
import ExpenseForm from "../components/ExpensePage/ExpenseForm";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function EmpExpensePage() {
  console.log(window.location.pathname);
  return (
    <>
      <NavBar />
      <SideBar />
      <ExpenseForm />
    </>
  );
}
