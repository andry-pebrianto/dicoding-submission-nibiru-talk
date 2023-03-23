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
          {moment(detailThread?.createdAt).startOf("hour").fromNow()} oleh{" "}
          <span>{detailThread?.owner?.name}</span>
        </p>
      </span>
    </div>
  );
}
