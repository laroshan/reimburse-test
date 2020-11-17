import React from "react";
import { DetailConsumer } from "../../context";
import styled from "styled-components";

export default function AllReport() {
  return (
    <>
      <AllReportWrapper>
        <div className="container">
          <table className="table table-hover table-responsive">
            <thead className="">
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
          </table>
          <div className="footer p-0">
            <nav aria-label="...">
              <ul className="pagination ">
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="a">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <span className="page-link">
                    2<span className="sr-only">(current)</span>
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="a">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="a">
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
  margin-left: 390px;

  /* justify-content: center; */
  text-align: center;
  /* display: inline-block;
  vertical-align: middle; */
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
`;
