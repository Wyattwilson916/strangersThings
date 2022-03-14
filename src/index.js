import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Posts from "./components/Posts";

ReactDom.render(
  <Router>
    <Posts />
  </Router>,
  document.getElementById("app")
);
