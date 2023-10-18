import React, { memo } from "react";
import LazyLoad from "react-lazyload";
import cx from "classnames";

import HomepageCurve from "./HomepageCurve";
import ArrowIcon from "./IconArrowLeft";
import ButtonAction from "./Button";
import "./HomepageSectionContainer.scss";

const HomepageSectionContainer = ({
  className = "",
  isReversed = false,
  title,
  subtitle,
  text,
  action,
  img,
  showCurve = false,
  renderH1 = false,
  lazyLoad = true,
}) => {
  return (
    <div
      className={cx({
        "usearch__homepage__section-container__container": true,
        [className]: true,
        "background-gray": !isReversed,
      })}
    >
      {showCurve && (
        <div className="usearch__homepage__section-container__background-curve">
          <HomepageCurve />
        </div>
      )}

      <div className="container narrow">
        <div
          className={cx({
            "usearch__homepage__section-container__inner": true,
            reversed: isReversed,
          })}
        >
          <div className="usearch__homepage__section-container__content">
            {renderH1 ? <h1>{title}</h1> : <h2>{title}</h2>}
            <h3>{subtitle}</h3>
            <p>{text}</p>
            <div className="usearch__homepage__section-container__action">
              <ButtonAction
                path={action.url}
                actionName={action.actionName}
                bgColor="#2C44FF"
                textColor="#fff"
              >
                <span style={{ maxWidth: 200 }}>{action.text}</span>
                <span className="icon">
                  <ArrowIcon width={15} fill="#fff" />
                </span>
              </ButtonAction>
            </div>
          </div>
          <div className="usearch__homepage__section-container__image-container">
            {lazyLoad ? <LazyLoad once>{img}</LazyLoad> : img}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(HomepageSectionContainer);
