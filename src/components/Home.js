import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Part from "./Part";
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import Projects from "./Projects";
function Home() {
  return (
    <Container>
      <div>
        <Header />
        <Part />
        <Body />
        <Projects />
        <Footer />
      </div>
    </Container>
  );
}

export default Home;
