import React from "react";
import Header from "../components/Header";
import ThreadInput from "../components/ThreadInput";

export default function Add() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Buat Diskusi Baru</h1>
        <ThreadInput />
      </main>
    </>
  );
}
