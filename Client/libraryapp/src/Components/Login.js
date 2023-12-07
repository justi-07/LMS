import React, { useState } from "react";
import Header from "./Header";
import "../App.css";
import ComFooter from "./Common/ComFooter";
import { useNavigate } from "react-router-dom";

const inputData = {
  username: "",
  password: "",
};

const errorMsg = {
  emailError: "",
  passError: "",
};

function Login() {
  const [input, setInput] = useState(inputData);
  const [error, setError] = useState(errorMsg);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("input" + inputData);
    let regId, u_type;

    if (input.username.length <= 0) {
      setError({ emailError: "Username is required" });
      return;
    }
    if (input.password.length <= 0) {
      setError({ passError: "Password is required" });
      return;
    }

    const fetchData = async () => {
      const response = await fetch(
        "http://20.126.129.72:8080/api/v1/login/" +
          input.username +
          "/" +
          input.password
      );
      const data = await response.json();
      console.log(data);
      data.map((data) => {
        regId = data.reg_id;
        u_type = data.type;
        localStorage.setItem("userID", regId);
        localStorage.setItem("userType", u_type);
      });

      if (input.username === "" || input.password === "") {
        return;
      } else if (u_type === "ADMIN") {
        alert("Login Success");
        navigate("/Admin/adminHome");
      } else if (u_type === "USER") {
        alert("Login Success");
        navigate("/Member/memberHome");
      } else {
        alert("Login Failed");
      }

      return console.log(regId + "#" + u_type);
    };
    fetchData();
  };

  return (
    <>
      <div>
        <Header />
        <section className="w3l-contact-11 py-5" id="contact">
          <div className="container py-md-5 py-4">
            <div className="row contact-info-left text-center">
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <h1>Login</h1>
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
                        <label for="w3lName">Username</label>
                        <input
                          type="text"
                          name="w3lName"
                          id="w3lName"
                          placeholder=""
                          value={input.username}
                          onChange={(e) => {
                            setInput((prevState) => {
                              console.log(prevState);
                              return { ...prevState, username: e.target.value };
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
                          value={input.password}
                          className="contact-input"
                          onChange={(e) => {
                            setInput((prevState) => {
                              return { ...prevState, password: e.target.value };
                            });
                          }}
                        />
                        <span className="error-msg">{error.passError}</span>
                      </div>
                    </div>

                    <div className="submit text-end">
                      <button type="submit" className="btn btn-style">
                        Login
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

export default Login;
