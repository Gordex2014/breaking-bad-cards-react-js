import React from "react";
import PropTypes from "prop-types";

import CardBody from "./CardBody";

import "./Card.css";

function Card({ name, occupation, status, imageSrc }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} style={{ width: "100%" }} />
      <CardBody name={name} occupation={occupation} status={status} />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Card;
