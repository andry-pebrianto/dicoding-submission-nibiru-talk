import React from "react";
import HTMLReactParser from "html-react-parser";
import moment from "moment/moment";

export default function DetailThreadItem({ detailThread }) {
  return (
    <div className="thread-detail">
      <h1>{detailThread?.title}</h1>
      <div className="thread-title">{HTMLReactParser(detailThread?.body)}</div>
      <span className="credit">
        <p>
          {moment(detailThread.createdAt).format('Do MMMM YYYY, h:mm:ss a')} oleh{" "}
          <img
            style={{ marginLeft: "8px" }}
            src={detailThread?.owner?.avatar}
            alt="Profile"
          />
          <span style={{ marginLeft: "4px" }}>{detailThread?.owner?.name}</span>
        </p>
      </span>
    </div>
  );
}
