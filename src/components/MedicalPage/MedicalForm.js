import React from "react";
import styled from "styled-components";

export default function MedicalForm() {
  return (
    <MedicalWrapper>
      <div className="container">
        <form>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">Medical Claim</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group ">
                        <label className="required">Report Title</label>
                        <input
                          type="text"
                          name="reporTitle"
                          id="report"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group ">
                        <label className="required">Doctor Name</label>
                        <input
                          type="text"
                          name="doctor"
                          id="doctor"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group ">
                        <label className="required">Date</label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group ">
                        <label className="required">Tech Lead ID</label>
                        <input
                          type="text"
                          name="techid"
                          id="techid"
                          className="form-control"
                          //placeholder="Enter Date"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group ">
                        <label className="required">Description</label>
                        <textarea
                          name="description"
                          id="description"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-group ">
                        <label className="required">Tech Lead ID</label>
                        <input
                          type="text"
                          name="techid"
                          id="techid"
                          className="form-control"
                          //placeholder="Enter Date"
                        />
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group ">
                        <label className="required">Description</label>
                        <textarea
                          name="description"
                          id="description"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="required">Project Name</th>
                        <th className="required">Task</th>
                        <th>Notes</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <TaskList
                          add={this.addNewRow}
                          delete={this.clickOnDelete.bind(this)}
                          taskList={taskList}
                        /> */}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="4">
                          <button
                            ///onClick={this.addNewRow}
                            type="button"
                            className="btn btn-primary text-center"
                          >
                            <i
                              className="fa fa-plus-circle"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="card-footer text-center">
                  {" "}
                  <button type="submit" className="btn btn-primary text-center">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>
      </div>
    </MedicalWrapper>
  );
}

const MedicalWrapper = styled.div`
  position: relative;

  width: 100%;
`;
