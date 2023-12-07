import React from "react";

function ComFooter() {
  return (
    <div>
      {/* <!-- footer --> */}
      <footer className="w3l-footer-22 py-5">
        {/*  */}
        {/* <!-- //copyright --> */}
      </footer>
      {/* <!-- //footer --> */}

      {/* <!-- Js scripts --> */}
      {/* <!-- move top --> */}
      <button onClick="topFunction()" id="movetop" title="Go to top">
        <span className="fas fa-level-up-alt" aria-hidden="true"></span>
      </button>
      <script src="../../assets/js/jquery-3.3.1.min.js"></script>
      <script src="../../assets/js/theme-change.js"></script>
      <script src="../../assets/js/jquery-3.3.1.min.js"></script>
      <script src="../../assets/js/theme-change.js"></script>
      <script src="../../assets/js/bootstrap.min.js"></script>
    </div>
  );
}

export default ComFooter;
