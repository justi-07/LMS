import React from "react";
import ComHeader from "./Common/ComHeader";
import ComFooter from "./Common/ComFooter";
import Popular from "../Components/Popular";
import About from "./About";
function Home() {
  return (
    <div>
      <ComHeader />
      <About/>
      <Popular />
      <ComFooter />
    </div>
  );
}

export default Home;
