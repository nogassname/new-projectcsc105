import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Grid } from "@material-ui/core";
import axios from "axios";
import Cookies from "js-cookie";
import "./Complete.css";

const Complete = () => {
  const [todos, setTodos] = useState({ complete: [] });

  const cookie = () => {
    const parseCookie = JSON.parse(Cookies.get("user" || "{}"));
    if (parseCookie.username) {
      return parseCookie.user_id;
    }
    return 0;
  };

  useEffect(() => {
    todoListAll();
    cookie();
  }, []);

  const todoListAll = async () => {
    const all = await axios.get(
      `http://localhost:8080/todo/complete?user_id=${cookie()}`
    );
    setTodos(all.data);
  };

  return (
    <div className="App">
      <div className="boxboxtextcomplete">
        <div className="boxtextcomplete">
          <h1>
            <i class="far fa-check-circle"></i> Completed{" "}
            <i class="far fa-check-circle"></i>
          </h1>
        </div>
      </div>
      <Grid style={{ width: "1000px", margin: "auto" }} container spacing={3}>
        {todos.complete.map((el) => (
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

export default Complete;
