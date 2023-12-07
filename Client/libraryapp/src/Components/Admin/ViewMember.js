import React, { useState, useEffect } from "react";
import ComFooter from "../Common/ComFooter";
import ActivityHeader from "./ActivityHeader";

import male from "../../assets/images/male.png";
import female from "../../assets/images/female.png";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import axios from "axios";
// import Modal from "react-bootstrap/Modal";
// import Button from 'react-bootstrap/Button';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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

function ViewMember() {
  const [member, setMember] = useState([]);
  const [response, setResponse] = useState(false);
  const [input, setInput] = useState(MemberData);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);

    console.log(input);
    axios
      .put("http://20.126.129.72:8080/api/v1/member/updateMember", input)
      .then((response) => {
        console.log(response);
        setResponse(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleShow = (
    m_id,
    fullname,
    regno,
    phone,
    email,
    semester,
    department,
    password,
    gender
  ) => {
    setShow(true);
    setInput({
      m_id: m_id,
      fullname: fullname,
      regno: regno,
      phone: phone,
      email: email,
      semester: semester,
      department: department,
      gender: gender,
      password: password,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://20.126.129.72:8080/api/v1/member/viewAllMembers"
      );
      const data = await response.json();
      setMember(data);
      return console.log(data);
    };
    fetchData();
  }, [response]);

  const DeleteMemberHandler = (m_id) => {
    fetch("http://20.126.129.72:8080/api/v1/login/member/" + m_id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        m_id: m_id,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.error === false) {
          console.log(" Updated");
          setResponse(true);
          alert("Deleted");
        }
      });
  };

  return (
    <div>
      <>
        <ActivityHeader />
        <div>
          {" "}
          <section
            className="w3l-bottom-grids-6 pb-5"
            style={{
              backgroundColor: "white",
              boxShadow: "50px 2px 50px #e5dad4",
            }}
          >
            <div className="container pb-md-5 pb-4">
              <h3 className="title-style text-center mb-md-5 mb-4">
                Our <span>Members</span>
              </h3>
              <div className="row justify-content-center">
                {member.map((data) => (
                  <div className="col-lg-4 col-md-6 grids-feature">
                    <div className="area-box" key={data.m_id}>
                      {data.gender == "male" ? (
                        <img className="img-fluid" src={male} alt=" " />
                      ) : (
                        <img className="img-fluid" src={female} alt=" " />
                      )}
                      <h4>
                        <Link className="title-head">
                          {data.fullname} [ {data.regno} ]
                        </Link>
                      </h4>
                      <h5>📞 {data.phone}</h5>
                      <h5>✉️{data.email}</h5>
                      <h5>Semester :{data.semester}</h5>
                      <h5>Department :{data.department}</h5>
                      <br />
                      <button
                        className="btn btn-dark"
                        onClick={() =>
                          handleShow(
                            data.m_id,
                            data.fullname,
                            data.regno,
                            data.phone,
                            data.email,
                            data.semester,
                            data.department,
                            data.password,
                            data.gender
                          )
                        }
                      >
                        Update
                      </button>{" "}
                      &nbsp; &nbsp; &nbsp;{" "}
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => DeleteMemberHandler(data.m_id)}
                      >
                        Delete
                      </button>
                    </div>
                    <br /> <br /> <br /> <br /> <br />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Modal PopUp Starts */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Member</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Fullname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.fullname}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, fullname: e.target.value };
                    });
                  }}
                />
                <Form.Label>Regno</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.regno}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, regno: e.target.value };
                    });
                  }}
                />
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.phone}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, phone: e.target.value };
                    });
                  }}
                />
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.email}
                  autoFocus
                  readOnly
                />
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.semester}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, semester: e.target.value };
                    });
                  }}
                />
                <Form.Label>Department</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.department}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, department: e.target.value };
                    });
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal PopUp Ends  */}
        <ComFooter />
      </>
    </div>
  );
}

export default ViewMember;
