import React from "react";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import {
  getDetailThreadProcess,
  postCommentProcess,
} from "../redux/detailThread/action";

export default function CommentForm({ id }) {
  const dispatch = useDispatch();
  const [comment, setComment, setCommentDirect] = useInput("");

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(postCommentProcess(id, comment));

    setCommentDirect("");

    dispatch(getDetailThreadProcess(id));
  };

  return (
    <div className="thread-form">
      <p className="title">Beri Komentar</p>
      <form onSubmit={onSubmit}>
        <textarea cols="30" rows="8" onChange={setComment} value={comment} />
        <button className="button" type="submit">
          Kirim
        </button>
      </form>
    </div>
  );
}
