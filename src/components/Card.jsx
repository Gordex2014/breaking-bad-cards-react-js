import React from "react";

import { CardBody } from "./CardBody";

import "./Card.css";

export function Card({ name, occupation, status, imageSrc }) {
  return (
    <div className="card">
      <img src={imageSrc} alt="Walter White" style={{ width: "100%" }} />
      <CardBody name={name} occupation={occupation} status={status}/>
    </div>
  );
}
