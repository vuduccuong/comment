import React from "react";

//css
import "./f-err.css";

const Error = props => {
  return (
    <p
      className="f-err"
      style={{ display: `${props.isShow ? "block" : "none"}` }}
    >
      {props.text}
    </p>
  );
};

export default Error;
