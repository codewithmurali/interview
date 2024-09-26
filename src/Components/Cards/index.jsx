import React from "react";
import "./style.css";

const Card = ({ step, heading, content, img }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={img} alt="" width={400} height={400} />
      </div>
      <div className="content">
        <h2>{`Step ${step}:`}</h2>
        <h1>{heading}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
