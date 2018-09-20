import React from "react";
import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Now Playing</a>
        </li>
        <li>
          <a href="/">Popular</a>
        </li>
        <li>
          <a href="/">Top Rated</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
