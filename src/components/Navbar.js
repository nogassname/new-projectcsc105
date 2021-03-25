import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faListUl, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-name">
        <i class="fab fa-slack"></i> WEBLIST.COM
      </h1>
      <div className="navbar-nav">
        <Link to="/login">
          <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: "10px" }} />
          LOGIN
        </Link>
        <Link to="/list">
          <FontAwesomeIcon icon={faListUl} style={{ marginRight: "10px" }} />
          LIST
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
