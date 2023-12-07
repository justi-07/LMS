import React from "react";
import sign from "../assets/images/sign.png";
import ab2 from "../assets/images/ab2.png";
import ab1 from "../assets/images/ab1.png";

function About() {
  return (
    <div>
      {/* <!-- about section --> */}
      <section className="w3l-aboutblock py-5">
        <div className="container py-md-5 py-4">
          <div className="row">
            <div className="col-lg-6 left-wthree-img position-relative mb-lg-0 mb-5 pb-lg-0 pb-5">
              <img src={ab1} alt="" className="img-fluid radius-image" />
             
            </div>
            <div className="col-lg-6 about-right-faq align-self ps-lg-5 mt-xl-4">
              <h3 className="text-bgs mb-2">Since 2000</h3>
              <h3 className="title-style">
                We Have <span>300+</span> Books
              </h3>
              <p className="ab-text mt-4 pt-lg-2">
                "Orem ipsum viverra feugiat. Pellen tesque libero ut justo,
                ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Non quae, fugiat".
              </p>
              <p className="mt-4">
                Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non quae, fugiat. Lorem ipsum viverra feugiat.
                Pellen tesque libero ut justo, ultrices in ligula.
              </p>
              <img
                className="img-fluid mt-md-5 mt-4 img-dark-color"
                src={sign}
                alt=" "
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- //about section --> */}
    </div>
  );
}

export default About;
