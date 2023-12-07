import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../assets/images/banner1.png";
function AdminHeader() {
  return (
    <div>
      {" "}
      <div>

        <link
          href="//fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="//fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Template CSS Style link --> */}
        <link rel="stylesheet" href="../assets/css/style-starter.css" />
        {/* </head> */}

        <body>
          {/* <!-- header --> */}
          <header id="site-header" className="fixed-top">
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" href="index.html">
                Library Management &nbsp;<i className="fa fa-book" aria-hidden="true"></i>
                </Link>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                  <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/Member/memberHome"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Member/viewBook">
                        View Books
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Member/viewBookings">
                        Bookings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Member/viewHistory">
                        History
                      </Link>
                    </li>
                
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Logout
                      </Link>
                    </li>
                  </ul>
                  {/* <!-- search-right --> */}
                  <div className="header-search position-relative">
                    <div className="search-right mx-lg-2">
                      <a
                        href="#search"
                        className="btn search-btn p-0"
                        title="search"
                      >
                        <i className="fas fa-search"></i>
                      </a>
                      {/* <!-- search popup --> */}
                      <div id="search" className="pop-overlay">
                        <div className="popup">
                          <form
                            action="#search"
                            method="GET"
                            className="search-box"
                          >
                            <input
                              type="search"
                              placeholder="Enter Keyword..."
                              name="search"
                              required="required"
                              autofocus=""
                            />
                            <button type="submit" className="btn">
                              <span
                                className="fas fa-search"
                                aria-hidden="true"
                              ></span>
                            </button>
                          </form>
                        </div>
                        <a className="close" href="#close">
                          ×
                        </a>
                      </div>
                      {/* <!-- //search popup --> */}
                    </div>
                  </div>
                  {/* <!--//search-right--> */}
                </div>

                {/* <!-- //toggle switch for light and dark theme --> */}
              </nav>
            </div>
          </header>
          {/* <!-- //header --> */}

          {/* <!-- banner section --> */}
          <section id="home" className="w3l-banner py-5">
            <div className="banner-content">
              <div className="container py-4">
                <div className="row align-items-center pt-sm-5 pt-4">
                  <div className="col-md-6">
                    <h3 className="mb-lg-4 mb-3 pb-lg-2">
                      Today a reader{" "}
                      <span className="d-block"> tomorrow a leader.</span>
                    </h3>
                    <p className="banner-sub">
                      Some books leave us free and some books make us free." –
                      Ralph Waldo Emerson
                    </p>
                    <div className="d-flex align-items-center buttons-banner">
                      <a
                        href="menu.html"
                        className="btn btn-style mt-lg-5 mt-4"
                      >
                        Read
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 right-banner-2 text-end position-relative">
                    <div className="sub-banner-image mx-auto">
                      <img
                        src={banner1}
                        className="img-fluid position-relative"
                        alt=" "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- //banner section --> */}
          {/* <!-- //inner banner --> */}
          <script src="../../assets/js/jquery-3.3.1.min.js"></script>
          <script src="../../assets/js/theme-change.js"></script>
          <script src="../../assets/js/jquery-3.3.1.min.js"></script>
          <script src="../../assets/js/theme-change.js"></script>
          <script src="../../assets/js/bootstrap.min.js"></script>
        </body>
      </div>
    </div>
  );
}

export default AdminHeader;
