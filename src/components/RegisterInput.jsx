import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { registerProcess } from "../redux/auth/action";

function RegisterInput() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(registerProcess({ name, email, password }));

    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
      />
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
        Register
      </button>
    </form>
  );
}

export default RegisterInput;
