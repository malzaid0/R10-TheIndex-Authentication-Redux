import React from "react";
import { NavLink, Link } from "react-router-dom";

// Logo
import logo from "./assets/theindex.svg";

const Sidebar = () => (
  <div id="sidebar">
    <img src={logo} className="logo" alt="the index logo" />
    <section>
      <h4 className="menu-item active">
        <NavLink to="/authors">AUTHORS</NavLink>
      </h4>
    </section>
    <div className="fixed-bottom">
      <Link to="/login" className="btn btn-info m-2 float-left">
        Login
      </Link>
      <Link to="/signup" className="btn btn-success m-2 float-left">
        Signup
      </Link>
    </div>
  </div>
);

export default Sidebar;
