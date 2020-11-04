import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaNotesMedical,
  FaReceipt,
  FaArrowAltCircleRight,
} from "react-icons/fa";

export default function EmpFormPage() {
  return (
    <>
      <CardWrapper>
        <div className="container">
          <div className="row">
            <div className="col-5 col-xcol-sm-5 col-lg-6 ">
              <Link to="/medicalForm" className="card-link">
                <div className="card">
                  <div className="img-container">
                    <FaNotesMedical
                      className="card-img-top p-5"
                      style={{ height: "250px" }}
                    />
                  </div>
                  <div className="card-body">
                    <p className="form-title">Medical Form</p>
                    <FaArrowAltCircleRight />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-5 col-sm-5 col -lg-6">
              <Link to="/expenseForm" className="card-link">
                <div className="card">
                  <div className="img-container">
                    <FaReceipt
                      className="card-img-top p-5"
                      style={{ height: "250px" }}
                    />
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
  /* background-image: url("./images/backgrund.png");
  position: fixed;
  background-position: center;
  background-size: cover;
  min-width: 100%;
  min-height: 100%; */

  left: 100px;
  align-items: center;
  padding-top: 10rem;
  .card {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in;
    height: 100%;
  
  }

  .card:hover {
    transition: all 0.3s ease-in;
    cursor: pointer;
  }

  .card-img-top {
    transition: all 0.3s ease-in;
  }
  .card:hover .card-img-top {
    transform: scale(1.15);
    opacity: 0.2;
  }
  .card-body {
    align-items: center;
    text-align: center;
    font-size: 40px;
    @media (max-width: 876px) {
      font-size: 20px;
  }
  ]
  .card-link:hover {
    text-decoration: none;
  }
  
`;
