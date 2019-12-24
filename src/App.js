import React from "react";
import Layout from "./components/Layout";
import { Route } from "react-router";
//components
import FComment from "./components/comment/F-Comment";
import Home from "./components/home/Home";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/comment" component={FComment} />
    </Layout>
  );
}

export default App;
