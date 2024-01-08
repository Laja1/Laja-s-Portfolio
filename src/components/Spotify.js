import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import work2 from "../assets/work2.jpg";
import no1 from "../assets/no1.png";
import no2 from "../assets/no2.png";
import no3 from "../assets/no3.png";
import no4 from "../assets/no4.png";
import no5 from "../assets/no5.png";
import no6 from "../assets/no6.png";
import no7 from "../assets/no7.png";
import no8 from "../assets/no8.png";
import no9 from "../assets/no9.png";
import no10 from "../assets/no10.png";
import no11 from "../assets/no11.png";
import { motion } from "framer-motion";
import { Button, Row } from "react-bootstrap";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    backgroundColor: "#dadada",
    borderRadius: 20,
    transform: "translate(-50%, -50%)",
  },
};

export default function Spotify() {
  const imageUrls = [no1, no2, no3, no4, no5, no6, no7, no8, no9, no10, no11];
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          display: "flex",
          paddingBottom: 20,
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: 20,
            gap: 10,
            width: 900,

            height: 500,
            boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: 20,
              fontWeight: "bold",
              color: "#564020",
            }}
          >
            Spotify App
          </h1>
          <img src={work2} style={{ width: 800, height: 375 }} />
          <Button variant="outline-secondary" onClick={openModal}>
            Open App Implementation
          </Button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <div style={{ display: "flex" }}>
            {imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={{
                  height: 450,
                  maxWidth: "100%",
                  padding: 16,
                  margin: 8,
                  borderRadius: 8,
                  display: "inline-block",
                }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            paddingHorizontal: 20,
            justifyContent: "center",
            display: "flex",
            paddingTop: 10,
          }}
        >
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </div>
      </Modal>
    </motion.div>
  );
}
