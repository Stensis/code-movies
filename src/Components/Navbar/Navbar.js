import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}}>
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="/"
            style={{
              fontFamily: "Netflix Sans",
              fontSize: "2.5rem",
              // transform: "rotate(-10deg)",
              color: "teal",
              fontWeight: "800",
              textTransform: "uppercase",
              transform: "perspective(300px) rotateX(-25deg)",
              paddingLeft:"30px"

            }}
          >
            Code Movies
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarColor02">
            <ul class="navbar-nav me-auto" style={{ paddingLeft: "150px" }}>
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/" style={{ paddingLeft: "80px" }}>
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/" style={{ paddingLeft: "80px" }}>
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/" style={{ paddingLeft: "80px" }}>
                  About Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ paddingLeft: "80px" }}
                >
                  Account
                </a>
                <div class="dropdown-menu bg-info">
                  {/* <div class="dropdown-divider"></div> */}
                  <a class="dropdown-item" href="/">
                    Separated link
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/">
                    Separated link
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
