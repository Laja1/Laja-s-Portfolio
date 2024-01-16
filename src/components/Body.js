import React from "react";
import { Container } from "react-bootstrap";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import boot from "../assets/boot.svg";
import git from "../assets/git.svg";
import vs from "../assets/vs.svg";

function Body() {
  return (
    <div>
      <Container
        style={{
          justifyContent: "center",
          display: "flex",
          paddingTop: 100,
        }}
      >
        <div
          style={{
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h1
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "#42446E",
              fontFamily: "Poppins",
            }}
          >
            My Tech Stack
          </h1>
          <h2 style={{ fontSize: 22, color: "#666666", fontFamily: "Poppins" }}>
            Technologies I’ve been working with recently
          </h2>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: 100,
              padding: 30,
            }}
          >
            <img src={html} />
            <img src={css} />
            <img src={react} />
            <img src={redux} />
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              gap: 150,
              padding: 40,
            }}
          >
            <img src={boot} />
            <img src={git} />
            <img src={vs} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Body;
