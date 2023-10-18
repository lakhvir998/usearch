import React from "react";
import HomepageSectionContainer from "./HomepageSectionContainer";
import "./HomepageQueryKeywoards.scss";

const HomepageQueryKeywoards = () => {
  return (
    <HomepageSectionContainer
      className="query-keywoards"
      title="Market and Competitive Intelligence Platform"
      subtitle="A KPI-driven market and competitive intelligence platform for all your business needs."
      text="Get strategic real-time updates on your competitors and customers across relevant industry sectors."
      action={{
        text: "Explore Platform",
        actionName: "Button Click - Explore Platform",
        url: "/market-and-competitive-intelligence-platform",
      }}
      lazyLoad={false}
      //isReversed={true}
      // img={
      //   <img
      //     fetchpriority="high"
      //     width={400}
      //     height={286}
      //     src={`${process.env.REACT_APP_CLOUDFRONT_URL}/homepage/image_6.webp`}
      //     alt="Market and Competitive Intelligence Platform"
      //   />
      // }
    />
  );
};

export default React.memo(HomepageQueryKeywoards);
