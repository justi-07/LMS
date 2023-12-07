import React from "react";
import banner1 from "../assets/images/banner1.png";

function Popular() {
  return (
    <div>
      <section className="w3l-bottom-grids-6 pb-5">
        <div className="container pb-md-5 pb-4">
          <h3 className="title-style text-center mb-md-5 mb-4">
            Our <span>Popular</span> Books
          </h3>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 grids-feature">
              <div className="area-box">
                <img className="img-fluid" src={banner1} alt=" " />
                <h4>
                  <a href="menu.html" className="title-head">
                    Wings of Fire
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-sm-5 mt-4">
              <div className="area-box active">
                <img className="img-fluid" src={banner1} alt=" " />
                <h4>
                  <a href="menu.html" className="title-head">
                    The Great Indian Novel
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-sm-5 mt-4">
              <div className="area-box">
                <img className="img-fluid" src={banner1} alt=" " />
                <h4>
                  <a href="menu.html" className="title-head">
                    The Guide
                  </a>
                </h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Popular;
