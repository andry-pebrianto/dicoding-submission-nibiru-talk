import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { loginProcess } from "../redux/auth/action";

function LoginInput() {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginProcess({ email, password }));
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
