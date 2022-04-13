import React from "react";
import PropTypes from "prop-types";

import "./CardBody.css";

const CardBody = ({
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

CardBody.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default CardBody;
