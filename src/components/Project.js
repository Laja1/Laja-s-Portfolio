import React from "react";
import Header from "./Header";
import Food from "./Food";
import Spotify from "./Spotify";
import { Container } from "react-bootstrap";
import Fashion from "./Fashion";
function Project() {
  return (
    <div>
      <Header />
      <Container>
        <div
          style={{
            flexDirection: "column",
            paddingBottom: 20,
            display: "flex",
          }}
        >
          <Food />
          <Spotify />
          <Fashion />
        </div>
      </Container>
    </div>
  );
}

export default Project;
