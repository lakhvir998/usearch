import React from "react";

import HomepageSectionContainer from "./HomepageSectionContainer";

import "./HomepageHero.scss";

const HomepageHero = () => {
  return (
    <HomepageSectionContainer
      className="hero"
      title="Enhanced Business Location Data with Real Time Alerts"
      renderH1={true}
      subtitle="Includes all business locations, relevant property information and real-time dynamic signals."
      text=""
      action={{
        text: "Try Us For Free",
        actionName: "Button Click - Try Us For Free",
        url: "/company-locations",
      }}
      isReversed={true}
      // img={
      //   <img
      //     width="626"
      //     height="442"
      //     src={`${process.env.REACT_APP_CLOUDFRONT_URL}/homepage/image_1_v2_2.webp`}
      //     alt="Enhanced Business Location Data with Real Time Alerts"
      //   />
      // }
    />
  );
};

export default React.memo(HomepageHero);
