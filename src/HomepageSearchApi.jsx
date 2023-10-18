import React from "react";
import HomepageSectionContainer from "./HomepageSectionContainer";

import "./HomepageSearchApi.scss";

const HomepageSearchApi = () => {
  return (
    <HomepageSectionContainer
      title="Search API"
      subtitle="The gateway to the entire web."
      text="Enrich your app or website with data and content from billions
      of webpages, news articles and images with a simple API call.
      Integrate advanced search capabilities in minutes."
      action={{
        text: "Explore Search API",
        actionName: "Button Click - Explore Search API",
        url: "/web-search-api",
      }}
      isReversed={false}
      img={
        <img
          width="552"
          height="453"
          src={`${process.env.REACT_APP_CLOUDFRONT_URL}/homepage/image_3.webp`}
          alt="Search API"
        />
      }
    />
  );
};

export default React.memo(HomepageSearchApi);
