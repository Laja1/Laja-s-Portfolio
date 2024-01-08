import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import work3 from "../assets/work3.jpg";
import fash1 from "../assets/fash1.png";
import fash2 from "../assets/fash2.png";
import fash3 from "../assets/fash3.png";
import fash4 from "../assets/fash4.png";
import fash5 from "../assets/fash5.png";
import fash6 from "../assets/fash6.png";
import fash7 from "../assets/fash7.png";
import fash8 from "../assets/fash8.png";
import fash9 from "../assets/fash9.png";
import fash10 from "../assets/fash10.png";
import fash11 from "../assets/fash11.png";
import fash12 from "../assets/fash12.png";
import fash13 from "../assets/fash13.png";
import fash14 from "../assets/fash14.png";
import fash15 from "../assets/fash15.png";
import fash16 from "../assets/fash16.png";
import fash17 from "../assets/fash17.png";
import fash18 from "../assets/fash18.png";
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

export default function Fashion() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal2() {
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
            Fashion App
          </h1>
          <img src={work3} style={{ width: 800, height: 375 }} />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              display: "flex",
              gap: 20,
              flexDirection: "row",
            }}
          >
            <Button variant="outline-secondary" onClick={openModal2}>
              UI Design
            </Button>
            <Button variant="outline-secondary" onClick={openModal}>
              Open App Implementation
            </Button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen2}
        onAfterOpen={afterOpenModal2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 20,
            display: "flex",
            gap: 20,
          }}
        >
          <img style={{ height: 600 }} src={work3} />
        </div>

        <div
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 20,
            display: "flex",
            gap: 20,
          }}
        ></div>
        <div
          style={{
            paddingHorizontal: 20,
            justifyContent: "center",
            paddingTop: 10,
            display: "flex",
          }}
        >
          <Button variant="secondary" onClick={closeModal2}>
            Close
          </Button>
        </div>
      </Modal>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 20,
            display: "flex",
            gap: 20,
          }}
        >
          <img style={{ height: 300 }} src={fash1} />

          <img style={{ height: 300 }} src={fash2} />
          <img style={{ height: 300 }} src={fash3} />
          <img style={{ height: 300 }} src={fash4} />
          <img style={{ height: 300 }} src={fash5} />
          <img style={{ height: 300 }} src={fash6} />
          <img style={{ height: 300 }} src={fash7} />
          <img style={{ height: 300 }} src={fash8} />
          <img style={{ height: 300 }} src={fash9} />
        </div>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 20,
            display: "flex",
            gap: 20,
          }}
        >
          <img style={{ height: 300 }} src={fash10} />
          <img style={{ height: 300 }} src={fash11} />

          <img style={{ height: 300 }} src={fash12} />
          <img style={{ height: 300 }} src={fash13} />
          <img style={{ height: 300 }} src={fash14} />
          <img style={{ height: 300 }} src={fash15} />
          <img style={{ height: 300 }} src={fash16} />
          <img style={{ height: 300 }} src={fash17} />
          <img style={{ height: 300 }} src={fash18} />
        </div>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingBottom: 20,
            display: "flex",
            gap: 20,
          }}
        ></div>
        <div
          style={{
            paddingHorizontal: 20,
            justifyContent: "center",
            paddingTop: 10,
            display: "flex",
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
