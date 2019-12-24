import React, { Fragment, useState } from "react";

//css
import "./f-comment.css";

//comment
import Modal from "../modal/Modal";
import Error from "../error/Error";
import CommentBox from "../comment/Comment-Box";

const FComment = () => {
  const [showModal, setShowModal] = useState(false);
  const [showErr, setShowErr] = useState(false);

  const onHandleModal = () => {
    const strComment = document.getElementById("user-comment-text").value;

    if (strComment.length >= 3) {
      setShowModal(!showModal);
    } else {
      setShowErr(true);

      let idInterValShowErr = setInterval(() => {
        setShowErr(false);
        clearInterval(idInterValShowErr);
      }, 3000);
    }
  };

  const onHandleInput = e => {
    e.currentTarget.value = e.currentTarget.value.replace("  ", " ");
  };

  return (
    <Fragment>
      <div className="page-section margin-bottom-30">
        <div className="container">
          <div className="card card--section">
            <div className="title p020 margin-bottom-15">
              <h4>
                Hỏi &amp; Đáp <span className="badge text-white">1234</span>
              </h4>
            </div>
            <div className="row">
              <div className="col">
                <div className="user-rate-comment">
                  <textarea
                    name=""
                    id="user-comment-text"
                    rows="4"
                    placeholder="Viết bình luận của bạn (Vui lòng gõ tiếng Việt có dấu)"
                    onChange={e => {
                      onHandleInput(e);
                    }}
                  ></textarea>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      onHandleModal();
                    }}
                  >
                    Gửi câu hỏi
                  </button>
                </div>
                <Error
                  isShow={showErr}
                  text="Mời bạn viết bình luận.(Tối thiểu 3 ký tự)"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="comment">
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
      <Modal isShow={showModal} isClose={onHandleModal} />
    </Fragment>
  );
};

export default FComment;
