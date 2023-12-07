import React, { useState, useEffect } from "react";
import ComFooter from "../Common/ComFooter";
import ActivityHeader from "./ActivityHeader";
import { useNavigate } from "react-router-dom";
import read from "../../assets/images/read.png";
import { Link } from "react-router-dom";

function ViewBookingHistory() {
 
  const [book, setBook] = useState([]);

  const [response, setResponse] = useState(false);

  const ID = localStorage.getItem("userID");
  console.log("Session Data : " + ID);

  useEffect(() => {
    const ViewHistoryHandler = () => {
      fetch("http://20.126.129.72:8080/api/v1/bookings/viewMemberBookingHistory", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
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
    ViewHistoryHandler();
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
                <span> Booking  History</span>
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
                      <h5> Author : {data.author}</h5>
                      <h5>Genres : {data.genres}</h5>
                      <h5>Language : {data.language}</h5>
                      <br />
                      <p>{data.description}</p>
                      <hr></hr>
                      <h4>
                        {" "}
                        <Link className="title-head"> 👨🏻‍🦰 {data.fullname}</Link>
                        <h5> 📞 : {data.phone}</h5>
                        <h5>
                          Department : {data.department} [ {data.semester} ]
                        </h5>
                        <br></br>
                        <h5></h5>
                      </h4>
                      <p>
                        Date :{" "}
                        {new Date(data.cdate).toISOString().split("T")[0]}
                      </p>
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

export default ViewBookingHistory;
