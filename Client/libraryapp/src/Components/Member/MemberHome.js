import React from "react";
import ActivityHeader from "./ActivityHeader";
import About  from '../About'
import Popular  from "../Popular";
import ComFooter from "../Common/ComFooter";

function MemberHome() {
  return (
    <div>
      <ActivityHeader />
      <About />
      <Popular />
      <ComFooter />
    </div>
  );
}

export default MemberHome;
