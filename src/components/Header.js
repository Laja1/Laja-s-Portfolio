import React, { useState } from "react";
import "./Header.css";

import laja from "../assets/laja.jpg";
import About from "./About";
import Project from "./Project";
import { IoMdClose, IoIosMenu, IoMdMenu } from "react-icons/io";

import { Link, NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Portfolio from "../assets/Portfolio.svg";

function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const active = {
    color: "orange",
  };

  return (
    <div className="w-full">
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
          <div className="hidden md:flex">
            <div style={{ flexDirection: "row", display: "flex", gap: 20 }}>
              <NavLink to="/" className="nav-link">
                <h1 style={{ color: "#666666" }} className="headfont">
                  Home
                </h1>
              </NavLink>
              <NavLink to="/Project" className="nav-link">
                <h1 style={{ color: "#666666" }} className="headfont">
                  Project
                </h1>
              </NavLink>
              <NavLink to="/About" className="nav-link">
                <h1 style={{ color: "#666666" }} className="headfont">
                  About
                </h1>
              </NavLink>
              <NavLink to="/Contact" className="nav-link">
                <h1 style={{ color: "#666666" }} className="headfont">
                  Contact
                </h1>
              </NavLink>
            </div>
          </div>
          <div
            onClick={handleNav}
            className="block sm:hidden lg:hidden md:hidden"
          >
            {!nav ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}
            <div
              className={
                !nav
                  ? "bg-[#8A65EC] text-white fixed top-0 w-[45%] p-10 left-0 ease-in-out duration-500 h-full"
                  : "fixed left-[-100%]"
              }
            >
              <h1 style={{ color: "#666666" }} className="headfont text-white ">
                Portfolio
              </h1>
              <NavLink to="/" className="nav-link" activeStyle={active}>
                <h1
                  style={{ color: "#666666" }}
                  className="headfont p-4 text-white "
                >
                  Home
                </h1>
              </NavLink>
              <hr />
              <Link to="/Project" className="nav-link" activeStyle={active}>
                <h1
                  style={{ color: "#666666" }}
                  className="headfont p-4 text-white "
                >
                  Project
                </h1>
              </Link>
              <hr />
              <Link to="/About" className="nav-link" activeStyle={active}>
                <h1
                  style={{ color: "#666666" }}
                  className="headfont p-4 text-white "
                >
                  About
                </h1>
              </Link>
              <hr />
              <div>
                <Link to="/Contact" className="nav-link" activeStyle={active}>
                  <h1
                    style={{ color: "#666666" }}
                    className="headfont text-white "
                  >
                    Contact
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
