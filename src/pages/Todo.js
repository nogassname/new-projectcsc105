import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Post from "../components/Post";
import "../App.css";
import "./Todo.css";
import Cards from "../components/Cards";
import { Grid } from "@material-ui/core";

let id = 0;
const Todo = () => {
	const [posts, setPosts] = useState([]);

	return (
		<div className="App">
			<Input />
			<Grid style={{ width: "1000px", margin: "auto" }} container spacing={3}>
				<Grid item xs={4}>
					<Cards color="black" />
				</Grid>
				<Grid item xs={4}>
					<Cards color="red" />
				</Grid>
				<Grid item xs={4}>
					<Cards color="green" />
				</Grid>
				<Grid item xs={4}>
					<Cards color="yellow" />
				</Grid>
			</Grid>
		</div>
	);
};
export default Todo;
