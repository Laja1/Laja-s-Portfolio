import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import work from "../assets/work.jpg";
import food1 from "../assets/food1.PNG";
import food2 from "../assets/food2.PNG";
import food3 from "../assets/food3.PNG";
import food4 from "../assets/food4.PNG";
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
const imageUrls = [food1, food2, food3, food4];
export default function Food() {
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
    <div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          display: "flex",
          paddingBottom: 20,
          paddingTop: 20,
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
            Food App
          </h1>
          <img src={work} style={{ width: 800, height: 375 }} />
          <Button variant="outline-secondary" onClick={openModal}>
            Open
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
    </div>
  );
}
