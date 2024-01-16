import React from "react";
import "./Header.css";

import laja from "../assets/laja.jpg";
import About from "./About";
import Project from "./Project";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Portfolio from "../assets/Portfolio.svg";

function Header() {
  return (
    <div className="container">
      <Container>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 40,
          }}
        >
          {/* <img src={Portfolio} /> */}
          <h1 style={{ color: "#666666" }} className="headfont">
            Portfolio
          </h1>
          <div style={{ flexDirection: "row", display: "flex", gap: 20 }}>
            <Link to="/" className="nav-link">
              <h1 style={{ color: "#666666" }} className="headfont">
                Home
              </h1>
            </Link>
            <Link to="/Project" className="nav-link">
              <h1 style={{ color: "#666666" }} className="headfont">
                Project
              </h1>
            </Link>
            <Link to="/About" className="nav-link">
              <h1 style={{ color: "#666666" }} className="headfont">
                About
              </h1>
            </Link>
          </div>
          <div>
            <Link to="/Contact" className="nav-link">
              <h1 style={{ color: "#666666" }} className="headfont">
                Contact
              </h1>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
