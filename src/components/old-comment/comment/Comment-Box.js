import React from "react";

//components
import Error from "../../rebuild-comment-fpt/error/Error";

const CommentBox = props => {
  console.log("props reply comment: ", props);

  //sự kiện khi nhập bình luận
  const onHandleInput = e => {
    e.currentTarget.value = e.currentTarget.value.replace("  ", " ");
  };

  //Sự kiện khi nhấn button gửi câu hỏi
  const onHandleModal = e => {
    const id = e.currentTarget.dataset.id;
    const strComment = document.getElementById(`user-comment-text-${id}`).value;

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

  return (
    <div className="col">
      <div className="user-rate-comment">
        <textarea
          name=""
          id={`user-comment-text-${props.id}`}
          rows="4"
          placeholder="Viết bình luận của bạn (Vui lòng gõ tiếng Việt có dấu)"
          onChange={e => {
            onHandleInput(e);
          }}
        ></textarea>
        <button
          data-id={props.id}
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
  );
};

export default CommentBox;
