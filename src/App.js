import Homepage from "./Components/Homepage";
import { Routes, Route } from "react-router-dom";
import AddMovie from "./Components/CRUD/Adding/AddMovie";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div style={{ backgroundColor: "teal" }}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/add" element={<AddMovie  />} />
      </Routes>
    </div>
  );
}

export default App;
