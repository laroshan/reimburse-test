import React, { Component } from "react";
import styled from "styled-components";
import TaskList from "./TaskListE";
import { FaPlusCircle } from "react-icons/fa";

export default class ExpenseForm extends Component {
  state = {
    taskList: [
      {
        index: Math.random(),
        projectName: "",
        task: "",
        taskNotes: "",
        taskStatus: "",
      },
    ],
    date: "",
    description: "",
  };

  handleChange = (e) => {
    if (
      ["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)
    ) {
      let taskList = [...this.state.taskList];
      taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  addNewRow = (e) => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          index: Math.random(),
          projectName: "",
          task: "",
          taskNotes: "",
          taskStatus: "",
        },
      ],
    }));
  };

  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
    const taskList1 = [...this.state.taskList];
    taskList1.splice(index, 1);
    this.setState({ taskList: taskList1 });
  };
  handleSubmit = (e) => {
    // e.preventDefault();
    // if(this.state.date==='' || this.state.description==='')
    // {
    //     NotificationManager.warning("Please Fill up Required Field . Please check Task and Date Field");
    //     return false;
    // }
    // for(var i=0;i<this.state.taskList.length;i++)
    // {
    //         if(this.state.taskList[i].projectName==='' || this.state.taskList[i].task==='')
    //         {
    //             NotificationManager.warning("Please Fill up Required Field.Please Check Project name And Task Field");
    //             return false;
    //         }
    // }
    // let data = { formData: this.state, userData: localStorage.getItem('user') }
    // axios.defaults.headers.common["Authorization"] = localStorage.getItem('token');
    // axios.post("http://localhost:9000/api/task", data).then(res => {
    //     if(res.data.success) NotificationManager.success(res.data.msg);
    // }).catch(error => {
    //     if(error.response.status && error.response.status===400)
    //     NotificationManager.error("Bad Request");
    //     else NotificationManager.error("Something Went Wrong");
    //     this.setState({ errors: error })
    // });
    //}
  };
  clickOnDelete = (record) => {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  };
  render() {
    return (
      <MedicalWrapper>
        <div className="container">
          <form>
            <div className="row" style={{ marginTop: 20 }}>
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                <div className="card">
                  <div className="card-header text-center">Expense Claim</div>
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
                          <label className="required">Project</label>
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
                          <label className="form-check-label">
                            Payment Method
                          </label>
                          <div className="form-check">
                            <input
                              type="radio"
                              value="Bank"
                              name="paymentmethod"
                              className="form-check-input"
                            />{" "}
                            Bank <br></br>
                            <input
                              type="radio"
                              value="Cash"
                              name="paymentmethod"
                              className="form-check-input"
                            />{" "}
                            Cash
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-group ">
                          <label className="required">Submission Date</label>

                          <input
                            type="date"
                            name="submissiondate"
                            id="submissiondate"
                            className="form-control"
                            //placeholder="Enter Date"
                          />
                        </div>
                      </div>
                    </div>
                    <table className="table table-responsive">
                      <thead>
                        <tr>
                          <th className="required">Date</th>
                          <th className="required">Description</th>
                          <th>Place</th>
                          <th>Receipt N0.</th>
                          <th>Receipt</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <TaskList
                          add={this.addNewRow}
                          delete={this.clickOnDelete.bind(this)}
                          taskList={this.state.taskList}
                        />
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="4">
                            <button
                              onClick={this.addNewRow}
                              type="button"
                              className="btn btn-primary text-center"
                            >
                              <FaPlusCircle />
                            </button>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="card-footer text-center">
                    {" "}
                    <button
                      type="submit"
                      className="btn btn-primary text-center"
                    >
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
}

const MedicalWrapper = styled.div`
  position: relative;
  padding-bottom: 4rem;
  width: 100%;
`;
