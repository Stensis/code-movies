import React from "react";
import "./banner.css";

function Home() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          class="carousel-inner"
          style={{ height: "400px", margin: "20px", border: "rounded" }}
        >
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              class="d-block w-100"
              alt="image1"
            />
            {/* <div
              class="title carousel-caption d-md-block"
              style={{ marginTop: "10px" }}
            >
              <h1>
                Code Movies: <span>Where Technology Meets Cinema</span>
              </h1>
              <p>
                Welcome to Code Movies, the ultimate destination for movie
                enthusiasts and tech lovers alike! Our site offers a unique
                blend of cutting-edge technology and classic cinema, bringing
                you the latest news, reviews, and insights from the world of
                movies and beyond.
              </p>
            </div> */}
          </div>

          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1543536448-d209d2d13a1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="d-block w-100"
              alt="image2"
            />
            <div class="carousel-caption d-none d-md-block">
              <h1>Text on top of the carousel</h1>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              class="d-block w-100"
              alt="image3"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home;
