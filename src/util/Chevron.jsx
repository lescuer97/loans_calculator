import React from "react";

const Chevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevrons-down place-self-center md:transform md:-rotate-90"
      width="100"
      height="100"
      viewBox="0 0 24 24"
      strokeWidth="0.5"
      stroke="#00abfb"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <polyline points="7 7 12 12 17 7" />
      <polyline points="7 13 12 18 17 13" />
    </svg>
  );
};

export default Chevron;
