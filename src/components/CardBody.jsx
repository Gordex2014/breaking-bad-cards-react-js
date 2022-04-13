import React from "react";

import "./CardBody.css";

export const CardBody = ({
  name = "Walter White",
  occupation = "High School Chemistry Teacher",
  status = "Presumed dead",
}) => {
  return (
    <div className="container">
      <h4>
        <b>{name}</b>
      </h4>
      <p>{occupation}</p>
      <small>{status}</small>
    </div>
  );
};
