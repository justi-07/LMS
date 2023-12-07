import React, { useState, useEffect } from "react";
import ComFooter from "../Common/ComFooter";
import ActivityHeader from "./ActivityHeader";
import { useNavigate } from "react-router-dom";
import outOfStock from "../../assets/images/outofstock.png";
import read from "../../assets/images/read.png";
import { Link } from "react-router-dom";

function ViewBookings() {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [bookcopy, setBookcopy] = useState([]);

  const [response, setResponse] = useState(false);
  const [responseone, setResponseone] = useState(false);

  const ID = localStorage.getItem("userID");
  console.log("Session Data : " + ID);

  const ReturnBookHandler = (booking_id, b_id) => {
    fetch("http://20.126.129.72:8080/api/v1/bookings/returnBook", {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        m_id: ID,
        booking_id: booking_id,
        b_id: b_id,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error === false) {
          console.log(" Updated");
          setResponse(true);
          alert(json.message); // return status code
        }
      });

    setTimeout(() => {
      setResponse(false);
    }, 1000);
  };

  useEffect(() => {
    const ViewBookingHandler = () => {
      fetch("http://20.126.129.72:8080/api/v1/bookings/viewMyBookings", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          m_id: ID,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.table(json);
          console.table(response);
          setBook(json);
          if (json.error === false) {
            console.log(" Updated");
            setResponse(true);
          }
        });
    };
    ViewBookingHandler();
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
                <span>Bookings</span>
              </h3>

              <br />
              <br />
              <div className="row justify-content-center">
                {book.map((data) => (
                  <div className="col-lg-4 col-md-6 grids-feature">
                    <div className="area-box" key={data.b_id}>
                      <img className="img-fluid" src={read} alt=" " />

                      <h4>
                        <Link className="title-head">{data.name}</Link>
                      </h4>
                      <h5> </h5>
                      <h5> Author : {data.author}</h5>
                      <h5>Genres : {data.genres}</h5>
                      <h5>Language : {data.language}</h5>
                      <br />
                      <p>{data.description}</p>
                      <br></br>
                      <p>
                        Date :{new Date(data.cdate).toISOString().split("T")[0]}
                      </p>
                      <br></br>
                      <p className="btn btn-outline-danger" id="returndate">
                        Return Date :
                        {new Date(data.rdate).toISOString().split("T")[0]}
                      </p>
                      <br />
                      <br />
                      <center>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-success"
                          style={{ float: "right" }}
                          onClick={() =>
                            ReturnBookHandler(data.booking_id, data.b_id)
                          }
                        >
                          Return
                        </button>
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

export default ViewBookings;
