import React from "react";
import { Link } from "react-router-dom";

import cx from "classnames";

import "./ButtonAction.scss";

export function generateRandomNumber() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

const Button = ({
  bgColor = "#2C44FF",
  textColor = "#ffffff",
  path = "#",
  href = "",
  className = "",
  actionName,
  outline = false,
  children,
}) => {
  return (
    <Link
      to={path}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className={cx({
        "button-action": true,
        [className]: true,
        outline: outline,
      })}
      id={`button-action-${generateRandomNumber()}`}
    >
      {children || "Default text"}
    </Link>
  );
};

export default Button;
