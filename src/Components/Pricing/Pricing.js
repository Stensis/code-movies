import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

function Pricing() {
  return (
    <div className="container text-center">
      <div className="row mt-4 mb-5">
        <div className="col-md-4 mb-3">
          <Card1 />
        </div>
        <div className="col-md-4 mb-3">
          <Card2 />
        </div>
        <div className="col-md-4 mb-3">
          <Card3 />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
