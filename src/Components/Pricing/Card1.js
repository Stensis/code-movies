import React from "react";
import { Link } from "react-router-dom";

function Card1() {
  return (
    <div>
      <div className="card text-center border border-warning border-4 rounded-4">
        <div className="card-header">Featured</div>
        <img
          src="https://plus.unsplash.com/premium_photo-1672784163571-38a0f7ebc800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwZ2lybHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60"
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link to="/">
            <button className="btn btn-outline-warning text-dark border-4">Purchase Package </button>
          </Link>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </div>
  );
}

export default Card1;
