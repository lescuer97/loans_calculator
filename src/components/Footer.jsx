import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex flex-row md:flex-col justify-end border-t-1 pin-b  ">
      <a className="mr-1">Home</a> <p className="contents  md:hidden"> | </p>{" "}
      <a className="mx-1"> The Project </a>{" "}
      <p className="contents md:hidden"> | </p> <a className="ml-1">Blog</a>
    </footer>
  );
};

export default Footer;
