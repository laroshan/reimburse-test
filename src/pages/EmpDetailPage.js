import React from "react";
import EmployeeCard from "../components/EmployeeDetail.js/EmployeeCard";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function EmpDetailPage() {
  return (
    <div>
      <NavBar />
      <SideBar />
      <EmployeeCard />
    </div>
  );
}
