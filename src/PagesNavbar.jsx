import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";

export function makeFriendlyURL(url) {
  if (!url) return;
  return url
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export const pageTypes = {
  SEARCH_API: "SEARCH_API",
  KEYWORD_ANALYSIS: "KEYWORD_ANALYSIS",
  CUSTOM_SEARCH: "CUSTOM_SEARCH",
  ABOUT_US: "ABOUT_US",
  SYNTAX_SEARCH: "SYNTAX_SEARCH",
  CONTEXTUAL_GRAPH: "CONTEXTUAL_GRAPH",
  MONITORING: "MONITORING",
  DATA_FEEDS: "DATA_FEEDS",
};

export const pagesWithTabs = {
  [pageTypes.CONTEXTUAL_GRAPH]: [
    {
      name: "Contextual Associations",
      url: "/",
    },
    {
      name: "Contextual Clustering",
      url: "/",
    },
    {
      name: "Webpage Analysis",
      url: "/",
    },
    {
      name: "Contextual Connectivity",
      url: "/",
    },
  ],
  [pageTypes.SEARCH_API]: [
    // {
    //   name: "Usearch Search Engine",
    //   url: SEARCH_ENGINE,
    //   img: WebSearchApiLogo,
    // },
    {
      name: "Web Search API",
      url: "/",
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/web-search-api.svg`,
    },
    {
      name: "News API",
      url: "",
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/news-api.svg`,
    },
    {
      name: "Image Search API",
      url: "",
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/image-search-api.svg`,
    },
    {
      name: "AutoSuggest API",
      url: "/autosuggest-api",
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/autosuggest-api.svg`,
    },
    {
      name: "Spell Check API",
      url: "",
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/spell-check-api.svg`,
    },
    {
      name: "Related Search",
      url: "",
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/related-searches.svg`,
    },
  ],
  [pageTypes.DATA_FEEDS]: [
    {
      name: "Lease Transactions",
      url: `/?c=data-feeds`,
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/company-locations/lease-transactions.svg`,
    },
    {
      name: "Sale Transactions",
      url: `/?c=data-feeds`,
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/company-locations/sale-transaction.svg`,
    },
    {
      name: "Major Hiring",
      url: `/?c=data-feeds`,
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/company-locations/major-hiring.svg`,
    },
    {
      name: "Layoffs",
      url: `/?c=data-feeds`,
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/company-locations/layoff.svg`,
    },
    {
      name: "Warn Acts",
      url: `/?c=data-feeds`,
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/company-locations/warn-acts.svg`,
    },
  ],
  [pageTypes.KEYWORD_ANALYSIS]: [
    {
      name: "Similar Queries",
      url: "",
    },
    {
      name: "Popular Sites for Query",
      url: "",
    },
  ],
  [pageTypes.CUSTOM_SEARCH]: [
    {
      name: "Custom Search",
      url: "",
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/custom-search__custom-search.svg`,
    },
    {
      name: "Platform",
      url: `/platform`,
      img: `${process.env.REACT_APP_CLOUDFRONT_URL}/megamenu/custom-search__platform.svg`,
    },
  ],
  [pageTypes.ABOUT_US]: [
    {
      name: "About Us",
      url: "",
    },
    {
      name: "Get a demo",
      url: "",
    },
  ],
  [pageTypes.SYNTAX_SEARCH]: [
    {
      name: "Search Syntax",
      url: "",
    },
  ],
  [pageTypes.MONITORING]: [
    {
      name: "Web Monitoring",
      url: "",
    },
    {
      name: "Popular Feeds",
      url: "",
    },
  ],
};

const PagesNavbar = ({
  activeTab = "",
  type = pageTypes.SEARCH_API,
  isCentered = false,
  searchEngines,
}) => {
  const [tabs, setTabs] = useState(pagesWithTabs[type]);

  useEffect(() => {
    setTabs(pagesWithTabs[type]);
  }, [type]);

  useEffect(() => {
    addSubUrlsToSearchEngine();
  }, [searchEngines]);

  const addSubUrlsToSearchEngine = () => {
    const searchEnginesRoutes = [];
    let tabWithSubUrls = [];
    if (searchEngines && searchEngines.length > 0) {
      searchEngines.map((engine) => {
        searchEnginesRoutes.push(`/${makeFriendlyURL(engine.name)}`);
      });
    }

    if (searchEnginesRoutes.length > 0 && tabs && tabs.length > 0) {
      tabWithSubUrls = tabs.map((tab) => {
        if (tab.name === "Popular Search Engines") {
          tab.subUrls = searchEnginesRoutes;
        }
        return tab;
      });

      setTabs(tabWithSubUrls);
    }
  };

  return (
    <div className={`usearch__blog__pages-navbar`}>
      <div className="container">
        <div
          className={`usearch__blog__pages-navbar__wrapper ${
            isCentered ? "centered" : ""
          }`}
        >
          <div className="usearch__blog__pages-navbar-inner">
            <nav>
              <ul>
                {tabs &&
                  tabs.map((tab) => {
                    return (
                      <li
                        className={
                          tab.url + "/" === activeTab ||
                          tab.url === activeTab ||
                          (tab.subUrls && tab.subUrls.includes(activeTab)) ||
                          (activeTab.includes("quick-start-guide") &&
                            tab.url.includes("quick-start-guide"))
                            ? "active"
                            : "inactive"
                        }
                        key={tab.name}
                      >
                        {!tab.href ? (
                          <Link to={tab.url}>{tab.name}</Link>
                        ) : (
                          <a rel="noopener noreferrer" target="_blank" href="/">
                            {tab.name}
                          </a>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PagesNavbar);
