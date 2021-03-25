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
  const [todos, setTodos] = useState([]);

  //   const aaa = [
  //     {
  //	        id:"1234"
  //       color: "yellow",
  //       date: "hello",
  //       text: "hello world",
  //     },
  //     {
  //       color: "black",
  //       date: "abcd",
  //       text: "ijklmnop",
  //     },
  //   ];

  return (
    <div className="App">
      <Input setA={setTodos} />
      <Grid style={{ width: "1000px", margin: "auto" }} container spacing={3}>
        {todos.map((el) => (
          <Grid item xs={4} key={Math.random()}>
            <Cards
              color={el.color}
              date={el.date}
              text={el.text}
              id={el.id}
              setA={setTodos}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Todo;
