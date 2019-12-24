import React from "react";

const CommentBox = () => {
  return (
    <div className="comment-box">
      <div className="comment-box-avatar">
        <img src="https://via.placeholder.com/70x70" alt="Test" />
      </div>
      <div className="comment-box-content">
        <div className="comment-name">
          Thảo Trương <div className="time">1 giờ trước</div>
        </div>
        <div className="comment-text">Thái nguyên có hàng không vậy?</div>
        <div className="comment-status">
          <a style={{ cursor: "pointer" }}>Trả lời</a>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
