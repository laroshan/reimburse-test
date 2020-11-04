import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./Input";
import { DetailConsumer } from "../../context";

export default function InputBox() {
  return (
    <DetailConsumer>
      {(value) => {
        const { handleNavbar } = value;
        return (
          <Container>
            <TitleWrapper>
              <h4>Tyche</h4>
              <h3>Welcome To Tyche</h3>
            </TitleWrapper>
            <Form>
              <Input placeholder="User Name" />
              <Input type="password" placeholder="Password" />
              <Link to="/forms">
                <button type="submit" onClick={handleNavbar}>
                  Login
                </button>
              </Link>
            </Form>
            <div></div>
          </Container>
        );
      }}
    </DetailConsumer>
  );
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const TitleWrapper = styled.div`
  h4 {
    text-align: center;
    font-size: 80px;
    padding: 2rem;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  Form {
    padding: 0.5rem;
  }
  @media (max-height: 750px) {
    width: 100px;
    position: absolute;
    padding: 2rem 0 0 0;
  }
`;
