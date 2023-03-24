import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div style={{ margin: "25px" }}>
        <h1 style={{ marginBottom: "20px" }}>404 Page Not Found</h1>
        <Link to="/">Back To Home</Link>
      </div>
    </>
  );
}
