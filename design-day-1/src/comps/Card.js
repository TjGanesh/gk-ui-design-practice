import React from "react";
import "./Card.css";

function Card({ content, num }) {
  return (
    <>
      <div className="box">
        <h2>{content}</h2>
      </div>
    </>
  );
}

export default Card;
