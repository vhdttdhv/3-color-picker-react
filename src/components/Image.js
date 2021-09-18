import React from "react";
import "./styles/Image.css";
import { useSelector } from "react-redux";
function Image() {
  const spacing = useSelector((state) => state.spacing.value);
  const blur = useSelector((state) => state.blur.value);
  const color = useSelector((state) => state.color.value);
  return (
    <div className="img-wrapper">
      <div
        className="img"
        style={{ padding: `${spacing}vh`, backgroundColor: `${color}` }}
      >
        <img
          src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
          alt="demonstrating img"
          style={{ filter: `blur(${blur}px)` }}
        />
      </div>
    </div>
  );
}

export default Image;
