import { IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./Cards.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import qs from "qs";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const colorMap = {
  yellow: "#fac92c",
  blue: "#2178ae",
  red: "rgb(206, 48, 20)",
  black: "rgb(68, 64, 105)",
  green: "rgb(116, 153, 93)",
};

const Cards = ({ color, date, text, id, status, refresh }) => {
  const handleChange = async () => {
    await axios.post(
      `http://localhost:8080/todo/edit/status`,
      qs.stringify({
        todo_id: id,
        status: !status,
      })
    );

    console.log(status);

    refresh();
  };

  const del = async () => {
    console.log(id);
    try {
      await axios.post(
        `http://localhost:8080/todo/edit/delete`,
        qs.stringify({
          todo_id: id,
        })
      );
      refresh();
    } catch (err) {
      console.log(err);
    }
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
      <Typography variant="h6" style={{ marginTop: "15px" }}>
        {text}
      </Typography>
      <Checkbox
        checked={status}
        onChange={handleChange}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "10px",
        }}
      />
    </div>
  );
};

export default Cards;
