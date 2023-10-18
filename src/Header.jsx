import React, { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cx from "classnames";
import { isMobile } from "react-device-detect";

import BurgerMenu from "./BurgerMenu";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const { fixed, theme, title } = useSelector((state) => state.headerSettings);

  return (
    <div
      className={cx({
        usearch__header: true,
      })}
    >
      <div
        className={cx({
          "usearch__header-mobile": true,
          fixed: fixed,
          light: theme === "light",
        })}
      >
        <Link className="usearch__header-mobile__logo-container" to="/">
          <img
            width="35"
            height="35"
            className="usearch__header__logo"
            src={
              theme === "dark"
                ? `${process.env.REACT_APP_CLOUDFRONT_URL}/favicon-white-100.png`
                : `${process.env.REACT_APP_CLOUDFRONT_URL}/logo-small.svg`
            }
            alt="Usearch"
          />
        </Link>
        {title && <h2> {title} </h2>}
        <BurgerMenu theme={theme} />
      </div>
      {!isMobile && <MegaMenu />}
    </div>
  );
};

export default memo(Header);
