import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { isMobile } from "react-device-detect";

import { links } from "./MegaMenu";
import ArrowIcon from "./ArrowRightBold";
import TalkToSalesButton from "./TalkToSalesButton";
import MenuIcon from "./MenuIcon";
import "./BurgerMenu.scss";

const ItemArrow = ({ opened }) => {
  return (
    <span
      className={cx({
        "arrow-icon": true,
        opened: opened,
      })}
    >
      <ArrowIcon width={12} fill="#377EF9" />
    </span>
  );
};

const BurgerMenu = ({}) => {
  const [activeLink, setActiveLink] = useState({});
  const [subCategories, setSubCategories] = useState(null);
  const [isMenuOpen, setOpenMenu] = useState(false);

  useEffect(() => {
    if (isMobile) {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.width = "100vw";
        document.body.style.height = "100vh";
      } else {
        document.body.style.overflow = "initial";
        document.body.style.width = "initial";
        document.body.style.height = "initial";
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("click", handleMenuClick);
    return () => {
      window.removeEventListener("click", handleMenuClick);
    };
  }, []);

  const handleMenuClick = () => {
    setOpenMenu(false);
  };

  const handleClickBurger = (e) => {
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
    setOpenMenu((prev) => !prev);
  };

  const onClickMainMenu = (e, link) => {
    e.preventDefault();
    e.stopPropagation();
    let currentOpenedLink = {};

    if ((activeLink.name && activeLink.name != link.name) || !activeLink.name) {
      currentOpenedLink = link;
    }
    if (activeLink.name && activeLink.name == link.name) {
      currentOpenedLink = {};
    }

    setActiveLink(currentOpenedLink);
    if (subCategories) {
      setSubCategories(null);
    }
  };

  const onClickSubMenu = (e, sublink) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (subCategories?.name === sublink.name) {
      setSubCategories(null);
      return;
    }
    if (sublink?.subCategories) {
      setSubCategories({
        name: sublink.name,
        items: sublink.subCategories,
      });
      return;
    }
    setOpenMenu(false);
    setActiveLink({});
  };

  const onClickSubCategory = (e) => {
    setActiveLink({});
    setOpenMenu(false);
  };

  return (
    <div className={`usearch__burger-menu `}>
      <div className="usearch__burger-menu-container">
        <div
          role="presentation"
          onClick={handleClickBurger}
          className="usearch__burger-menu__icon-container"
        >
          <MenuIcon color={"#ffffff"} />
        </div>
      </div>
      <div
        role="presentation"
        className={`menu ${isMenuOpen ? "active" : "inactive"}`}
      >
        <div className="usearch__burger-menu__container">
          <div className="usearch__burger-menu__content container">
            {links.map((link) => {
              if (link?.url) {
                return (
                  <div
                    key={link.name + Math.random()}
                    className="usearch__burger-menu-link__item"
                  >
                    <div className="usearch__burger-menu-link__item-inner">
                      <Link className="link" to={link.url}>
                        {link.name}
                      </Link>

                      <span className="arrow-icon"></span>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={link.name + Math.random()}
                  role="presentation"
                  className="usearch__burger-menu-link__item"
                  onClick={(e) => onClickMainMenu(e, link)}
                >
                  <div className="usearch__burger-menu-link__item-inner">
                    <span> {link.name}</span>
                    <ItemArrow opened={link.name === activeLink.name} />
                  </div>
                  {link.name === activeLink.name && (
                    <div className="usearch__burger-menu__level1">
                      {link.categories && (
                        <div className="list-container__wrapper">
                          <div className="list-container">
                            {link.categories.map((category, index) => (
                              <React.Fragment
                                key={category.title + index.toString()}
                              >
                                {category.title && (
                                  <div className="list-item list-item--header">
                                    <span>{category.title}</span>
                                  </div>
                                )}
                                <div
                                  className={`list list--sublist ${category.className}`}
                                >
                                  {category.links.map((sublink, index) =>
                                    sublink.googleEvent ? (
                                      sublink.isHidden ? null : (
                                        <React.Fragment
                                          key={sublink.name + index.toString()}
                                        >
                                          <Link
                                            to={sublink.url}
                                            onClick={(e) =>
                                              onClickSubMenu(e, sublink)
                                            }
                                            className="list-item"
                                          >
                                            <div className="list-item__inner">
                                              {sublink.img && (
                                                <img
                                                  className="list-item__service-image"
                                                  src={sublink.img}
                                                  alt=""
                                                />
                                              )}

                                              <span className="list-item__service-name">
                                                {sublink.name}
                                              </span>
                                            </div>
                                            {sublink.subCategories && (
                                              <ItemArrow
                                                opened={
                                                  subCategories?.name ===
                                                  sublink?.name
                                                }
                                              />
                                            )}
                                          </Link>
                                          {subCategories &&
                                            subCategories.items &&
                                            subCategories.name ===
                                              sublink.name && (
                                              <div className="list list--sublist">
                                                {subCategories.items.map(
                                                  (subcat, index) => (
                                                    <Link
                                                      key={
                                                        subcat.name +
                                                        index.toString()
                                                      }
                                                      to={subcat.url}
                                                      className="list-item"
                                                      onClick={
                                                        onClickSubCategory
                                                      }
                                                    >
                                                      <div className="list-item__inner">
                                                        {subcat.img && (
                                                          <img
                                                            src={subcat.img}
                                                            alt={subcat.name}
                                                          />
                                                        )}
                                                        <span>
                                                          {subcat.name}
                                                        </span>
                                                      </div>
                                                    </Link>
                                                  )
                                                )}
                                              </div>
                                            )}
                                        </React.Fragment>
                                      )
                                    ) : sublink.isHidden ? null : (
                                      <Link
                                        key={sublink.name + index.toString()}
                                        to={sublink.url}
                                        className={`list-item`}
                                        onClick={onClickSubCategory}
                                      >
                                        <div className="list-item__inner">
                                          {sublink.img && (
                                            <img
                                              className="list-item__service-image"
                                              src={sublink.img}
                                              alt=""
                                            />
                                          )}
                                          <span className="list-item__service-name">
                                            {sublink.name}
                                          </span>
                                        </div>
                                        {sublink.subCategories && (
                                          <span className="arrow-icon">
                                            <ArrowIcon
                                              width={12}
                                              fill="#377EF9"
                                            />
                                          </span>
                                        )}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}

                      {link.categories2 && (
                        <div className="categories2">
                          {link.categories2.map((category, index) => (
                            <React.Fragment
                              key={category.title + index.toString()}
                            >
                              {category.title && (
                                <div className="list-item list-item--header">
                                  <span>{category.title}</span>
                                </div>
                              )}
                              <div className="list list--sublist">
                                {category.links.map((sublink, index) =>
                                  sublink.href ? (
                                    <a
                                      rel="noopener noreferrer"
                                      key={sublink.name + index.toString()}
                                      target="_blank"
                                      href={sublink.url}
                                      className="list-item"
                                    >
                                      <div className="list-item__inner">
                                        {sublink.img && (
                                          <img
                                            className="list-item__service-image"
                                            src={sublink.img}
                                            alt=""
                                          />
                                        )}
                                        <span className="list-item__service-name">
                                          {sublink.name}
                                        </span>
                                      </div>
                                    </a>
                                  ) : (
                                    <Link
                                      to={sublink.url}
                                      key={sublink.name + index.toString()}
                                      className="list-item"
                                      onClick={onClickSubCategory}
                                    >
                                      {sublink.img && (
                                        <img
                                          className="list-item__service-image"
                                          src={sublink.img}
                                          alt=""
                                        />
                                      )}
                                      <div>
                                        <span className="list-item__service-name">
                                          {sublink.name}
                                        </span>
                                      </div>
                                    </Link>
                                  )
                                )}
                              </div>
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="usearch__burger-menu__actions">
            <TalkToSalesButton
              text="Schedule a Demo"
              googleAction="Button click Schedule a Demo"
              route={"/get-a-demo"}
              className="talk-to-sales__homepage"
            />
            <div className="usearch__megamenu__actions--login-container">
              <Link
                to={"/sign-in"}
                className="usearch__megamenu__actions--login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(BurgerMenu);
