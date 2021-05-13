import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faListUl, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Cookies from "js-cookie";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginCheck = () => {
    console.log("Test");
    const cookie = JSON.parse(Cookies.get("user") || "{}");
    if (cookie.username) {
      setUsername(cookie.username);
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    loginCheck();
  }, []);

  const logout = async () => {
    Cookies.remove("user");
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div className="navbar">
      <h1 className="navbar-name">
        <i class="fab fa-slack"></i> WEBLIST.COM
      </h1>
      <div className="navbar-nav">
        {isLoggedIn ? (
          <>
            <Link to="/login" onClick={logout}>
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{ marginRight: "10px" }}
              />
              LOGOUT
            </Link>
            <Link onClick={handleClick}>
              <FontAwesomeIcon
                icon={faListUl}
                style={{ marginRight: "10px" }}
              />
              LIST
            </Link>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/list");
                }}
              >
                All todos
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/incomplete");
                }}
              >
                Incomplete
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  history.push("/complete");
                }}
              >
                Completed
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Link to="/login">
              <FontAwesomeIcon
                icon={faSignInAlt}
                style={{ marginRight: "10px" }}
              />
              LOGIN
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
