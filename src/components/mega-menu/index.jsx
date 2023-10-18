import React, { useEffect, useMemo, useState, memo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import cx from "classnames";

import TalkToSalesButton from "../../TalkToSalesButton";

import IconArrow from "../../Arrow";
import { pagesWithTabs } from "../../PagesNavbar";

export let links = [
  {
    name: "Services",
    categories: [
      {
        title: "",
        className: "",
        links: [
          {
            name: "Market and Competitive Platform",
            description:
              "Get strategic real-time updates on your competitors <br/>  and customers across relevant industry sectors.",
            googleEvent:
              "Button Click market and competitive intelligence platform",
            url: "",
            img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/market.svg`,
            isHidden: false,
          },
          {
            name: "Market Signals and Data Feeds",
            description:
              "Generate structured datasets from millions of <br/> public sources.",
            googleEvent: "Button Click Market Signals and Data Feeds",
            url: "",
            img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/datasets.svg`,
            isHidden: false,
            subCategories: pagesWithTabs.DATA_FEEDS,
          },
          {
            name: "Data Archive",
            description:
              "Access billions of web pages and news articles in <br/> Usearch’s data archive.",
            googleEvent: "Button Click Data Archive",
            url: "",
            img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/data-archive.svg`,
            isHidden: false,
          },
          {
            name: "Business Location Database",
            description:
              "Get a list of all company locations along with full <br/> property information.",
            googleEvent: "Button Click Business Location Database",
            url: "",
            img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/locations.svg`,
            isHidden: false,
          },
          // {
          //   name: "Custom Search",
          //   description: "Build your own custom search engine, your way.",
          //   googleEvent: "Button Click Custom Search",
          //   url: CUSTOM_SEARCH,
          //   img: CustomSearchLogo,
          //   isHidden: false,
          //   subCategories: pagesWithTabs.CUSTOM_SEARCH,
          // },
          {
            name: "Search API",
            description:
              "Search billions of web pages with our powerful <br/> API.",
            googleEvent: "Button Click Search API",
            url: "",
            img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/web-search-api.svg`,
            isHidden: false,
            subCategories: pagesWithTabs.SEARCH_API,
          },
          // {
          //   name: "Query Analysis",
          //   description: "Analyze users' search queries",
          //   googleEvent: "Button Click Query Analysis",
          //   url: SIMILAR_QUERIES,
          //   img: QueryAnalysisLogo,
          //   isHidden: !isStatingOrDevelopment(),
          //   subCategories: pagesWithTabs.KEYWORD_ANALYSIS,
          // },
          // {
          //   name: "Contextual Graph",
          //   description: "Find contextual relations ",
          //   googleEvent: "",
          //   url: CONTEXTUAL_ASSOCIATIONS,
          //   img: ContextualGraphLogo,
          //   isHidden: !isStatingOrDevelopment(),
          //   subCategories: pagesWithTabs.CONTEXTUAL_GRAPH,
          // },
        ],
      },
    ],
  },
  {
    name: "Insights",
    url: "",
    urlText: "",
    googleEvent: "Button Click Insights",
    categories: [
      {
        title: "Companies",
        className: "",
        links: [
          {
            name: "Companies Explorer",
            description: "",
            url: `/?pageNum=1`,
            img: null,
          },
        ],
      },
      {
        title: "Datasets",
        className: "",
        links: [
          {
            name: "Data Sets Explorer",
            description: "",
            url: "",
            img: null,
          },
        ],
      },
      {
        title: "Locations",
        className: "",
        links: [
          // {
          //   name: "Custom Search Engines",
          //   description: "",
          //   url: `${POPULAR_SEARCH_ENGINES}`,
          //   img: null,
          // },
          {
            name: "Location Explorer",
            description: "",
            url: "",
            img: null,
          },
        ],
      },
      // {
      //   title: "Papers",
      //   className: "",
      //   links: [
      //     {
      //       name: "White paper",
      //       description: "",
      //       url: WhitePaperPDF,
      //       href: true,
      //       img: "",
      //     },
      //     {
      //       name: "Technology paper",
      //       description: "",
      //       url: TechnologyPaperPDF,
      //       href: true,
      //       img: "",
      //     },
      //   ],
      // },
    ],
    categories2: [
      {
        title: "Research & Insights",
        className: "solution",
        links: [
          {
            name: "Layoffs",
            description: "Get insights on major layoffs and hiring freezes",
            url: `/layoffs`,
            img: "",
          },
          {
            name: "Major Hiring",
            description: "Get insights on Major Hiring",
            url: `/major-hiring`,
            img: "",
          },
          {
            name: "Startup Funding",
            description: "Get insights on Startup Funding",
            url: `/startup-funding`,
            img: "",
          },
          {
            name: "Merger and Acquisition",
            description: "Get insights on Merger and Acquisition",
            url: `/merger-and-acquisition`,
            img: "",
          },
          {
            name: "Lease Transactions",
            description: "Get insights on Lease Transactions",
            url: `/lease-transactions`,
            img: "",
          },
        ],
      },
    ],
  },
  // {
  //   name: "Company Locations",
  //   url: COMPANY_LOCATIONS,
  //   categories: [],
  // },
  {
    name: "Resources",
    categories: [
      {
        title: "Blog",
        className: "",
        links: [
          {
            name: "Technology",
            description: "",
            url: "/blog?c=Technology",
            // img: TechnologyLogo,
          },
          {
            name: "Services",
            description: "",
            url: "/blog?c=Services",
            // img: ServicesLogo,
          },
          {
            name: "All Blog Posts",
            description: "",
            url: "/blog?c=All",
            // img: AllBlogPostsLogo,
          },
        ],
      },
      {
        title: "Use cases",
        className: "",
        links: [
          // {
          //   name: "Financial Services",
          //   description: "",
          //   url: `${USE_CASES}?c=financial`,
          // },
          {
            name: "Data Feeds",
            description: "",
            // url: `${casesWithFullUrl[0].url}`,
            url: `?c=data-feeds`,
          },
          {
            name: "All Use Cases",
            description: "",
            url: `?c=all`,
            // img: AllUserCasesLogo,
          },
        ],
      },
      // {
      //   title: "Quick Start Guides",
      //   className: "",
      //   links: [
      //     {
      //       name: "Custom Search",
      //       description: "",
      //       url: "/custom-search/quick-start-guide/get-started",
      //       img: "",
      //     },
      //     {
      //       name: "Search API",
      //       description: "",
      //       url: "/search-api/quick-start-guide/get-started",
      //       img: "",
      //     },
      //     {
      //       name: "Query Analysis",
      //       description: "",
      //       url: "/query-analysis-api/quick-start-guide/get-started",
      //       img: "",
      //     },
      //   ],
      // },
      // {
      //   title: "Advanced search",
      //   className: "",
      //   links: [
      //     {
      //       name: "Search Syntax",
      //       description: "",
      //       url: SEARCH_SYNTAX,
      //       img: "",
      //     },
      //   ],
      // },
    ],
    categories2: [
      {
        title: "Glossary",
        className: "",
        links: [
          {
            name: "News API Categories",
            description: "",
            url: ``,
            img: null,
          },
          // {
          //   name: "Custom Search Engines",
          //   description: "",
          //   url: `${POPULAR_SEARCH_ENGINES}`,
          //   img: null,
          // },
        ],
      },
      // {
      //   title: "Papers",
      //   className: "",
      //   links: [
      //     {
      //       name: "White paper",
      //       description: "",
      //       url: WhitePaperPDF,
      //       href: true,
      //       img: "",
      //     },
      //     {
      //       name: "Technology paper",
      //       description: "",
      //       url: TechnologyPaperPDF,
      //       href: true,
      //       img: "",
      //     },
      //   ],
      // },
    ],
  },
  {
    name: "Company",
    categories: [
      {
        title: "",
        className: "",
        links: [
          {
            name: "About Us",
            description: "",
            url: "",
            img: "",
          },
          {
            name: "Get a demo",
            description: "",
            url: "",
            img: "",
          },
        ],
      },
    ],
  },
];

const MegaMenu = ({ showMegaMenu = true }) => {
  const [activeLink, setActiveLink] = useState({});
  const [windowScroll, setWindowScroll] = useState(false);
  const [subCategories, setSubCategories] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleShowScrollToTop);
    return () => {
      window.removeEventListener("scroll", handleShowScrollToTop, false);
    };
  });

  useEffect(() => {
    if (Object.keys(activeLink).length) {
      setActiveLink({});
    }
  }, [location.pathname]);

  const currentActiveLink = useMemo(() => {
    let currentLink = null;

    if (location.pathname !== "/") {
      links.forEach((mLink) => {
        mLink.categories.forEach((category) => {
          category.links.forEach((l) => {
            if (l.url.includes(location.pathname)) {
              currentLink = mLink;
            }
          });
        });
        if (mLink.categories2) {
          mLink.categories2.forEach((category) => {
            category.links.forEach((l) => {
              if (l.url.includes(location.pathname)) {
                currentLink = mLink;
              }
            });
          });
        }
      });
    }

    return currentLink;
  }, [location.pathname, links]);

  const handleShowScrollToTop = () => {
    if (window.pageYOffset > 50) {
      if (!windowScroll) {
        setWindowScroll(true);
      }
      return;
    }
    if (windowScroll) {
      setWindowScroll(false);
    }
  };

  const handleSignOut = (e) => {
    e.preventDefault();
  };

  const handleActiveLink = (newLink = {}) => {
    setActiveLink(newLink);
  };

  return (
    <>
      <div
        className={cx({
          sticky: windowScroll,
          usearch__megamenu: true,
        })}
        style={{}}
      >
        <div
          className={cx({
            container: true,
            narrow: true,
          })}
        >
          <div className="usearch__megamenu-inner">
            <div className="usearch__megamenu-links">
              <div className="usearch__megamenu-links-inner">
                <div className="usearch__megamenu-link__item">
                  <Link to="/">
                    <img
                      width="34"
                      height="36"
                      className="usearch__megamenu__logo"
                      src={`${process.env.REACT_APP_CLOUDFRONT_URL}/logo-small.svg`}
                      alt="Usearch"
                    />
                  </Link>
                </div>
                {showMegaMenu &&
                  links.map((link) => {
                    return (
                      <div
                        key={link.name + Math.random()}
                        onMouseEnter={() => {
                          handleActiveLink(link);
                        }}
                        onMouseLeave={() => {
                          handleActiveLink();
                          if (subCategories) {
                            setSubCategories(null);
                          }
                        }}
                        role="presentation"
                        className={cx({
                          "usearch__megamenu-link__item": true,
                          active:
                            currentActiveLink &&
                            currentActiveLink.name === link.name,
                        })}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {link.url ? (
                            <Link
                              className="usearch__megamenu-link__item--link"
                              to={link.url}
                              onClick={() => {
                                setActiveLink({});
                              }}
                            >
                              {link.name}
                            </Link>
                          ) : (
                            <span> {link.name}</span>
                          )}

                          {!link.url && (
                            <div
                              className="usearch__megamenu__arrow-icon"
                              style={{
                                transform:
                                  link.name === activeLink.name
                                    ? "rotate(0deg)"
                                    : "rotate(180deg)",
                              }}
                            >
                              <IconArrow width={11} fill="#152842" />
                            </div>
                          )}
                        </div>
                        {link.name === activeLink.name && (
                          <div className="usearch__megamenu__level1">
                            {link.categories && link.categories && (
                              <div className="list-container__wrapper">
                                <div className="list-container">
                                  {link.categories.map((category, index) => (
                                    <React.Fragment
                                      key={category.title + index.toString()}
                                    >
                                      {category.title && (
                                        <div className="title">
                                          {category.title}
                                        </div>
                                      )}
                                      <div
                                        className={`list ${category.className}`}
                                      >
                                        {category.links.map((sublink, index) =>
                                          sublink.googleEvent ? (
                                            sublink.isHidden ? null : (
                                              <Link
                                                to={sublink.url}
                                                key={
                                                  sublink.name +
                                                  index.toString()
                                                }
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  setActiveLink({});
                                                  setSubCategories(null);
                                                }}
                                                onMouseEnter={() =>
                                                  setSubCategories(
                                                    sublink.subCategories
                                                  )
                                                }
                                                className={cx({
                                                  "list-item": true,
                                                  active:
                                                    sublink.url.includes(
                                                      location.pathname +
                                                        location.search
                                                    ) && currentActiveLink,
                                                })}
                                              >
                                                {sublink.img && (
                                                  <img
                                                    className="list-item__service-image"
                                                    src={sublink.img}
                                                    alt=""
                                                    width={60}
                                                    height={50}
                                                  />
                                                )}
                                                <div>
                                                  <h5 className="list-item__service-name">
                                                    {sublink.name}
                                                  </h5>
                                                  <p
                                                    className="list-item__service-description"
                                                    dangerouslySetInnerHTML={{
                                                      __html:
                                                        sublink.description,
                                                    }}
                                                  />
                                                </div>
                                                {sublink.subCategories && (
                                                  <span className="arrow-icon">
                                                    <IconArrow
                                                      width={12}
                                                      fill="#152842"
                                                    />
                                                  </span>
                                                )}
                                              </Link>
                                            )
                                          ) : sublink.isHidden ? null : (
                                            <Link
                                              key={
                                                sublink.name + index.toString()
                                              }
                                              to={sublink.url}
                                              className={cx({
                                                "list-item": true,
                                                active:
                                                  sublink.url.includes(
                                                    location.pathname +
                                                      location.search
                                                  ) && currentActiveLink,
                                              })}
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setActiveLink({});
                                                navigate(sublink.url);
                                              }}
                                              onMouseEnter={() => {
                                                setSubCategories(
                                                  sublink.subCategories
                                                );
                                              }}
                                            >
                                              {sublink.img && (
                                                <img
                                                  className="list-item__service-image"
                                                  src={sublink.img}
                                                  alt=""
                                                  width={60}
                                                  height={50}
                                                />
                                              )}
                                              <div>
                                                <h5 className="list-item__service-name">
                                                  {sublink.name}
                                                </h5>
                                                <p
                                                  dangerouslySetInnerHTML={{
                                                    __html: sublink.description,
                                                  }}
                                                  className="list-item__service-description"
                                                />
                                              </div>
                                              {sublink.subCategories && (
                                                <span className="arrow-icon">
                                                  <IconArrow
                                                    width={12}
                                                    fill="#152842"
                                                  />
                                                </span>
                                              )}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    </React.Fragment>
                                  ))}
                                  {link.url &&
                                    (link.googleEvent ? (
                                      <div className="view-all-container">
                                        <Link
                                          to={link.url}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            setActiveLink({});
                                          }}
                                          className="view-all"
                                        >
                                          {link.urlText}
                                        </Link>
                                      </div>
                                    ) : (
                                      <Link
                                        to="/"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setActiveLink({});
                                          navigate(link.url);
                                        }}
                                        className="view-all"
                                      >
                                        {link.urlText}
                                      </Link>
                                    ))}
                                </div>
                                {subCategories && (
                                  <div className="usearch__megamenu__level1__subcategories">
                                    {subCategories.map((subcat, index) => (
                                      <Link
                                        key={subcat.name + index.toString()}
                                        to={subcat.url}
                                        onClick={() => {
                                          setActiveLink({});
                                        }}
                                      >
                                        {subcat.img && (
                                          <img
                                            src={subcat.img}
                                            alt={subcat.name}
                                            width={60}
                                            height={50}
                                          />
                                        )}
                                        <span>{subcat.name}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            {link.categories2 && (
                              <div className="categories2">
                                {link.categories2.map((category, index) => (
                                  <React.Fragment
                                    key={category.title + index.toString()}
                                  >
                                    {category.title && (
                                      <div className="title">
                                        {category.title}
                                      </div>
                                    )}
                                    <div className="list">
                                      {category.links.map((sublink, index) =>
                                        sublink.href ? (
                                          <a
                                            rel="noopener noreferrer"
                                            key={
                                              sublink.name + index.toString()
                                            }
                                            target="_blank"
                                            href={sublink.url}
                                            className={cx({
                                              "list-item": true,
                                              active:
                                                sublink.url.includes(
                                                  location.pathname +
                                                    location.search
                                                ) && currentActiveLink,
                                            })}
                                          >
                                            {sublink.img && (
                                              <img
                                                className="list-item__service-image"
                                                src={sublink.img}
                                                alt=""
                                                width={60}
                                                height={50}
                                              />
                                            )}
                                            <div>
                                              <h5 className="list-item__service-name">
                                                {sublink.name}
                                              </h5>
                                              <p
                                                dangerouslySetInnerHTML={{
                                                  __html: sublink.description,
                                                }}
                                                className="list-item__service-description"
                                              />
                                            </div>
                                          </a>
                                        ) : (
                                          <Link
                                            to={sublink.url}
                                            key={
                                              sublink.name + index.toString()
                                            }
                                            className={cx({
                                              "list-item": true,
                                              active:
                                                sublink.url.includes(
                                                  location.pathname +
                                                    location.search
                                                ) && currentActiveLink,
                                            })}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              setActiveLink({});
                                              navigate(sublink.url);
                                            }}
                                          >
                                            {sublink.img && (
                                              <img
                                                className="list-item__service-image"
                                                src={sublink.img}
                                                width={60}
                                                height={50}
                                                alt=""
                                              />
                                            )}
                                            <div>
                                              <h5 className="list-item__service-name">
                                                {sublink.name}
                                              </h5>
                                              <p
                                                dangerouslySetInnerHTML={{
                                                  __html: sublink.description,
                                                }}
                                                className="list-item__service-description"
                                              />
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
            </div>
            <div className="usearch__megamenu__actions">
              <div className="usearch__megamenu__actions--login-container">
                <Link to={""} className="usearch__megamenu__actions--login">
                  Login
                </Link>
              </div>
              <TalkToSalesButton
                text="Schedule a Demo"
                googleAction="Button click Schedule a Demo"
                route={""}
                className="talk-to-sales__homepage"
              />
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="usearch__megamenu-spacing"></div>
    </>
  );
};

export default memo(MegaMenu);
