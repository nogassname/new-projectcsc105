import React from "react";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<Router>
			<div>
				<Navbar></Navbar>
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/list">
						<Todo />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
