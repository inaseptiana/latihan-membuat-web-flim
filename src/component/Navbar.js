import React from "react";
import { Link } from "react-router-dom";
import second from "react-bootstrap";

const Navbar = () => {
  return (
    <h1>
      <Link to="/api"> Flim </Link>
      <Link to="/tv"> TV </Link>
      <Link to="/register"> Daftar </Link>
    </h1>
  );
};

export default Navbar;
