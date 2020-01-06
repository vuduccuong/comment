import React, { useContext, Fragment, useState } from "react";
import StringToHTML from "html-react-parser";

//import components
import CommentBox from "../comment-box/Comment-Box";

//import utils
import { CommentContext } from "../utils/MyContext";
import { getBackDate } from "../utils/utils";
const UserComment = props => {
  const data = props.data;
  const [replying, setReplying] = useContext(CommentContext);
  const [hiddenBoxRep, setHiddenBoxRep] = useState(true);
  //   const [minimized, setMinimized] = useState(false);
  //   const [hidden, setHidden] = useState(false);

  //xử lý sự kiện khi click trả lời
  const handlClickRep = e => {
    setHiddenBoxRep(!hiddenBoxRep);
  };

  return (
    <Fragment>
      <div className={props.level}>
        <div className="comment-box-avatar">
          {data.IsAdmin ? (
            <img src="https://via.placeholder.com/70x70" alt="Admin" />
          ) : (
            <img src="https://via.placeholder.com/70x70" alt="Customer" />
          )}
        </div>
        <div className="comment-box-content">
          <div className="comment-name">
            {data.CusName}
            {data.IsAdmin ? (
              <span className="badge badge-primary">QTV</span>
            ) : null}
            <div className="time">
              {getBackDate(
                data.DateCreated.replace("/Date(", "").replace(")/", "")
              )}
            </div>
          </div>
          <div className="comment-text">{StringToHTML(data.Content)}</div>
          <div className="comment-status">
            {data.IsAdmin || props.level === "comment-box level2" ? null : (
              <a
                href={null}
                onClick={e => {
                  handlClickRep(e);
                }}
                style={{ cursor: "pointer" }}
              >
                Trả lời
              </a>
            )}
          </div>
        </div>
      </div>
      {data.listRep.length <= 0
        ? null
        : data.listRep.map((item, index) => {
            return (
              <Fragment key={index}>
                <UserComment level={`comment-box level2`} data={item} />
                <CommentBox hidden={hiddenBoxRep} item={item} top={false} />
              </Fragment>
            );
          })}
    </Fragment>
  );
};

export default UserComment;
