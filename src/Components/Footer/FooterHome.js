import React from "react";
import End from "./End";
import Mid from "./Mid";
import Start from "./Start";

function FooterHome() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div class="container text-center">
        <div class="row justify-content-start">
          <div class="col-4">
            <Start />
          </div>
          <div class="col-4">
            <Mid />
          </div>
          <div class="col-4">
            <End />
          </div>
        </div>
      </div>
      <div className="container px-4 text-center mt-5">
        <hr style={{ color: "teal", fontWeight: "800" }} />
        <div className="row gx-5">
          <div className="p-2">
            <p className="text-white">All Right Reserved By @Code Movies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHome;
