import React from "react";
import { Container, Row } from "react-bootstrap";
import lin from "../assets/lin.svg";
import gitt from "../assets/gitt.svg";

function Footer() {
  return (
    <div>
      <Container style={{ paddingTop: 30 }}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4 style={{ fontFamily: "Poppins" }}>Laja</h4>
          <div
            style={{
              alignItems: "center",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <h4 style={{ fontFamily: "Poppins", fontSize: 18 }}>
              +234 705165 5770
            </h4>
            <h4 style={{ fontFamily: "Poppins", fontSize: 18 }}>
              ifeadelaja@gmail.com
            </h4>
          </div>
          <div style={{ flexDirection: "row", display: "flex", gap: 10 }}>
            <img src={lin} />
            <img src={gitt} />
          </div>
        </div>
        <hr />
      </Container>
    </div>
  );
}

export default Footer;
