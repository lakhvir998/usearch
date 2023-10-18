import React from "react";

import HomepageSectionContainer from "./HomepageSectionContainer";

import "./HomepageCustomSearch.scss";

const HomepageDatasets = () => {
  return (
    <HomepageSectionContainer
      className="data-archieve"
      title="Get Access To Usearch’s Web Data Archive"
      subtitle="Access billions of web pages and news articles in Usearch’s data archive."
      text="The Usearch data archive contains billions of web pages and news articles. It contains data in a machine readable format, including the title, description and full text of every webpage published since 2008."
      action={{
        text: "Explore Data Archive",
        actionName: "Button Click - Explore Datasets Archive",
        url: "/data-archive",
      }}
      // img={
      //   <img
      //     width="533"
      //     height="410"
      //     src={`${process.env.REACT_APP_CLOUDFRONT_URL}/homepage/image_5.svg`}
      //     alt="Get Access To Usearch’s Web Data Archive"
      //   />
      // }
    />
  );
};

export default React.memo(HomepageDatasets);
