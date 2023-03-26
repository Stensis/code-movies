import React from "react";
import "./Cards.css";

function MovieCards() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-sm-4 ">
            <div class="card mb-3 mt-3 border border-warning border border-4 rounded-3">
              <div class="overlay">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1609785918985-0a077bac81b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                class="card-img-top"
                alt="..."
                data-toggle="tooltip"
                data-placement="top"
                title="Click to see more"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card mb-3 mt-3 border border-danger border border-4 rounded-3">
              <div class="overlay justify-content-center">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1609785918985-0a077bac81b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                class="card-img-top"
                alt="..."
                data-toggle="tooltip"
                data-placement="top"
                title="Click to see more"
              />
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card mb-3 mt-3 border border-warning border border-4 rounded-3">
              <div class="overlay">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1609785918985-0a077bac81b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                class="card-img-top"
                alt="..."
                data-toggle="tooltip"
                data-placement="top"
                title="Click to see more"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCards;
