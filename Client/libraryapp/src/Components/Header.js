import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <link
          href="//fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="//fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="../assets/css/style-starter.css" />
        <body>
          <header id="site-header"  className="fixed-top">
            <div  className="container">
              <nav  className="navbar navbar-expand-lg navbar-light">
                <a  className="navbar-brand" href="index.html">
                Library Management &nbsp;<i className="fa fa-book" aria-hidden="true"></i>
                </a>
                <div  className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </ul>
                  <div  className="header-search position-relative">
                    <div  className="search-right mx-lg-2">
                      <a
                        href="#search"
                         className="btn search-btn p-0"
                        title="search"
                      >
                        <i  className="fas fa-search"></i>
                      </a>
                      <div id="search"  className="pop-overlay">
                        <div  className="popup">
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
                              autoFocus=""
                            />
                            <button type="submit"  className="btn">
                              <span
                                 className="fas fa-search"
                                aria-hidden="true"
                              ></span>
                            </button>
                          </form>
                        </div>
                        <a  className="close" href="#close">
                          ×
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <section  className="inner-banner py-5">
            <div  className="w3l-breadcrumb py-lg-5">
              <div  className="container">
                <div  className="row">
                  <div  className="col-sm-6">
                    <h4  className="inner-text-title font-weight-bold pt-5"> </h4>
                    <ul  className="breadcrumbs-custom-path">
                      <li>
                        <a href="index.html"></a>
                      </li>
                    </ul>
                  </div>
                  <div  className="col-sm-6 inner-banner-right text-center">
                    <img
                      src="assets/images/banner2.png"
                      alt=""
                       className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>
      </div>
    
    </>
  );
}

export default Header;
