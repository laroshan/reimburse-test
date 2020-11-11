import React from "react";
import { DetailConsumer } from "../../context";
import styled from "styled-components";
export default function Expense() {
  return (
    <ExpenseWrap>
      <div className="container table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Report Title</th>
              <th scope="col">Date</th>
              <th scope="col">Techlead</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
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
                        <td>
                          {(() => {
                            switch (expense.status.level) {
                              case 1:
                                return <StatusIndicator color="#F17E7E" />;
                              case 2:
                                return <StatusIndicator color="#FFD056" />;
                              case 3:
                                return <StatusIndicator color="#75C282" />;
                              default:
                                return <StatusIndicator color="#AAA5A5" />;
                            }
                          })()}
                        </td>
                      </tr>
                    ))}
                  </>
                );
              }}
            </DetailConsumer>
          </tbody>
        </table>
      </div>
    </ExpenseWrap>
  );
}
const StatusIndicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  /* position: absolute; */
`;

const ExpenseWrap = styled.div`
  thead {
    /* position: absolute; */
  }
`;
