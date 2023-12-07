import React, { useState, useEffect } from "react";
import ComFooter from "../Common/ComFooter";
import ActivityHeader from "./ActivityHeader";
import outOfStock from "../../assets/images/outofstock.png";
import read from "../../assets/images/read.png";
import { Link } from "react-router-dom";

function ViewBooks() {

  const [book, setBook] = useState([]);
  const [bookcopy, setBookcopy] = useState([]);

  const [response, setResponse] = useState(false);

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
        setResponse(true);
      }
    });
  };

  const BookBuyHandler = (b_id, name) => {
    // Create a new Date object for the current date
    var currentDate = new Date();

    // Get the number of milliseconds since January 1, 1970 for the current date
    var currentTime = currentDate.getTime();

    // Add 7 days (in milliseconds) to the current time
    var newTime = currentTime + 7 * 24 * 60 * 60 * 1000;

    // Create a new Date object with the new time value
    var PlusDate = new Date(newTime);

    // The PlusDate object now represents the date 7 days from now
    console.log(currentDate);
    console.log(PlusDate);

    const ID = localStorage.getItem("userID");
    console.log("Session Data : " + ID);

    fetch("http://20.126.129.72:8080/api/v1/bookings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        b_id: b_id,
        m_id: ID,
        name: name,
        currentDate: currentDate,
        PlusDate: PlusDate,
        status: "collected",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.error === false) {
          console.log(" Updated");
          setResponse(true);
          alert("Booking  Updated successfully!");
        }
      });
    setTimeout(() => {
      setResponse(false);
    }, 1000);
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
                        <Link className="title-head">{data.name}</Link>
                      </h4>
                      <h5>
                        {" "}
                        Stock : <span className="">{data.stock}</span>
                      </h5>
                      <h5> Author : {data.author}</h5>
                      <h5>Genres : {data.genres}</h5>
                      <h5>Language : {data.language}</h5>
                      <br />
                      <p>{data.description}</p>
                      <br />
                      <center>
                        {" "}
                        {data.stock == 0 ? (
                          <>
                            <img className="outofstock" src={outOfStock}></img>
                            <br></br>
                            <p className="outofstock-text">Not Available </p>
                          </>
                        ) : (
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              BookBuyHandler(data.b_id, data.name);
                            }}
                          >
                            {" "}
                            Buy{" "}
                          </button>
                        )}
                      </center>
                    </div>
                    <br /> <br /> <br /> <br /> <br />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <ComFooter />
      </>
    </div>
  );
}

export default ViewBooks;
