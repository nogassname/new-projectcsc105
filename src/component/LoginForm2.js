import React from "react";

const LoginForm2 = () => {
  return (
    <form style={{ flex: 1 }} id="register" class="input-group">
      <input type="text" class="input-field" placeholder="User Id" required />
      <input type="email" class="input-field" placeholder="Email Id" required />
      <input
        type="password"
        class="input-field"
        placeholder="Enter Password"
        required
      />
      <input type="checkbox" class="check-box" />
      <span>I agree to the terms & conditions</span>
      <button type="submit" class="submit-btn">
        Register
      </button>
    </form>
  );
};

export default LoginForm2;
