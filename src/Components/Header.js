import React from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";

function Header(props) {
  const { theme } = props;
  return (
    <div className="header">
      <div className="container">
        <h2>Where in the world.</h2>
        <div className="theme" onClick={props.changeTheme}>
          <div className="icon">
            {theme === "dark" ? <BsMoonFill /> : <BsMoon />}
          </div>
          <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
