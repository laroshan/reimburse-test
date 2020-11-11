import React from "react";
import styled from "styled-components";
import { DetailConsumer } from "../context";

export default function Footer() {
  return (
    <DetailConsumer>
      {(value) => {
        const { socialLinks } = value;
        return (
          <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                  <p className="text-capitalize">
                    copyright &copy; Creative softwares 2020. all rights
                    reserved
                    {""}
                  </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {socialLinks.map((item) => {
                    return (
                      <a href={item.url} key={item.id}>
                        {item.icon}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </FooterWrapper>
        );
      }}
    </DetailConsumer>
  );
}

const FooterWrapper = styled.footer`
  background: #ea262a;
  color: white;
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  .icon {
    font-size: 1.5rem;
    color: white;
  }
  .icon:hover {
    color: blue;
    cursor: pointer;
  }
`;
