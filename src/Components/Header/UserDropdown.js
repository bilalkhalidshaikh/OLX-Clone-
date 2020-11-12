import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Card } from "antd";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Container from "react-bootstrap/Container";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import { firebase } from "../../firebaseInitialize";
import { Text } from "bumbag";

const {
  displayName,
  phoneNumber,
  photoURL,
  email,
} = firebase.auth().currentUser;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <Card size="small" style={{ width: 300 }}>
        <Avatar src={photoURL} style={{ width: "50px", height: "50px" }} />
        Hello <h2>{displayName}</h2>
        <Text style={{ textAlign: "center", textDecoration: "underline" }}>
          View and Edit Profile
        </Text>
      </Card>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Container fluid color="light">
        <LibraryBooksIcon /> My Ads
      </Container>
    </Menu.Item>
    <Menu.Item key="3">
      <Container fluid color="light">
        <ListAltIcon /> Buy Business Packages
      </Container>
    </Menu.Item>
    <Menu.Item key="4">
      <Container fluid color="light">
        <MoveToInboxIcon /> Bought Packages & Biling
      </Container>
    </Menu.Item>
    <Menu.Item key="5">
      <Container fluid color="light">
        <HelpOutlineIcon /> Help
      </Container>
    </Menu.Item>
    <Menu.Item key="6">
      <Container fluid color="light">
        <SettingsIcon /> Setting
      </Container>
    </Menu.Item>
  </Menu>
);
export default class UserDropdown extends Component {
  render() {
    return (
      <div>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Click me <DownOutlined />
          </a>
        </Dropdown>
        ,
      </div>
    );
  }
}
