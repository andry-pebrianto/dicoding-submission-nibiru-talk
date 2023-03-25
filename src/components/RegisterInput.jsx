import React from "react";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();

    register({ name, email, password });
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
