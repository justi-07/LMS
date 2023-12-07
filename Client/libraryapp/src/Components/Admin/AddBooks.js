import React, { useState } from "react";
import ActivityHeader from "./ActivityHeader";
import ComFooter from "../../Components/Common/ComFooter";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookData = {
  name: "",
  author: "",
  stock: "",
  genres: "Fiction",
  language: "",
  description: "",
};
const errorMsg = {
  nameError: "",
  authorError: "",
  stockError: "",
  genresError: "",
  languageError: "",
  descriptionError: "",
};

function AddBooks() {
  const [input, setInput] = useState(BookData);
  const [error, setError] = useState(errorMsg);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(input);

    if (input.name.length <= 0) {
      setError({ nameError: "name is required" });
      return;
    } else if (input.author.length <= 0) {
      setError({ authorError: "Author name is required" });
      return;
    } else if (input.genres.length <= 0) {
      setError({ genresError: "Genres is required" });
      return;
    } else if (input.language.length <= 0) {
      setError({ languageError: "Language is required" });
      return;
    } else if (input.description.length <= 0) {
      setError({ descriptionError: "Description is required" });
      return;
    } else {
      axios
        .post("http://20.126.129.72:8080/api/v1/book", input)
        .then((response) => {
          console.log(response);
          
          setInput(BookData);
          alert(response.data.data)
          navigate("/Admin/addBook", { replace: true });
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <>
        <div>
          <ActivityHeader />
          <section className="w3l-contact-11 py-5" id="contact">
            <div className="container py-md-5 py-4">
              <div className="row contact-info-left text-center">
                <div className="col-lg-3 col-sm-6 mt-lg-0 mt-4">
                  <h1>Books</h1>
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
                          <label for="w3lName">Name</label>
                          <input
                            type="text"
                            name="w3lName"
                            id="w3lName"
                            placeholder=""
                            value={input.name}
                            onChange={(e) => {
                              setInput((prevState) => {
                                console.log(prevState);
                                return { ...prevState, name: e.target.value };
                              });
                            }}
                          />
                          <span className="error-msg">{error.nameError}</span>
                        </div>

                        <div className="col-sm-6 form-input">
                          <label for="w3lSender">Author</label>
                          <input
                            type="text"
                            name="w3lSubect"
                            placeholder=""
                            value={input.author}
                            onChange={(e) => {
                              setInput((prevState) => {
                                console.log(prevState);
                                return { ...prevState, author: e.target.value };
                              });
                            }}
                          />
                          <span className="error-msg">{error.authorError}</span>
                        </div>
                        <div className="col-sm-6 form-input">
                          <label for="w3lName"> Genres</label>
                          <select
                            className="contact-input"
                            required
                            value={input.genres}
                            onChange={(e) => {
                              setInput((prevState) => {
                                console.log(prevState);
                                return { ...prevState, genres: e.target.value };
                              });
                            }}
                          >
                            <option value="Fiction">Fiction</option>
                            <option value="Novel">Novel</option>
                            <option value="Narrative">Narrative</option>
                            <option value="Science fiction">
                              Science fiction
                            </option>
                            <option value="Non-fiction">Non-fiction</option>
                            <option value="Horror fiction">
                              Horror fiction
                            </option>
                            <option value="Memoir">Memoir</option>
                            <option value="Short Story">Short Story</option>
                            <option value="Politics">Politics</option>
                            <option value="romance">romance</option>
                            <option value="Social science">
                              Social science
                            </option>
                            <option value="Novel">Novel</option>
                          </select>
                          <span className="error-msg">{error.genresError}</span>
                        </div>
                        <div className="col-sm-6 form-input">
                          <label for="w3lName">Stock</label>
                          <input
                            type="number"
                            name="w3lName"
                            id="w3lName"
                            placeholder=""
                            value={input.stock}
                            onChange={(e) => {
                              setInput((prevState) => {
                                console.log(prevState);
                                return { ...prevState, stock: e.target.value };
                              });
                            }}
                          />
                          <span className="error-msg">{error.stock}</span>
                        </div>
                        <div className="col-sm-6 form-input">
                          <label for="w3lName">Language</label>
                          <input
                            type="text"
                            name="w3lName"
                            id="w3lName"
                            placeholder=""
                            value={input.language}
                            onChange={(e) => {
                              setInput((prevState) => {
                                console.log(prevState);
                                return {
                                  ...prevState,
                                  language: e.target.value,
                                };
                              });
                            }}
                          />
                          <span className="error-msg">
                            {error.languageError}
                          </span>
                        </div>
                        <div className="col-sm-6 form-input">
                          <label for="w3lName">Description</label>
                          <textarea
                            rows={2}
                            cols={6}
                            value={input.description}
                            onChange={(e) => {
                              console.log("description.....");
                              setInput((prevState) => {
                                return {
                                  ...prevState,
                                  description: e.target.value,
                                };
                              });
                            }}
                          />
                          <span className="error-msg">
                            {error.descriptionError}
                          </span>
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
    </div>
  );
}

export default AddBooks;
