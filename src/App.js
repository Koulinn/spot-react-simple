import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

import { useState } from "react";

/**
 * Render get data from API
 * Create Cards
 * Create Sections with different music genres
 * Create Search
 * When user select card should display info on footer
 */

function App() {
  const [currentMusic, setCurrentMusic] = useState(null);

  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home setCurrentMusic={setCurrentMusic} />} />
        <Route
          path="/search"
          element={<Search setCurrentMusic={setCurrentMusic} />}
        />
      </Routes>

      <Footer currentMusic={currentMusic} />
    </BrowserRouter>
  );
}

export default App;
