import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LocalArtist from "./Pages/LocalArtistFolder/LocalArtist.jsx";
import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="h-screen w-screen overflow-hidden text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
          <Route path="/localartist" element={<LocalArtist />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
