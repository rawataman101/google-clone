import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import Search from "../Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/* link */}
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          {/* link */}
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          {/* icons and avatar */}
          <AppsIcon />
          <Avatar alt="" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="google_logo"
        />
        <div className="home__inputContainer">
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
