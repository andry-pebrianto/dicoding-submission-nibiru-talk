import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import LoginInput from "../components/LoginInput";
import { loginProcess } from "../redux/auth/action";

export default function Login() {
  const dispatch = useDispatch();

  const login = ({ email, password }) => {
    dispatch(loginProcess({ email, password }));
  };

  return (
    <>
      <Header />
      <main className="container">
        <h1 style={{ marginBottom: "5px" }}>Login</h1>
        <LoginInput login={login} />
        <p style={{ marginTop: "10px" }}>
          Belum punya akun? <Link to="/register">Daftar di sini.</Link>
        </p>
      </main>
    </>
  );
}
