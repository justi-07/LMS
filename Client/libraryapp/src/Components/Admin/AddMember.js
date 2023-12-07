import React, { useState } from "react";
import ActivityHeader from "./ActivityHeader";
import ComFooter from "../../Components/Common/ComFooter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MemberData = {
  fullname: "",
  phone: "",
  department: "",
  semester: "",
  regno: "",
  gender: "male",
  email: "",
  password: "",
};

const errorMsg = {
  fullnameError: "",
  phonError: "",
  departmentError: "",
  semesterError: "",
  regnoError: "",
  genderError: "",
  emailError: "",
  passwordError: "",
};
function AddMember() {
  const [input, setInput] = useState(MemberData);
  const [error, setError] = useState(errorMsg);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("input" + MemberData);

    if (input.fullname.length <= 0) {
      setError({ fullnameError: "fullname is required" });
      return;
    } else if (input.phone.length <= 0) {
      setError({ phonError: "phone is required" });
    } else if (input.department.length <= 0) {
      setError({ departmentError: "department is required" });
    } else if (input.semester.length <= 0) {
      setError({ semesterError: "semester is required" });
    } else if (input.regno.length <= 0) {
      setError({ regnoError: "regno is required" });
    } else if (input.gender.length <= 0) {
      setError({ genderError: "gender is required" });
    } else if (input.email.length <= 0) {
      setError({ emailError: "email is required" });
    } else if (input.password.length <= 0) {
      setError({ passwordError: "password is required" });
    } else {
      axios
        .post("http://20.126.129.72:8080/api/v1/member", input)
        .then((response) => {
          console.log(response);
          console.log("Response ", response.data.Qstatus);
          let Warning = response.data.Qstatus;
          let MemberId =response.data.m_id;
          console.log(MemberId);
          alert("sucess");
          if (Warning == "success") {
            console.log("login query");
          }
          setInput(MemberData);
          navigate("/Admin/addMember", { replace: true });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div>
        <ActivityHeader />
        <section className="w3l-contact-11 py-5" id="contact">
          <div className="container py-md-5 py-4">
            <div className="row contact-info-left text-center">
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <h1>Add Member</h1>
              </div>
            </div>
            <div className="form-41-mian mt-5 pt-lg-5 pt-md-4">
              <div className="container">
                <div className="form-inner-cont">
                  <form
                    method="POST"
                    className="signin-form"
                    onSubmit={formSubmitHandler}
                  >
                    <div className="row align-form-map">
                      <div className="col-sm-6 form-input">
                        <label for="w3lName">Fullname</label>
                        <input
                          type="text"
                          name="w3lName"
                          id="w3lName"
                          placeholder=""
                          required
                          value={input.fullname}
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return { ...prevState, fullname: e.target.value };
                            });
                          }}
                        />
                        <span className="error-msg">{error.fullnameError}</span>
                      </div>

                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Phone</label>
                        <input
                          type="text"
                          name="w3lSubect"
                          placeholder=""
                          pattern="[789][0-9]{9}"
                          maxLength={10}
                          className="contact-input"
                          required
                          value={input.phone}
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return { ...prevState, phone: e.target.value };
                            });
                          }}
                        />
                        <span className="error-msg">{error.phonError}</span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Department</label>
                        <input
                          type="text"
                          name="w3lSubect"
                          placeholder=""
                          className="contact-input"
                          required
                          value={input.department}
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return {
                                ...prevState,
                                department: e.target.value,
                              };
                            });
                          }}
                        />
                        <span className="error-msg">
                          {error.departmentError}
                        </span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Semester</label>
                        <input
                          type="text"
                          name="w3lSubect"
                          placeholder=""
                          className="contact-input"
                          required
                          value={input.semester}
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return { ...prevState, semester: e.target.value };
                            });
                          }}
                        />
                        <span className="error-msg">{error.semesterError}</span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Reg no</label>
                        <input
                          type="text"
                          name="w3lSubect"
                          placeholder=""
                          className="contact-input"
                          required
                          value={input.regno}
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return { ...prevState, regno: e.target.value };
                            });
                          }}
                        />
                        <span className="error-msg">{error.regnoError}</span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Gender</label>
                        <select
                          className="contact-input"
                          value={input.gender}
                          required
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return { ...prevState, gender: e.target.value };
                            });
                          }}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        <span className="error-msg">{error.genderError}</span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Email</label>
                        <input
                          type="email"
                          name="w3lSubect"
                          placeholder=""
                          required
                          className="contact-input"
                          value={input.email}
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return { ...prevState, email: e.target.value };
                            });
                          }}
                        />
                        <span className="error-msg">{error.emailError}</span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Password</label>
                        <input
                          type="password"
                          name="w3lSubect"
                          placeholder=""
                          required
                          className="contact-input"
                          value={input.password}
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return { ...prevState, password: e.target.value };
                            });
                          }}
                        />
                        <span className="error-msg">{error.passwordError}</span>
                      </div>
                    </div>

                    <div className="submit text-end">
                      <button type="submit" className="btn btn-style">
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ComFooter />
    </>
  );
}

export default AddMember;
