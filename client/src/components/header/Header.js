import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h2>Name</h2>
      <div>
        <Link to='/profile'>Profile</Link>
        <div>Logout</div>
      </div>
    </header>
  );
};

export default Header;
