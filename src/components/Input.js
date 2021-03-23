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

const Input = ({ addPost }) => {
	const [currentDate, setCurrentDate] = useState(new Date());
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
						label="Standard"
						multiline
						rowsMax={4}
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
						<MenuItem onClick={handleClose}>Profile</MenuItem>
						<MenuItem onClick={handleClose}>My account</MenuItem>
						<MenuItem onClick={handleClose}>Logout</MenuItem>
					</Menu>
				</div>
				<div>
					<Fab
						color="primary"
						aria-label="add"
						style={{
							boxShadow: "none",
							width: "36px",
							height: "36px",
							marginLeft: "5px",
							backgroundColor: "white",
							border: "1px solid black",
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
