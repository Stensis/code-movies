import React from "react";
import MovieCards from "./Cards/MovieCards";
import FooterHome from "./Footer/FooterHome";
import Navbar from "./Navbar/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <MovieCards />
      <FooterHome />
    </div>
  );
}

export default Homepage;
