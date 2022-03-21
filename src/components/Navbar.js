import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ token }) => {
  useEffect(() => {
    localStorage.getItem("token");
  }, [token]);

  return (
    <div className="nav_bar_container">
      <div className="link_container">
        <div>
          <Link to={"/"} className="nav_item">
            Home
          </Link>
          <Link to={"/Profile"} className="nav_item">
            Profile
          </Link>
          <Link to={"/posts"} className="nav_item">
            Posts
          </Link>

          {localStorage.getItem("token") ? (
            <>
              {/* <Link to={"/profile"} className="nav-item">
                Profile
              </Link> */}
              <Link to={"/login"} className="nav_item">
                Logout
              </Link>
              <br />
            </>
          ) : (
            <>
              <Link to={"/login"} className="nav_item">
                Login
              </Link>
              <Link to={"/sign-up"} className="nav_item">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
