import React from "react";

const IconArrow = ({ width = "14", fill = "#333333", className = "" }) => {
  return (
    <svg className={className} width={width} viewBox="0 0 14 8" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.450524 7.46896C0.168603 7.16549 0.186071 6.69093 0.48954 6.40901L6.48954 0.835048C6.77734 0.567688 7.22267 0.567688 7.51047 0.835048L13.5105 6.40901C13.8139 6.69093 13.8314 7.16549 13.5495 7.46896C13.2676 7.77242 12.793 7.78989 12.4895 7.50797L7 2.40822L1.51047 7.50797C1.207 7.78989 0.732445 7.77242 0.450524 7.46896Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconArrow;
