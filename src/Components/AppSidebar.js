import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "../routes";
const AppSidebar = ({ setSmallNav }) => {
  return (
    <div className="asidemenus">
      <div className="logo">
        <a href="home.html">
          <img src="images/logo.png" alt="" />
        </a>
      </div>
      <div className="menuaccord" onClick={() => setSmallNav("smallnav")}></div>
      <div id="menuicon" onClick={() => setSmallNav("")}></div>
      <div id="custnav">
        <ul className="menus">
          {routes.map((route, i) => (
            <li key={i} >
            <div className={`micon${i+1}`}>
            <Link
                to={route.path}
                activeClassName="active"
              >
                {route.name}
              </Link>
            </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(AppSidebar);
