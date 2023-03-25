import React from "react";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button className="button" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginInput;
