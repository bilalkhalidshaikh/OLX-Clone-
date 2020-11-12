import React from "react";
import AppBar from "./AppBar";
import AllCategories from "./AllCategories";
import HeaderImage from "./HeaderImage";
import "../../Styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <AppBar title="O|X" />
      <AllCategories />
      <HeaderImage />
    </div>
  );
}
