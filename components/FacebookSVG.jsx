import * as React from "react";

const FacebookSVG = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 30 30"
      {...props}
    >
      <path d="M17 2v4h-2c-.69 0-1 .81-1 1.5V10h3v4h-3v8h-4v-8H7v-4h3V6a4 4 0 0 1 4-4h3Z" />
    </svg>
  );
};
export default FacebookSVG;
