import React, { useState } from "react";

function UpdateMember( ) {
  return (
    <div>
      {" "}
      <div>
        <section
          className="w3l-contact-11 py-5"
          id="contact"
        >
          <div className="container py-md-5 py-4">
            <div className="row contact-info-left text-center">
              <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                <h1>Update Member</h1>
              </div>
            </div>
            <div className="form-41-mian mt-5 pt-lg-5 pt-md-4">
              <div className="container">
                <div className="form-inner-cont">
                  <form method="POST" className="signin-form">
                    <div className="row align-form-map">
                      <div className="col-sm-6 form-input">
                        <label for="w3lName">Fullname</label>
                        <input
                          type="text"
                          name="w3lName"
                          id="w3lName"
                          placeholder=""
                          required
                        />
                        <span className="error-msg"></span>
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
                        />
                        <span className="error-msg"></span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Department</label>
                        <input
                          type="text"
                          name="w3lSubect"
                          placeholder=""
                          className="contact-input"
                          required
                        />
                        <span className="error-msg"></span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Semester</label>
                        <input
                          type="text"
                          name="w3lSubect"
                          placeholder=""
                          className="contact-input"
                          required
                        />
                        <span className="error-msg"></span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Reg no</label>
                        <input
                          type="text"
                          name="w3lSubect"
                          placeholder=""
                          className="contact-input"
                          required
                        />
                        <span className="error-msg"></span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Gender</label>
                        <select className="contact-input" required>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                        <span className="error-msg"></span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Email</label>
                        <input
                          type="email"
                          name="w3lSubect"
                          placeholder=""
                          required
                          className="contact-input"
                        />
                        <span className="error-msg"></span>
                      </div>
                      <div className="col-sm-6 form-input">
                        <label for="w3lSender">Password</label>
                        <input
                          type="password"
                          name="w3lSubect"
                          placeholder=""
                          required
                          className="contact-input"
                        />
                        <span className="error-msg"></span>
                      </div>
                    </div>

                    <div className="submit text-end">
                      <button type="submit" className="btn btn-style">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UpdateMember;
