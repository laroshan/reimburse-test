import React from "react";
import MedicalForm from "../components/MedicalPage/MedicalForm";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function EmpMedicalPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* {dropdown && <Dropdown />} */}
      <MedicalForm />
    </>
  );
}
