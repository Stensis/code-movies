import React from "react";

function Start() {
  return (
    <div className="row mt-4">
      <div className="col text-center">
        <h3 style={{ color: "white" }}>
          <u>Quick Links</u>
        </h3>
        <div>
          <ul>
            <a className="text-decoration-none text-white" href="/">
              Home
            </a>
          </ul>
          <ul>
            <a className="text-decoration-none text-white" href="/event">
              Events
            </a>
          </ul>
          <ul>
            <a className="text-decoration-none text-white" href="/about">
              About Us
            </a>
          </ul>
          <ul>
            <a className="text-decoration-none text-white" href="/contact">
              Contact Us
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Start;
