import React from "react";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { Box } from "@material-ui/core";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Box marginTop="80px" padding="20px">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/list">
              <Todo />
            </Route>

            <Route path="/card">
              <Cards />
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  );
}
