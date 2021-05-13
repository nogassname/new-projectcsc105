import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import { Grid } from "@material-ui/core";
import axios from "axios";
import Cookies from "js-cookie";

const Incomplete = () => {
  const [todos, setTodos] = useState({ incomplete: [] });

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
      `http://localhost:8080/todo/incomplete?user_id=${cookie()}`
    );
    setTodos(all.data);
  };

  return (
    <div className="App">
      <div>
        <h1>Incompleted</h1>
      </div>
      <Grid style={{ width: "1000px", margin: "auto" }} container spacing={3}>
        {todos.incomplete.map((el) => (
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

export default Incomplete;
