import React from "react";
import ReportFilter from "../components/PersonalReportPage/ReportFilter";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import AllReport from "../components/PersonalReportPage/AllReport";
import Title from "../components/Title";

export default function EmpAllReport() {
  return (
    <>
      <NavBar />
      <SideBar />
      <ReportFilter />
      <Title title="All Expenses" />
      <AllReport />
    </>
  );
}
