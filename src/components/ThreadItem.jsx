import React from "react";
import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import moment from "moment/moment";

function ThreadItem({ thread }) {
  const {
    id, title, body, createdAt, avatar, name, totalComments
  } = thread;

  return (
    <div className="thread">
      <h2 style={{ marginBottom: "5px" }}>
        <Link to={`/thread/${id}`}>{title}</Link>
      </h2>
      <div style={{ marginBottom: "5px" }}>{HTMLReactParser(body)}</div>
      <span
        className="credit"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>
          {moment(createdAt).format('Do MMMM YYYY, h:mm:ss a')} oleh{" "}
          <img
            style={{ marginLeft: "8px" }}
            src={avatar}
            alt="Profile"
          />
          <span style={{ marginLeft: "4px" }}>{name}</span>
        </p>
        <p>{totalComments} Komentar</p>
      </span>
    </div>
  );
}

export default ThreadItem;
