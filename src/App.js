import React from "react";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { Box } from "@material-ui/core";
import Complete from "./components/Complete";
import Incomplete from "./pages/Incomplete";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Box marginTop="140px">
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
            <Route path="/complete">
              <Complete />
            </Route>
            <Route path="/incomplete">
              <Incomplete />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  );
}
