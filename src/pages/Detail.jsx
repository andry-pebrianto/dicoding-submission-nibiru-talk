import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Header from "../components/Header";
import Comments from "../components/Comments";
import DetailThreadItem from "../components/DetailThreadItem";
import { getDetailThreadProcess } from "../redux/detailThread/action";
import CommentForm from "../components/CommentForm";

export default function Detail() {
  const params = useParams();
  const { detailThread } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailThreadProcess(params.id));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="container">
        {detailThread.isLoading ? (
          <div style={{ margin: "20px 0px" }}>
            <BeatLoader />
          </div>
        ) : (
          <>
            <DetailThreadItem detailThread={detailThread.data} />
            <CommentForm id={params.id} />
            <Comments comments={detailThread.data.comments} />
          </>
        )}
      </main>
    </>
  );
}
