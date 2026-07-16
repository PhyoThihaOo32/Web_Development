import "./App.css";
import Home from "./pages/Home";
import PlaylistDetails from "./pages/PlaylistDetails";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <h1 className="playlist-title">Phyo's Playlists</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/api/playlist/:id" element={<PlaylistDetails />} />
      </Routes>
    </div>
  );
}

export default App;
