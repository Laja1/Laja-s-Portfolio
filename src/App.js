import React from "react";
import Body from "./components/Body";
import About from "./components/About";
import Home from "./components/Home";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Project from "./components/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}
// style={{ backgroundColor: "black", flex: 1 }}
export default App;
