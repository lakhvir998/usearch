import React from "react";

import "./HomepageCounter.scss";

const USEARCH_NUMBERS = [
  {
    num: "5B",
    text: "Total Webpages",
  },
  {
    num: "10K",
    text: "Custom Search Engines Built",
  },
  {
    num: "100B",
    text: "Processed API Search Requests",
  },
  {
    num: "5M+",
    text: "Signals Delivered",
  },
];
const HomepageCounter = () => {
  return (
    <div className="usearch__homepage__counter-container">
      <div className="container narrow">
        <div className="usearch__homepage__counter-wrapper">
          <h2>Usearch in Numbers</h2>
          <div className="usearch__homepage__counter-inner">
            {USEARCH_NUMBERS.map((v) => (
              <div key={v.text} className="usearch__homepage__counter-item">
                <div className="content">
                  <span className="counter-number">{v.num}</span>
                </div>
                <span className="text">{v.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HomepageCounter);
