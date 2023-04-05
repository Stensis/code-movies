import React from "react";
import { Link } from "react-router-dom";


function Card2() {
  return (
    <div>
      <div class="card text-center border border-danger border-4 rounded-4">
        <div class="card-header">Featured</div>
        <img
          src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link to="/">
            <button class="btn btn-outline-info text-dark border-3">Purchase Package </button>
          </Link>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Card2;
