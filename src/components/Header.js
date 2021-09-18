import React from "react";
import "./styles/Header.css";
import { useSelector } from "react-redux";

function Header() {
  const color = useSelector((state) => state.color.value);
  return (
    <div className="header-wrapper">
      <p>
        Update CSS Variables with <span style={{ color: `${color}` }}>JS</span>
      </p>
    </div>
  );
}

export default Header;
