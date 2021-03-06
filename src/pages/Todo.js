import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import "../App.css";
import "./Todo.css";
import Cards from "../components/Cards";
import { Grid, withStyles } from "@material-ui/core";
import Cookies from "js-cookie";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState({ lists: [] });

  const cookie = () => {
    const parseCookie = JSON.parse(Cookies.get("user" || "{}"));
    if (parseCookie.username) {
      return parseCookie.user_id;
    }
    return 0;
  };

  useEffect(() => {
    todoListAll();
  }, []);

  const todoListAll = async () => {
    const all = await axios.get(
      `http://localhost:8080/todo/all?user_id=${cookie()}`
    );
    setTodos(all.data);
  };

  return (
    <div className="App">
      <Input setA={setTodos} cookie={cookie()} />
      <Grid style={{ width: "1000px", margin: "auto" }} container spacing={3}>
        {todos.lists.map((el) => (
          <Grid item xs={4}>
            <Cards
              color={el.color.toLowerCase()}
              date={el.date}
              text={el.info}
              id={el.todoid}
              status={el.status}
              refresh={todoListAll}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Todo;
