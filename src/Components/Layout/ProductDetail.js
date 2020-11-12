import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Layout } from "antd";
import ProductDetailSider from "./ProductDetailSider";
import "../../Styles/ProductDetail.css";
import img from "../../Images/ad1.jpg";
import Container from "@material-ui/core/Container";

const { Header, Footer, Sider, Content } = Layout;
export default class ProductDetail extends Component {
  state = {
    dotPosition: "bottom",
  };
  handlePositionChange = ({ target: { value: dotPosition } }) =>
    this.setState({ dotPosition });

  render() {
    return (
      <div>
        <Layout>
          <Sider>
            <div className="logo" />

            <ProductDetailSider />
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />
            <Content
              className="container"
              style={{ margin: "24px 16px 100 0", width: "400px" }}
            >
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Carousel height="100px">
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block w-100"
                      src="https://picsum.photos/100"
                      alt="Item"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Content>

            <Footer style={{ textAlign: "center", background: "#333" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
        ,
      </div>
    );
  }
}
