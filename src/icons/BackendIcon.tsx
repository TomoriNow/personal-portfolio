import React, { SVGProps } from "react";

const BackendIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="coding"
    >
      <rect width="20" height="20" x="2" y="2" fill="#fff"></rect>
      <path fill="#292932" d="M23,23H1V1H23ZM3,21H21V3H3Z"></path>
      <polygon
        fill="#b9d9f4"
        points="21 5 11 5 9 7 3 7 3 3 21 3 21 5"
      ></polygon>
      <rect width="2" height="2" x="5" y="9" fill="#0084f0"></rect>
      <rect width="6" height="2" x="9" y="9" fill="#292932"></rect>
      <rect width="2" height="2" x="7" y="13" fill="#0084f0"></rect>
      <rect width="8" height="2" x="11" y="13" fill="#292932"></rect>
      <rect width="2" height="2" x="7" y="17" fill="#0084f0"></rect>
      <rect width="6" height="2" x="11" y="17" fill="#292932"></rect>
    </svg>
  );
};

export default BackendIcon;
