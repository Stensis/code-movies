import Homepage from "./Components/Homepage";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./Components/CRUD/Adding/AddMovie";
import Navbar from "./Components/Navbar/Navbar";
import MovieById from "./Components/CRUD/MovieById/MovieById";
import Delete from "./Components/CRUD/Delete/Delete";
import PageNotFound from "./Components/PageNotFound";
import WatchTrailer from "./Components/CRUD/MovieById/WatchTrailer";
import Play from "./Components/CRUD/MovieById/Play";
// import Updating from "./Components/CRUD/Updating/Updating";
// import UpdateButton from "./Components/CRUD/Updating/UpdateButton";

function App() {
  return (
    <div style={{ backgroundColor: "teal" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/add" element={<AddMovie />} />
        <Route exact path="/movies/:id" element={<MovieById />} />
        <Route exact path="/delete" element={<Delete />} />
        <Route exact path="/" element={<PageNotFound />} />
        <Route exact path="/watchTrailer" element={<WatchTrailer />} />
        <Route exact path="/play" element={<Play />} />
{/* 
        <Route exact path="/update" element={<UpdateButton />} />
        <Route exact path="/updating" element={<Updating />} /> */}

      </Routes>
    </div>
  );
}

export default App;
