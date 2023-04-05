import React from "react";
import { useParams } from "react-router-dom";

function Delete() {
  // params grabbing them from routes
  const { id } = useParams();

  const handleClick = () => {
    fetch(" http://localhost:8000/movies/" + id, {
      method: "DELETE"
    }).then(() => {
      window.location = "/";
    });
  };

  return (
    <div>
      <button class="btn btn-outline-danger" onClick={handleClick}>
        ❌ Delete Movie
      </button>
    </div>
  );
}

export default Delete;
