import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input.css";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Button, Fab, Menu, MenuItem, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import qs from "qs";
import moment from "moment";

const Input = ({ setA, cookie }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [standard, setStandard] = useState("");
  const [color, setColor] = useState("black");

  const handleDateChange = (date) => {
    setCurrentDate(date);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const add = async () => {
    await axios.post(
      `http://localhost:8080/todo/create`,
      qs.stringify({
        user_id: cookie,
        date: moment(currentDate).format("YYYY-MM-DD"),
        info: standard,
        color: color,
      })
    );
    window.location.reload(false);
  };

  return (
    <div className="Input">
      <div className="Input_header">Create List</div>
      <div className="listbox">
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={currentDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="listbox-text">
          <TextField
            style={{ width: "600px" }}
            label="Type your todo list"
            multiline
            rowsMax={4}
            onChange={(text) => {
              setStandard(text.target.value);
            }}
          />
        </div>
        <div className="listbox-color">
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleClick}
          >
            COLOR
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                setColor("black");
                handleClose();
              }}
            >
              <span style={{ color: "rgb(68, 64, 105)" }}>⬤ &nbsp; </span> Black
            </MenuItem>
            <MenuItem
              onClick={() => {
                setColor("red");
                handleClose();
              }}
            >
              <span style={{ color: "rgb(206, 48, 20)" }}>⬤ &nbsp; </span> Red
            </MenuItem>
            <MenuItem
              onClick={() => {
                setColor("blue");
                handleClose();
              }}
            >
              <span style={{ color: "#2178ae" }}>⬤ &nbsp; </span> Blue
            </MenuItem>
            <MenuItem
              onClick={() => {
                setColor("green");
                handleClose();
              }}
            >
              <span style={{ color: "rgb(116, 153, 93)" }}>⬤ &nbsp; </span>{" "}
              Green
            </MenuItem>
            <MenuItem
              onClick={() => {
                setColor("yellow");
                handleClose();
              }}
            >
              <span style={{ color: "#fac92c" }}>⬤ &nbsp; </span> Yellow
            </MenuItem>
          </Menu>
        </div>
        <div>
          <Fab
            className="listbox-buttonadd"
            color="primary"
            aria-label="add"
            style={{
              boxShadow: "none",
              width: "36px",
              height: "36px",
              marginLeft: "5px",
              backgroundColor: "white",
              border: "1px solid black",
              marginBottom: "8px",
            }}
            onClick={() => {
              if (standard != "") {
                add();
              }
            }}
          >
            <AddIcon style={{ color: "black" }} />
          </Fab>
        </div>
      </div>
    </div>
  );
};

Input.propType = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
