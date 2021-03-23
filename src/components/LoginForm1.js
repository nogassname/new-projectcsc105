import React from "react";

const LoginForm1 = () => {
  return (
    <form
      style={{
        flex: 1,
      }}
      id="login"
      class="input-group"
    >
      <input type="text" class="input-field" placeholder="User Id" required />
      <input
        type="password"
        class="input-field"
        placeholder="Enter Password"
        required
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <input type="checkbox" class="check-box" />
        <span>Remember Password</span>
      </div>
      <button type="submit" class="submit-btn">
        Log in
      </button>
    </form>
  );
};

export default LoginForm1;
