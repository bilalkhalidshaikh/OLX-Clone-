import React from "react";
import Header from "../../Components/Header/Header";
import { Layout } from "../../Components/Layout/Layout";
import "../../Styles/layout.css";
import Footer from "../../Components/Footer/Footer";
import { BackTop } from "antd";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
  marginLeft: "auto",
  marginRight: "auto",
  fontWieght: "bold",
};

export function Home() {
  return (
    <div>
      <Header />
      <Layout />
      <Footer />
      <BackTop>
        <div style={style}>
          <KeyboardArrowUpIcon css={{ color: "#fff" }}>UP</KeyboardArrowUpIcon>
        </div>
      </BackTop>
    </div>
  );
}
