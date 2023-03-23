import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import LoginInput from "../components/LoginInput";

export default function Login() {
  return (
    <>
      <Header />
      <main className="container">
        <h1 style={{ marginBottom: "5px" }}>Login</h1>
        <LoginInput />
        <p style={{ marginTop: "10px" }}>
          Belum punya akun? <Link to="/register">Daftar di sini.</Link>
        </p>
      </main>
    </>
  );
}
