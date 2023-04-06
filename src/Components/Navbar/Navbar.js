import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
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
              paddingLeft: "30px"
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
                <a class="nav-link" href="/add" style={{ paddingLeft: "80px" }}>
                  Add movie
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="/pricing"
                  style={{ paddingLeft: "80px" }}
                >
                  Pricing
                </a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="/aboutUs" style={{ paddingLeft: "80px" }}>
                  About Us
                </a>
              </li> */}

              <li class="nav-item dropdown" style={{ paddingLeft: "80px" }}>
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{paddingRight:"40px"}}
                >
                  <img
                    src="https://images.unsplash.com/photo-1551802568-a741a8c5664f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGd5bSUyMGdpcmx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                    alt="Avatar"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%"
                    }}
                  />
                  User Name
                </a>
                <ul class="dropdown-menu" style={{ paddingRight: "10px" }}>
                  <li>
                    <a class="dropdown-item" href="account">
                     My Account
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/helpCenter">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/helpCenter">
                      Log-out
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
