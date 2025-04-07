import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage.jsx";
import {ServicePage} from "./pages/servicespage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service" element={< ServicePage/>} />
      </Routes>
    </Router>
  );
}

export default App;

