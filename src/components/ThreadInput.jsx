import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { postThreadsProcess } from "../redux/threads/action";

export default function ThreadInput() {
  const [title, setTitle] = useInput("");
  const [category, setCategory] = useInput("");
  const [body, setBody] = useInput("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(postThreadsProcess({ title, category, body }));

    navigate("/");
  };

  return (
    <div className="thread-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          onChange={setTitle}
          placeholder="Title"
        />
        <input
          type="text"
          value={category}
          onChange={setCategory}
          placeholder="Category"
        />
        <textarea cols="30" rows="8" onChange={setBody} value={body} />
        <button className="button" type="submit">
          Buat
        </button>
      </form>
    </div>
  );
}
