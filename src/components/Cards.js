import { IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./Cards.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const colorMap = {
  yellow: "rgb(245, 197, 92)",
  blue: "blue",
  red: "red",
  black: "black",
  green: "green",
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
