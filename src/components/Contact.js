import React from "react";
import Header from "./Header";
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <div>
      <Header />
      <div
        style={{
          paddingTop: 20,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            width: 900,

            height: 500,
            flexDirection: "row",
            borderRadius: 20,
            boxShadow: "5px 5px 5px 5px rgba(0,0,0,0.2",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                flexDirection: "column",

                display: "flex",
              }}
            >
              <p style={{ fontSize: 20 }}>Address</p>
              <p>Lagos</p>
            </div>
            <hr />
            <div
              style={{
                flexDirection: "column",

                display: "flex",
              }}
            >
              <p style={{ fontSize: 20 }}>Social</p>
              <div style={{ flexDirection: "row", gap: 20, display: "flex" }}>
                <a href="https://github.com/Laja1">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/samuel-a-265a47198/">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/22.laja/">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com/22laja">
                  <FaTwitter />
                </a>
              </div>
            </div>
            <hr />
            <div
              style={{
                flexDirection: "column",

                display: "flex",
              }}
            >
              <p style={{ fontSize: 20 }}>Call me</p>
              <p>+234 705 165 5770</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
