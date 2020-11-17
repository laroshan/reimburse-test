import React from "react";
import { DetailConsumer } from "../../context";
import styled from "styled-components";

export default function AllReport() {
  return (
    <>
      <AllReportWrapper>
        <div class="container ">
          <table class="table table-hover table-responsive">
            <thead class="">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Report Title</th>
                <th scope="col">Date</th>
                <th scope="col">Techlead</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <DetailConsumer>
                {(value) => {
                  const { expenses } = value;
                  return (
                    <>
                      {expenses.map((expense) => (
                        <tr>
                          <th scope="row">1</th>
                          <td>{expense.report}</td>
                          <td>{expense.date}</td>
                          <td>{expense.techlead}</td>
                          <td>{expense.status.message}</td>
                        </tr>
                      ))}
                    </>
                  );
                }}
              </DetailConsumer>
            </tbody>
          </table>{" "}
          <div class="footer p-0">
            <nav aria-label="...">
              <ul class="pagination ">
                <li class="page-item disabled">
                  <span class="page-link">Previous</span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="a">
                    1
                  </a>
                </li>
                <li class="page-item active">
                  <span class="page-link">
                    2<span class="sr-only">(current)</span>
                  </span>
                </li>
                <li class="page-item">
                  <a class="page-link" href="a">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="a">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </AllReportWrapper>
    </>
  );
}
const AllReportWrapper = styled.div`
  /* padding-left: 10rem; */
  margin-left: 400px;
  align-items: center;
  justify-content: center;
`;
