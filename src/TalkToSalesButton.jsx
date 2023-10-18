import React from "react";
import { Link } from "react-router-dom";

import IconArrow from "./Arrow";
import "./TalkToSalesButton.scss";

const TalkToSalesButton = ({ text, className, route, googleAction }) => {
  return (
    <Link to={route} className={`talk-to-sales ${className}`}>
      {text}
      <IconArrow width={12} fill="#fff" />
    </Link>
  );
};

export default TalkToSalesButton;
