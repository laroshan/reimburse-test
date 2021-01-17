import React from "react";
import styled from "styled-components";
import Profile from "../../images/Profile.jpg";

export default function EmployeeCard() {
  return (
    <>
      <CardWrapper>
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={Profile} alt="" />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>Jhon David</h5>
                  <h6>Web Developer and Designer</h6>

                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <div className="nav-link active" id="home-tab">
                        About
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Projects</p>
                  <a href="/a">Browser Sessions</a>
                  <br />
                  <a href="a">Reimburser</a>
                  <br />

                  <p>SKILLS</p>
                  <a href="a">Web Designer</a>
                  <br />
                  <a href="a">Web Developer</a>
                  <br />

                  <br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>JD2346</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>Jhon David</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>jhondavid@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>077 456 7890</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>Web Developer and Designer</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label>
                        <br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  padding-left: 4.5rem;
  img {
    width: 100px;
    height: 100px;
  }
  body {
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  }
  .emp-profile {
    padding: 3%;

    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
  }
  .profile-img {
    text-align: center;
  }
  .profile-img img {
    width: 70%;
    height: 100%;
  }
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  .profile-head h5 {
    color: #333;
  }
  .profile-head h6 {
    color: #0062cc;
  }
  .profile-edit-btn {
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
  }
  .proile-rating {
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
  }
  .proile-rating span {
    color: #495057;
    font-size: 15px;
    font-weight: 600;
  }
  .profile-head .nav-tabs {
    margin-bottom: 5%;
  }
  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 2px solid #0062cc;
  }
  .profile-work {
    padding: 14%;
    margin-top: -15%;
  }
  .profile-work p {
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
  }
  .profile-work a {
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
  }
  .profile-work ul {
    list-style: none;
  }
  .profile-tab label {
    font-weight: 600;
  }
  .profile-tab p {
    font-weight: 600;
    color: #0062cc;
  }
`;
