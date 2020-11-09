import React from "react";
import MedicalForm from "../components/MedicalPage/MedicalForm";
//import Title from "../components/Title";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dropdown from "../components/DropDown";

export default function EmpMedicalPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* {dropdown && <Dropdown />} */}
      <Dropdown />
      <MedicalForm />
    </>
  );
}
