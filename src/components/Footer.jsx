import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex flex-row ml-3 py-2 ">
      <Link to="/" className="mr-1 md:m-0">
        Home
      </Link>{" "}
      <p className="contents"> | </p>{" "}
      <Link to="/project" className="mx-1">
        The Project{" "}
      </Link>{" "}
      <p className="contents"> | </p>{" "}
      <Link to="blog" className="ml-1 ">
        Portafolio
      </Link>
    </footer>
  );
};

export default Footer;
