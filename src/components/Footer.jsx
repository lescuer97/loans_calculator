import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex flex-row md:flex-col justify-end border-t-1 pin-b  ">
      <Link to="/" className="mr-1 md:m-0">
        Home
      </Link>{" "}
      <p className="contents  md:hidden"> | </p>{" "}
      <Link to="/project" className="mx-1 md:m-0">
        The Project{" "}
      </Link>{" "}
      <p className="contents md:hidden"> | </p>{" "}
      <Link to="blog" className="ml-1 md:m-0 ">
        Blog
      </Link>
    </footer>
  );
};

export default Footer;
