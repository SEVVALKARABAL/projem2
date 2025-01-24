"use client";
import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        marginBottom: "10px",
        padding: "10px",
      }}
    >
      <div
        onClick={toggleAccordion}
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <h4>{question}</h4>
        <button>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

export default Accordion;
