import React from "react";
import laja from "../assets/laja.jpg";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
function Part() {
  return (
    <div>
      <Container>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            paddingTop: 100,
            alignSelf: "center",
            justifyContent: "center",
            gap: 100,
          }}
        >
          <div style={{ flexDirection: "column", display: "flex" }}>
            <h1
              style={{
                color: "#42446E",
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              Hi 👋
              <br />
              My name is
            </h1>
            <h1
              style={{
                color: "#13B0F5",
                fontFamily: "Poppins",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Laja
            </h1>
            <h1
              style={{
                color: "#42446E",
                fontFamily: "Poppins",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              I am a frontend devoloper and i design mobile apps
            </h1>
          </div>
          <motion.div
            initial={{ rotate: "0deg", y: 0 }}
            animate={{
              rotate: "360deg",
            }}
            whileHover="animate"
            transition={{ duration: 2, ease: "backInOut" }}
            exit={{ scale: 0, rotate: "0deg" }}
            style={{
              backgroundColor: "#E70FAA",
              alignSelf: "center",
              justifyContent: "center",
              width: 159,
              display: "flex",
              height: 159,
              borderRadius: 230,
            }}
          >
            <img
              style={{
                width: 149,
                height: 149,
                borderRadius: 230,
                alignSelf: "center",
                justifyContent: "center",
              }}
              src={laja}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Part;
