import React from "react";
import "./Card.css";

function Card({ content, num }) {
  return (
    <>
      <span className="box">
        <h2>{content}</h2>
      </span>
    </>
  );
}

export default Card;
