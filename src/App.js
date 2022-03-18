import React from "react";
import NavBar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import LoginStatus from "./components/LoginStatus";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";

const App = () => {
  return (
    <div className="main_container">
      <NavBar />
      <h1 className="main_title">Stranger's Things</h1>
      <Switch>
        <Route path='/posts' component={Posts}/>
        <Route path='/login' component={LoginStatus}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/create-post' component={CreatePost}/>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
};

export default App;
