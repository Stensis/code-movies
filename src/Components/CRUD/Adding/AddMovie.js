import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./AddMovieCard.css";

function AddMovieCard() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [actor, setActor] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  // const [loading, setLoading] = useState([]);

  // const navigate = useNavigate;

  // handle submit function
  const handleSubmit = (e) => {
    // prevents the page from refreshing
    e.preventDefault();

    // check for empty fields
    // if (
    //   !title ||
    //   !director ||
    //   !genre ||
    //   !actor ||
    //   !year ||
    //   !image ||
    //   !rating
    // ) {
    //   alert("Please fill in all fields.");
    //   return;
    // }

    // movie object
    const movie = {
      title,
      director,
      genre,
      actor,
      year,
      image,
      rating
      // loading
    };

    // setLoading(true);

    // adding a new movie to the db/json
    fetch("http://localhost:8000/movies", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(movie)
    }).then(() => {
      console.log("new movie added succesfully");
      // setLoading(false);
    });
  };

  return (
    <div
      className="mb-4 justify-content-center"
      style={{ maxWidth: "80rem", marginLeft: "330px", marginBottom: "10px" }}
    >
      <div
        className="card bg-light"
        style={{ maxWidth: "40rem", marginTop: "20px" }}
      >
        <div className="card-header bg-dark text-light">
          <h5 className="cardtitle text-center d-flex justify-content-center mt-4">
            Add a New Movie
          </h5>
        </div>
        <div className="card-body" style={{ marginBottom: "30px" }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Genre:</label>
              <input
                type="text"
                className="form-control"
                id="genre"
                name="genre"
                placeholder="Enter genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                type="file"
                className="form-control-file"
                id="image"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Year:</label>
              <input
                className="form-control"
                id="year"
                name="year"
                placeholder="Enter year released"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="genre">Director:</label>
              <input
                type="text"
                className="form-control"
                id="director"
                name="director"
                placeholder="Enter director"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Actors:</label>
              <input
                type="text"
                className="form-control"
                id="actors"
                name="actors"
                placeholder="Enter ators"
                value={actor}
                onChange={(e) => setActor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="genre">Rating:</label>
              <input
                type="text"
                className="form-control"
                id="ratings"
                name="rating"
                placeholder="Enter rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="btn btn-dark"
                style={{ backgroundColor: "teal", color: "white" }}
              >
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: "black" }}
                >
                  Submit
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMovieCard;
