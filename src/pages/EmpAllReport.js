import React from "react";
import ReportFilter from "../components/PersonalReportPage/ReportFilter";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function EmpAllReport() {
  return (
    <>
      <NavBar />
      <SideBar />
      <ReportFilter />
    </>
  );
}
