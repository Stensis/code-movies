import React from "react";

function Mid() {
  return (
    <footer>
      <div className=" mt-3">
          <h3 style={{ color: "white" }}>
            <u>Get In Touch</u>
          </h3>
        <p style={{ color: "white" }}>
          To receive latest movies enter <br /> your email below
        </p>
        <div>
          <form class="d-flex flex-wrap">
            <div class="form-group flex-grow-1 mr-2 mb-2 mb-md-0">
              <div class="d-flex">
                <input
                  class="form-control mr-2"
                  type="search"
                  placeholder="enter your email"
                />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Mid;
