import React from "react";
import "./styles/Nav.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeSpacing } from "../redux/spacing";
import { changeBlur } from "../redux/blur";
import { changeColor } from "../redux/color";

function Nav() {
  const spacing = useSelector((state) => state.spacing.value);
  const blur = useSelector((state) => state.blur.value);
  const color = useSelector((state) => state.color.value);
  const dispatch = useDispatch();

  return (
    <nav>
      <label htmlFor="spacing">Spacing:</label>
      <input
        id="spacing"
        name="spacing"
        type="range"
        min="4"
        max="10"
        value={`${spacing}`}
        onChange={(e) => {
          dispatch(changeSpacing(e.target.value));
        }}
        data-sizing="vh"
      />

      <label htmlFor="blur">Blur:</label>
      <input
        id="blur"
        name="blur"
        type="range"
        min="0"
        max="10"
        value={`${blur}`}
        onChange={(e) => {
          dispatch(changeBlur(e.target.value));
        }}
        data-sizing="px"
      />

      <label htmlFor="base-color">Base Color</label>
      <input
        id="base-color"
        type="color"
        name="base-color"
        value={`${color}`}
        onChange={(e) => {
          dispatch(changeColor(e.target.value));
        }}
      />
    </nav>
  );
}

export default Nav;
