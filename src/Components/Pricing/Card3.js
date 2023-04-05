import React from "react";
import { Link } from "react-router-dom";


function Card3() {
  return (
    <div>
      <div class="card text-center border border-warning border-4 rounded-4">
        <div class="card-header">Featured</div>
        <img
          src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
            <button class="btn btn-outline-warning text-dark">Purchase Package </button>
          </Link>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Card3;
