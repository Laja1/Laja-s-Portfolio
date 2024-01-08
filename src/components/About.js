import React from "react";
import Header from "./Header";
import build from "../assets/build.svg";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div>
      <Header />
      <Container
        style={{
          display: "flex",
          width: 700,
          paddingTop: 20,
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: 42,
            color: "#42446E",
          }}
        >
          About Me
        </h1>
        <h1 style={{ fontFamily: "Poppins", fontSize: 18, color: "#666666" }}>
          The Generator App is an online tool that helps you to export
          ready-made templates ready to work as your future website. It helps
          you to combine slides, panels and other components and export it as a
          set of static files: HTML/CSS/JS.
        </h1>
        <hr style={{ padding: 20 }} />
        <h1
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: 42,
            color: "#42446E",
          }}
        >
          Work Experience
        </h1>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ fontFamily: "Poppins", fontSize: 18, color: "#666666" }}>
            Junior Web Developer
          </h1>
          <div
            style={{
              width: 74,
              height: 17,
              backgroundColor: "#D7FFE0",
              borderRadius: 100,
              display: "flex",
              alignSelf: "center",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "Poppins",
                fontSize: 10,
                color: "#018C0F",
                alignSelf: "center",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: 5,
                justifyContent: "center",
              }}
            >
              Full Time
            </h1>
          </div>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              gap: 10,
            }}
          >
            <img src={build} />
            <h1
              style={{
                fontFamily: "Poppins",
                fontSize: 10,
                marginTop: 6,
                color: "#666666",
                fontWeight: "bold",
              }}
            >
              E-Tranzact
            </h1>
          </div>
          <div>
            <h1
              style={{
                fontFamily: "Poppins",
                fontSize: 10,
                color: "#018C0F",
                fontWeight: "bold",
              }}
            >
              Jan 2024 - Present
            </h1>
          </div>
        </div>
        <hr style={{ padding: 20 }} />
        <h1
          style={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: 42,
            color: "#42446E",
          }}
        >
          Education
        </h1>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ fontFamily: "Poppins", fontSize: 18, color: "#666666" }}>
            Bachelor in Petroleum Engineering
          </h1>
          <div
            style={{
              width: 74,
              height: 17,
              backgroundColor: "#D7FFE0",
              borderRadius: 100,
              display: "flex",
              alignSelf: "center",
              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <h1
              style={{
                fontFamily: "Poppins",
                fontSize: 10,
                color: "#018C0F",
                alignSelf: "center",
                alignItems: "center",
                fontWeight: "bold",
                marginTop: 5,
                justifyContent: "center",
              }}
            >
              Full Time
            </h1>
          </div>
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              gap: 10,
            }}
          >
            <img src={build} />
            <h1
              style={{
                fontFamily: "Poppins",
                fontSize: 10,
                marginTop: 6,
                color: "#666666",
                fontWeight: "bold",
              }}
            >
              Covenant University
            </h1>
          </div>
          <div>
            <h1
              style={{
                fontFamily: "Poppins",
                fontSize: 10,
                color: "#018C0F",
                fontWeight: "bold",
              }}
            >
              Aug 2018 - Dec 2023
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
