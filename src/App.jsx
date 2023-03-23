import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { HashLoader } from "react-spinners";
import "./App.css";
import Register from "./pages/Register";
import Threads from "./pages/Threads";
import Detail from './pages/Detail';
import Login from "./pages/Login";
import Add from './pages/Add';
import { authProcess } from "./redux/auth/action";

export default function App() {
  const { auth } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to preload app
    dispatch(authProcess());
  }, [dispatch]);

  if (auth.isLoading) {
    return (
      <div className="loading">
        <HashLoader color="#371691" size={100} loading={auth.isLoading} />
      </div>
    );
  }

  if (auth.data === null) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Threads />} />
      <Route path="/thread/:id" element={<Detail />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
}
