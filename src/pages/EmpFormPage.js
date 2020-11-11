import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  FaNotesMedical,
  FaReceipt,
  FaArrowAltCircleRight,
} from "react-icons/fa";

export default function EmpFormPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <CardWrapper>
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-6 col-lg-6 ">
              <Link to="/medicalForm" className="card-link">
                <div className="card">
                  <div className="img-container">
                    <FaNotesMedical className="card-img-top p-5" />
                  </div>
                  <div className="card-body">
                    <p className="form-title">Medical Form</p>
                    <FaArrowAltCircleRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-6 col-sm-6 col-lg-6">
              <Link to="/expenseForm" className="card-link">
                <div className="card">
                  <div className="img-container">
                    <FaReceipt className="card-img-top p-5" />
                  </div>
                  <div className="card-body">
                    <p>Expense Form</p>
                    <FaArrowAltCircleRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  //left: 50rem;
  align-items: center;
  padding-top: 7rem;
  padding-bottom: 3rem;
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in;
    height: 100%;
    left: 6rem;
    @media (max-width: 1000px) {
      left: 0rem;
    }
  }

  .card:hover {
    transition: all 0.3s ease-in;
    cursor: pointer;
  }

  .card-img-top {
    transition: all 0.3s ease-in;
    height: 250px;
    @media (max-width: 1000px) {
      height: 200px;
      left: 0rem;
    }
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .card-body {
    align-items: center;
    text-align: center;
    font-size: 40px;
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
  .card-link:hover {
    text-decoration: none;
  }
  @media (max-width: 900px) {
    padding-top: 8rem;
  }
`;
