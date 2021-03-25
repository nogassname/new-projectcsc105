import { IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./Cards.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const colorMap = {
  yellow: "#fac92c",
  blue: "#2178ae",
  red: "rgb(206, 48, 20)",
  black: "rgb(68, 64, 105)",
  green: "rgb(116, 153, 93)",
};

const Cards = ({ color, date, text, id, setA }) => {
  const del = () => {
    setA((a) => {
      return a.filter((el) => el.id !== id);
    });
  };

  return (
    <div className={`card ${color}`} style={{ position: "relative" }}>
      <IconButton
        onClick={del}
        style={{ position: "absolute", bottom: "20px", right: "10px" }}
      >
        <FontAwesomeIcon icon={faTrashAlt} size="2x" />
      </IconButton>
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          color: "white",
          borderRadius: "50px",
          backgroundColor: colorMap[color],
        }}
      >
        {moment(date).format("MMMM Do YYYY")}
      </Typography>
      <Typography variant="h6">{text}</Typography>
    </div>
  );
};

export default Cards;
