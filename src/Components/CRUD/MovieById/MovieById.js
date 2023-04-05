import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Delete from "../Delete/Delete";

function MovieById() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovieById = async (id) => {
      try {
        const response = await fetch(`http://localhost:8000/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieById(id);
  }, [id]);

  return (
    <div
      // background image
      style={{
        background: `url(https://images.unsplash.com/photo-1588556591039-ddf31474d817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Go back link */}
      <div style={{ textAlign: "center", color: "blue" }}>
        {" "}
        <a href="/" className="card-text text-decoration-none">
          <span style={{ color: "blue",marginTop:"10px" }}> ⬅️ </span>
          Go Back
        </a>
      </div>
      {/* movie image and overlay */}
      <div>
        <div className="row">
          <div className="col-sm-12 mt-3" style={{ marginLeft: "240px" }}>
            <div
              className="card mb-3 mt-2 border border-danger border border-5 rounded-5"
              style={{
                width: "60%",
                marginRight: "10px",
                alignContent: "center"
              }}
            >
              <div className="overlay">
                <div
                  class="row align-items-end mt-3 p-3"
                  style={{ marginLeft: "20px" }}
                >
                  <div class="col align-self-start">
                    <Link to="/watchTrailer">
                      <button class="btn btn-outline-info">
                        🎦 Watch Trailer
                      </button>
                    </Link>
                  </div>
                  <div class="col align-self-center ">
                    <Link to="/play">
                      {" "}
                      <button
                        class="btn btn-outline-warning"
                        style={{ marginLeft: "30px" }}
                      >
                        {" "}
                        ▶️ Play
                      </button>
                    </Link>
                  </div>
                  <div class="col align-self-end">
                    <Delete />
                  </div>
                </div>
                <div class="col align-self-center ">
                  <Link to="/updating">
                    {" "}
                    <button
                      class="btn btn-outline-warning"
                      style={{ marginLeft: "315px" }}
                    >
                      {" "}
                      Update
                    </button>
                  </Link>
                </div>
              </div>

              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                data-toggle="tooltip"
                data-placement="top"
                title="Click to see more"
                style={{ height: "400px", borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* card body */}
      <div>
        <div
          className="card-body"
          style={{ textAlign: "center", color: "white" }}
        >
          <h5 className="card-title" style={{ color: "white" }}>
            <h3 style={{ color: "red" }}> Title</h3>
            <p>{movie.title}</p>
          </h5>
          <p className="card-text">
            <h4 style={{ color: "red" }}> Director </h4>
            <p> {movie.director}</p>
            <h4 style={{ color: "red" }}>Genre</h4>
            <p>{movie.genre}</p>
            <h4 style={{ color: "red" }}>Actors</h4>
            <p> {movie.actors}</p>
          </p>
          <p
            className="card-text"
            style={{ textAlign: "center", color: "white" }}
          >
            <small className="text-muted">Year: {movie.year}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieById;
