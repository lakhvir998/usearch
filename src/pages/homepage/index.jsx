import React from "react";
import HomepageQueryKeywoards from "../../HomepageQueryKeywoards";
import CustomHelmet from "../../CustomHelmet";
import HomepageHero from "../../HomepageHero";
import HomepageDataArchive from "../../HomepageDataArchive";
import HomepageDatasets from "../../HomepageDatasets";
import HomepageSearchApi from "../../HomepageSearchApi";
import HomepageCounter from "../../HomepageCounter";

const HomepageV2 = () => {
  return (
    <div className="usearch__homepage main">
      <CustomHelmet
        title="Internet Search Technologies"
        description="Usearch is a new and independent internet search engine based on groundbreaking AI technology. Usearch gives API access to the search engine and all its features. Search from Billions of web pages, news articles, and images with a single API call. Build your own Custom Search engine using Usearch Custom Search. Get access to the most advanced Keyword Analysis tool."
      />
      <HomepageQueryKeywoards />
      <HomepageDatasets />
      <HomepageDataArchive />
      <HomepageHero />
      <HomepageSearchApi />
      <HomepageCounter />
    </div>
  );
};

export default HomepageV2;
