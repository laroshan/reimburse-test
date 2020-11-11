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
                <div className="col-md-6">
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

const FooterWrapper = styled.footer``;
