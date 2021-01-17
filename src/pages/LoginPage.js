import React from "react";
import Logo from "../logos/logo.svg";
import styled from "styled-components";
import InputBox from "../components/LoginPage/InputBox";
import BcgImg from "../images/back.svg";

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
  background-image: url(${BcgImg});
  min-height: 95vh;
  min-width: 100vw;
  background-position-y: 2rem;
  color: #f5f5f5;
  background-position: center;
  background-size: cover;
  /* position: absolute; */
  background-position-y: 10px;

  .container {
    padding: 5rem;
  }
  .logo {
    @media (max-width: 990px) {
      display: none;
    }
  }
`;
