import React, { Fragment, useState } from "react";

//component
import Error from "../error/Error";
import Modal from "../modal/Modal";

const CommentBox = props => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showErr, setShowErr] = useState(false);

  const onHandleModal = e => {
    if (e) {
      const id = e.currentTarget.dataset.id;
      const strComment = document.getElementById(`f-comment-${id}`).value;

      if (strComment.length >= 3) {
        setText(strComment);
        setShowModal(!showModal);
      } else {
        setShowErr(true);

        let idInterValShowErr = setInterval(() => {
          setShowErr(false);
          clearInterval(idInterValShowErr);
        }, 3000);
      }
    } else {
      setShowModal(false);
    }
  };

  const onHandleInput = e => {
    e.currentTarget.value = e.currentTarget.value.replace("  ", " ");
  };

  return props.hidden ? null : (
    <Fragment>
      <div className="col">
        <div className={`user-rate-comment f-comment-${props.item.ID}`}>
          <textarea
            name=""
            id={`f-comment-${props.item.ID}`}
            rows="4"
            placeholder="Viết bình luận của bạn (Vui lòng gõ tiếng Việt có dấu)"
            onChange={e => {
              onHandleInput(e);
            }}
          ></textarea>
          <button
            data-id={props.item.ID}
            className="btn btn-primary"
            onClick={e => {
              onHandleModal(e);
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
      <Modal
        isShow={showModal}
        isClose={e => {
          onHandleModal(e);
        }}
        text={text}
      />
    </Fragment>
  );
};

export default CommentBox;
