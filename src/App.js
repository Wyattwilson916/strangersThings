import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import LoginStatus from "./components/LoginStatus";
import SignUp from "./components/SignUp";
import CreatePost from "./components/CreatePost";
import Profile from "./components/Profile";

const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const localToken = localStorage.getItem('token')
    localToken ? setToken(localToken) : null
    // console.log(token, '!!!THIS IS IN APP ON THE CALL OF USE EFFECT()!!!');
  }, [token]);

  return (
    <div className="main_container">
      <NavBar />
      {/* {console.log(token, 'THIS IS TOKEN FROM APP JS')} */}
      <h1 className="main_title">Stranger's Things</h1>
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={LoginStatus} />
        <Route path="/sign-up">
          <SignUp token={token} setToken={setToken}/>
        </Route>
        <Route path="/create-post" component={CreatePost} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
