import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "./Input";
import { DetailConsumer } from "../../context";

export default function InputBox() {
  return (
    <DetailConsumer>
      {(value) => {
        const { handleLogin, isLogged } = value;
        return (
          <Container>
            <TitleWrapper>
              <h4>Tyche</h4>
              <h3>Welcome To Tyche</h3>
            </TitleWrapper>
            <Form onSubmit={console.log(isLogged)}>
              <Input placeholder="User Name" />
              <Input type="password" placeholder="Password" />
              <Link to="/forms">
                <button type="submit" onClick={handleLogin}>
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
    background-color: #a2a2a3;
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
    color: #dd5c5e;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
`;

const Container = styled.div`
  min-width: 400px;
  /* backdrop-filter: blur(35px); */
  background-color: transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  Form {
    padding: 0.5rem;
    @media (max-width: 1000px) {
      padding: 0;
    }
  }
  @media (max-width: 1000px) {
    min-width: 200px;
  }
`;
