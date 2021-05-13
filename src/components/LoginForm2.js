import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

const LoginForm2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const router = useHistory();
  const register = async () => {
    await axios.post(
      "http://localhost:8080/account/register",
      qs.stringify({
        username: username,
        password: password,
        email: email,
      })
    );
    router.push("/");
  };

  return (
    <form style={{ flex: 1 }} id="register" class="input-group">
      <input
        type="text"
        class="input-field"
        placeholder="Username"
        onChange={(ev) => setUsername(ev.target.value)}
        required
      />
      <input
        type="email"
        class="input-field"
        placeholder="Email"
        onChange={(ev) => setEmail(ev.target.value)}
        required
      />
      <input
        type="password"
        class="input-field"
        placeholder="Password"
        onChange={(ev) => setPassword(ev.target.value)}
        required
      />
      <input type="checkbox" class="check-box" />
      <span>I agree to the terms & conditions</span>
      <button type="submit" class="submit-btn" onClick={register}>
        Register
      </button>
    </form>
  );
};

export default LoginForm2;
