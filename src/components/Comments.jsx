import React from "react";
import HTMLReactParser from "html-react-parser";
import moment from "moment/moment";

export default function Comments({ comments }) {
  return (
    <div className="comments">
      <h2 style={{ marginBottom: "15px" }}>Komentar ({comments.length})</h2>
      {comments?.map((comment) => (
        <div key={comment.id} className="comment-item">
          <div className="comment-top">
            <div className="comment-photo">
              <img src={comment.owner.avatar} alt="Profile" />
              <p style={{ marginLeft: "5px" }}>{comment.owner.name}</p>
            </div>
            <p>{moment(comment.createdAt).format('Do MMMM YYYY, h:mm:ss a')}</p>
          </div>
          <div style={{ marginTop: "3px", marginBottom: "5px" }}>
            {HTMLReactParser(comment.content)}
          </div>
        </div>
      ))}
    </div>
  );
}
