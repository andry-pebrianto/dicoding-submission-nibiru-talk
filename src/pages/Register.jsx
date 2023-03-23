import React from "react";
import Header from "../components/Header";
import RegisterInput from "../components/RegisterInput";

export default function Register() {
  return (
    <>
      <Header />
      <main className="container">
        <h1 style={{ marginBottom: "5px" }}>Register</h1>
        <RegisterInput />
      </main>
    </>
  );
}
