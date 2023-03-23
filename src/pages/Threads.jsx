import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import Header from "../components/Header";
import ThreadItem from "../components/ThreadItem";
import { getThreadsProcess } from "../redux/threads/action";

export default function Threads() {
  const { threads } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThreadsProcess());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="container">
        <h1>Daftar Diskusi</h1>

        {threads.isLoading ? (
          <div style={{ margin: "20px 0px" }}>
            <BeatLoader />
          </div>
        ) : (
          <>
            {threads.data.map((thread) => (
              <ThreadItem key={thread.id} thread={thread} />
            ))}
          </>
        )}
      </main>
    </>
  );
}
