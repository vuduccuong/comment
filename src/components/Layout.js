import React, { Fragment } from "react";

//compoent
import Menu from "./menu/Menu";

const Layout = props => {
  return (
    <Fragment>
      <Menu />
      <hr />
      {props.children}
    </Fragment>
  );
};

export default Layout;
