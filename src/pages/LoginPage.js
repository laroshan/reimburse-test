import React from "react";
import Logo from "../logos/logo.svg";
import styled from "styled-components";
import InputBox from "../components/LoginPage/InputBox";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <LoginWrap>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="col-lg-1">
            <LineWrap>
              <div className="vertical" />
            </LineWrap>
          </div>

          <div className="col-lg-5">
            <InputBox />
          </div>
        </div>
      </div>
      <Footer />
    </LoginWrap>
  );
}

const LineWrap = styled.div`
  height: 100%;
  border-left: 2px solid black;
  position: absolute;
  .container {
    display: flex;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const LoginWrap = styled.div`
  .container {
    padding: 5rem;
  }
  .logo {
    @media (max-width: 990px) {
      display: none;
    }
  }
`;
