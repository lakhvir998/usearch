import React, { useEffect, useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import cx from "classnames";
import { isMobile } from "react-device-detect";

import "./AnimatedContent.scss";

const AnimatedContent = ({
  children,
  duration = 100,
  withoutAnimation = false,
}) => {
  const myRef = useRef();
  const [animated, setAnimated] = useState(false);

  const { inViewport } = useInViewport(myRef);

  useEffect(() => {
    if (!animated) {
      handleAnimation(inViewport);
    }
  }, [inViewport]);

  const handleAnimation = (isAnimated) => {
    setAnimated(isAnimated);
  };

  return (
    <div
      ref={myRef}
      className={cx({
        "usearch__animated-text": !isMobile,
        animated,
        "without-animation": withoutAnimation,
      })}
      style={{
        transition: `${duration}ms all ease`,
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(AnimatedContent);
