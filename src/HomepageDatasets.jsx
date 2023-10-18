import React from "react";

import HomepageSectionContainer from "./HomepageSectionContainer";

import "./HomepageCustomSearch.scss";

const HomepageDatasets = () => {
  return (
    <HomepageSectionContainer
      isReversed={true}
      showCurve
      title="Market Signals and Data Feeds"
      subtitle="Generate structured datasets from millions of public sources."
      text="Experience the power of AI for automatic dataset generation. Create datasets from all over the internet automatically. Bring in data from more than 80 million websites, pdf and csv files. Usearch reinvents dataset generation, converting the web into the largest structured database in the world."
      action={{
        text: "Explore Data Feeds",
        actionName: "Button Click - Explore Market Signals and Data Feeds",
        url: "/market-signals-and-data-feeds",
      }}
      img={
        <img
          width="510"
          height="410"
          src={`${process.env.REACT_APP_CLOUDFRONT_URL}/homepage/image_4.svg`}
          alt="Data Feeds"
        />
      }
    />
  );
};

export default React.memo(HomepageDatasets);
