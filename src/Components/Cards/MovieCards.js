import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

function MovieCards() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await fetch("http://localhost:8000/movies");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => (
          <div className="col-sm-4" key={movie.id}>
            <Link to={`/movies/${movie.id}`} className="card-link">
              <div className="card mb-3 mt-3 border border-warning border border-4 rounded-3">
                <div className="overlay">
                  <div className="card-body">
                    <h5 className="card-title">Title: {movie.title}</h5>
                    <p className="card-text">
                      Director: {movie.director}
                      <br />
                      Genre: {movie.genre}
                      <br />
                      Actors: {movie.actors}
                      <br />
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Year: {movie.year}</small>
                    </p>
                  </div>
                </div>
                <img
                  src={movie.image}
                  className="card-img-top"
                  alt={movie.title}
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Click to see more"
                  style={{ height: "400px" }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCards;
