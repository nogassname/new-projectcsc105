import React, { useState } from "react";
import Login from "../pages/Login";
import axios from "axios";
import qs from "qs";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const LoginForm1 = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  const userChange = (event) => {
    setUser(event.target.value);
  };

  const login = async () => {
    const islogin = await axios.post(
      "http://localhost:8080/account/login",
      qs.stringify({
        username: user,
        password: password,
      })
    );
    if (islogin.data.isLogin) {
      const data = JSON.stringify({
        user_id: islogin.data.userid,
        username: islogin.data.username,
      });
      Cookies.set("user", data);
      window.location.href = "/";
    }
  };
  const [password, setPassword] = useState("");
  const passwordChange = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div
      style={{
        flex: 1,
      }}
      id="login"
      class="input-group"
    >
      <input
        type="text"
        class="input-field"
        placeholder="Username"
        required
        onChange={userChange}
      />
      <input
        type="password"
        class="input-field"
        placeholder="Password"
        required
        onChange={passwordChange}
        onKeyPress={(ev) => {
          if (ev.key == "Enter") {
            login();
          }
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      ></div>
      <button class="submit-btn" onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default LoginForm1;
