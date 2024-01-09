import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Header.css";
import rec from "../assets/rec.svg";
import rec1 from "../assets/rec1.svg";
import rec2 from "../assets/rec2.svg";
import { Link } from "react-router-dom";
import link from "../assets/link.svg";
import work from "../assets/work.jpg";
import work2 from "../assets/work2.svg";
import work3 from "../assets/work2.jpg";
import { motion } from "framer-motion";
import work4 from "../assets/work3.jpg";
import git from "../assets/git.svg";
function Projects() {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container
        style={{
          justifyContent: "center",
          display: "flex",
          padding: 25,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "#42446E" }}>Projects</h2>
        <h3
          style={{
            fontSize: 22,
            color: "#666666",
          }}
        >
          Things i've designed so far
        </h3>
        <Row style={{ gap: 50, padding: 20 }}>
          <div
            className="card"
            style={{
              width: 373,
              height: 567,
              borderRadius: 20,
              shadowRadius: 20,
              boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <motion.div
              initial={{ scale: [1] }}
              whileHover={{ scale: [1.2] }}
              style={{ alignSelf: "center", justifyContent: "center" }}
            >
              <img
                src={work}
                style={{ width: 373, height: 260, borderRadius: 20 }}
              />
            </motion.div>
            <div>
              <h2
                style={{
                  fontSize: 25,
                  justifyContent: "center",
                  display: "flex",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                Food App Design
              </h2>
              <h3
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins",

                  display: "flex",
                }}
              >
                This is a Food ordering app design project that was designed
                using
                <br /> react-native(expo).
              </h3>
              <br />
              <h3
                style={{
                  fontSize: 16,
                  justifyContent: "center",
                  fontFamily: "Poppins",
                  display: "flex",
                }}
              >
                Tech stack : React-Native(expo)
              </h3>
              <br />
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  paddingHorizontal: 20,
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <img src={link} />
                  <Link to="/Project">
                    <a style={{ fontSize: 16, fontFamily: "Poppins" }}>
                      Preview
                    </a>
                  </Link>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <img src={git} style={{ width: 20, height: 30 }} />
                  <a
                    href="https://github.com/Laja1/Food-App-Design"
                    style={{ fontSize: 16, fontFamily: "Poppins" }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: 373,
              height: 567,
              borderRadius: 20,
              shadowRadius: 20,
              boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <motion.div
              initial={{ scale: [1] }}
              whileHover={{ scale: [1.2] }}
              style={{ alignSelf: "center", justifyContent: "center" }}
            >
              <img
                src={work3}
                style={{
                  width: 375,
                  height: 260,
                }}
              />
            </motion.div>
            <div>
              <h2
                style={{
                  fontSize: 25,
                  justifyContent: "center",
                  display: "flex",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                Spotify App Design
              </h2>
              <h3
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins",
                  justifyContent: "center",
                }}
              >
                This is a Spotify music app design project that was designed
                using <br />
                react-native(expo).
              </h3>
              <br />
              <h3
                style={{
                  fontSize: 16,
                  justifyContent: "center",
                  fontFamily: "Poppins",
                  display: "flex",
                }}
              >
                Tech stack : React-Native(expo)
              </h3>
              <br />
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  paddingHorizontal: 20,
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <img src={link} />
                  <Link to="/Project">
                    <a style={{ fontSize: 16, fontFamily: "Poppins" }}>
                      Preview
                    </a>
                  </Link>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <img src={git} style={{ width: 20, height: 30 }} />
                  <a
                    href="https://github.com/Laja1/Spotify-App-Design"
                    style={{ fontSize: 16, fontFamily: "Poppins" }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: 373,

              height: 567,
              borderRadius: 20,
              shadowRadius: 20,
              boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <motion.div
              initial={{ scale: [1] }}
              whileHover={{ scale: [1.2] }}
              style={{ alignSelf: "center", justifyContent: "center" }}
            >
              <img
                src={work4}
                style={{
                  width: 375,
                  height: 260,
                }}
              />
            </motion.div>
            <div>
              <h2
                style={{
                  fontSize: 25,
                  justifyContent: "center",
                  display: "flex",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  padding: 10,
                }}
              >
                Fashion App Design
              </h2>
              <h3
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins",
                  justifyContent: "center",
                }}
              >
                This is a Spotify music app design project that was designed
                using <br />
                react-native(expo).
              </h3>
              <br />
              <h3
                style={{
                  fontSize: 16,
                  justifyContent: "center",
                  fontFamily: "Poppins",
                  display: "flex",
                }}
              >
                Tech stack : React-Native(expo)
              </h3>
              <br />
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  paddingHorizontal: 20,
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <img src={link} />
                  <Link to="/Project">
                    <a style={{ fontSize: 16, fontFamily: "Poppins" }}>
                      Preview
                    </a>
                  </Link>
                </div>
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  <img src={git} style={{ width: 20, height: 30 }} />
                  <a
                    href="https://github.com/Laja1/fashion"
                    style={{ fontSize: 16, fontFamily: "Poppins" }}
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Projects;
