import React, { useState, useEffect } from "react";
import ComFooter from "../Common/ComFooter";
import ActivityHeader from "./ActivityHeader";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import read from "../../assets/images/read.png";
import { Link } from "react-router-dom";
import outOfStock from "../../assets/images/outofstock.png";

const MemberData = {
  name: "",
  author: "",
  genres: "Fiction",
  stock: "",
  language: "",
  description: "",
};

function ViewBook() {

  const [book, setBook] = useState([]);
  const [bookcopy, setBookcopy] = useState([]);

  const [response, setResponse] = useState(false);
  const [input, setInput] = useState(MemberData);

  const [show, setShow] = useState(false);

  const searchDataHandler = (e) => {
    console.log(e.target.value);
    let searchInput = e.target.value;
    console.log(searchInput.length);
    book.filter((data) => {
      console.log(data.name);

      if (searchInput.length > 0) {
        const filteredData = book.filter((item) => {
          return Object.values(item)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        });
        setBookcopy(filteredData);
      } else {
        console.log("ELSE PORTION");
        setBookcopy(book);
        window.location.reload();
        setResponse(true);
      }
    });
  };

  const handleClose = () => {
    setShow(false);
    console.log("input shown below");
    console.log(input);
    console.log("btn clicked.......//");
    axios
      .put("http://20.126.129.72:8080/api/v1/book/update", input)
      .then((response) => {
        console.log("response_______------------------------------------");
        console.log(response);
        alert(response.data.message);
        setResponse(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleShow = (
    b_id,
    name,
    author,
    genres,
    stock,
    language,
    description
  ) => {
    setShow(true);
    setInput({
      b_id: b_id,
      name: name,
      author: author,
      genres: genres,
      stock: stock,
      language: language,
      description: description,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://20.126.129.72:8080/api/v1/book/viewAllBook"
      );
      const data = await response.json();
      setBook(data);
      setBookcopy(data);
      return console.log(data);
    };
    fetchData();
  }, [response]);

  const DeleteBookHandler = (b_id) => {
    fetch("http://20.126.129.72:8080/api/v1/book/deleteBook", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        b_id: b_id,
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
                Our <span>Books</span>
              </h3>
              <div class="input-group mw-100">
                <input
                  type="search"
                  className="border border-secondary"
                  style={{ width: "25%", padding: "12px", borderRadius: "5px" }}
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={searchDataHandler}
                />
              </div>
              <br />
              <br />
              <div className="row justify-content-center">
                {bookcopy.map((data) => (
                  <div
                    className="col-lg-4 col-md-6 grids-feature"
                    key={data.b_id}
                  >
                    <div className="area-box" key={data.b_id}>
                      <img className="img-fluid" src={read} alt=" " />
                      <h4>
                        <Link className="title-head">
                          {data.name} [🛒 {data.stock} ]
                        </Link>
                      </h4>
                      <h5> Author : {data.author}</h5>
                      <h5>Genres : {data.genres}</h5>
                      <h5>Language : {data.language}</h5>
                      <br />
                      <p>{data.description}</p>
                      <br />
                      {data.stock == 0 ? (
                        <>
                          <img className="outofstock" src={outOfStock}></img>
                          <br></br>
                          <p className="outofstock-text">Out of Stock </p>
                        </>
                      ) : (
                        <p className="outofstock-text"> </p>
                      )}
                      <button
                        className="btn btn-dark"
                        onClick={() =>
                          handleShow(
                            data.b_id,
                            data.name,
                            data.author,
                            data.genres,
                            data.stock,
                            data.language,
                            data.description
                          )
                        }
                      >
                        Update
                      </button>{" "}
                      &nbsp; &nbsp; &nbsp;{" "}
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => DeleteBookHandler(data.b_id)}
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
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Bookname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.name}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, name: e.target.value };
                    });
                  }}
                />
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.author}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, author: e.target.value };
                    });
                  }}
                />
                <Form.Label>Genres</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.genres}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, genres: e.target.value };
                    });
                  }}
                />
                <Form.Label>Stock</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.stock}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, stock: e.target.value };
                    });
                  }}
                />
                <Form.Label>Language</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={input.language}
                  autoFocus
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, language: e.target.value };
                    });
                  }}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={input.description}
                  onChange={(e) => {
                    setInput((prevState) => {
                      return { ...prevState, description: e.target.value };
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

export default ViewBook;
