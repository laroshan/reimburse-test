import React from "react";
import Logo from "../logos/tycheLogo.svg";
import styled from "styled-components";
import InputBox from "../components/LoginPage/InputBox";

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
