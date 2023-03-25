import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RegisterInput from "../components/RegisterInput";
import { registerProcess } from "../redux/auth/action";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = ({ name, email, password }) => {
    dispatch(registerProcess({ name, email, password }));

    navigate("/");
  };

  return (
    <>
      <Header />
      <main className="container">
        <h1 style={{ marginBottom: "5px" }}>Register</h1>
        <RegisterInput register={register} />
      </main>
    </>
  );
}
