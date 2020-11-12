import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import LocationSelect from "./LoactionSelect";
import SearchInput from "./SearchInput";
import Sell from "./../../Images/chrome-capture-removebg-preview.png";
import { Text } from "@chakra-ui/core";
import Stack from "@chakra-ui/core/dist/Stack";
import "./../../Styles/Appbar.css";
import { Affix } from "rsuite";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { askForPermissioToReceiveNotifications } from "./../../firebaseInitialize";
import { connect } from "react-redux";
import { facebookLogin, googleLogin } from "../../Config/Action/Action";
import ModalCarousel from "./ModalCarousel";
import { Drawer, Button } from "antd";
import FacebookIcon from "@material-ui/icons/Facebook";
import { EuiIcon } from "@elastic/eui";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import EmailSignUp from "./EmailSignUp";
import "../../Styles/Appbar.css";
import UserDropdown from "./UserDropdown";
import  {firebase}  from "../../firebaseInitialize";
import SellPage from "./Sell"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AppBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggle = () => setIsOpen(!isOpen);

  console.log("Appbar Props =>", props);

  return (
    <div className="root">
      <Affix>
        <Navbar
          color="light"
          light
          expand="md"
          className="navbar"
          css={{ border: "2px solid #ddd", background: "#232" }}
        >
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;
          <NavbarBrand>
            <div className="_2r6hS hJUTK">
              <a className rel data-aut-id="btnOlxLogo">
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  className
                  fillRule="evenodd"
                >
                  <path
                    className="rui-77aaa"
                    d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                  />
                </svg>
              </a>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <LocationSelect />
              </NavItem>
              <NavItem>
                <SearchInput />
              </NavItem>
            </Nav>
            <NavbarText>
            <UserDropdown />  
                <Stack spacing={3}>
                  <Text
                    className="login"
                    fontSize="6xl"
                    onClick={handleClickOpen}
                    color="black"
                    as="a"
                  >
                    <b
                      onClick={askForPermissioToReceiveNotifications}
                      style={{ marginTop: "-10px" }}
                    >
                      Login
                    </b>
                  </Text>
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    maxWidth="xs"
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{
                      height: "600px",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    <Toolbar>
                      <IconButton onClick={handleClose}>
                        <CloseIcon className="closemodal" />
                      </IconButton>
                    </Toolbar>

                    <DialogTitle id="alert-dialog-slide-title">
                      <ModalCarousel />
                    </DialogTitle>
                    <DialogContent
                      draggable="true"
                      className="dialog"
                      style={{ height: "400px" }}
                      dividers
                    >
                      <PhoneDrawer />
                      <div
                        className="continue"
                        onClick={() => props.facebookLogin()}
                      >
                        <FacebookIcon /> Continue with Facebook
                      </div>
                      <div
                        className="continue"
                        onClick={() => props.googleLogin()}
                      >
                        <EuiIcon type="logoGoogleG" size="xl" />
                        Continue with Google
                      </div>{" "}
                      <EmailDrawer />
                    </DialogContent>
                    <DialogActions>
                      <DialogContentText align="center">
                        <Text textAlign="center">
                          <small>
                            We won't share your personal details with anyone
                          </small>
                        </Text>
                        <br />
                        <Text textAlign="center" style={{ color: "GrayText" }}>
                          If you continue, you are accepting{" "}
                          <Text
                            as="a"
                            color="blue"
                            textAlign="center"
                            style={{ color: "blueviolet" }}
                          >
                            OLX Terms and Conditions and Privacy Policy
                          </Text>
                        </Text>
                      </DialogContentText>
                    </DialogActions>
                  </Dialog>
                </Stack>
              
            </NavbarText>
            <img src={Sell} alt="Sell"  />
          </Collapse>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </Navbar>
      </Affix>
    </div>
  );
}

class PhoneDrawer extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleChange = (e) => {
    console.log("Email  =>", e.target.value);
  };

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        <div style={{ marginTop: 16 }}>
          <div className="continue" onClick={this.showDrawer}>
            <PhoneAndroidIcon />
            Continue with Phone
          </div>
        </div>
        <Drawer
          title="Enter Phone Number"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <div className="_2r6hS hJUTK">
            <a className rel data-aut-id="btnOlxLogo">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                className
                fillRule="evenodd"
              >
                <path
                  className="rui-77aaa"
                  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                />
              </svg>
            </a>
          </div>
          <PhoneInput
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: true,
            }}
            placeholder="Enter Your Phone"
            onChange={(e) => this.handleChange(e)}
          />
          <hr />
          {
            (PhoneInput.value = null ? (
              <Button className="btn btn-primary btn-info" disabled>
                Next
              </Button>
            ) : (
              <Button className="btn btn-primary btn-info">Next</Button>
            ))
          }
        </Drawer>
      </div>
    );
  }
}

class EmailDrawer extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  handleChange = (e) => {
    console.log("User Email  =>", e.target.value);
  };

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        <div style={{ marginTop: 16 }}>
          <div className="continue" onClick={this.showDrawer}>
            <EmailIcon /> Continue with Email
          </div>
        </div>
        <Drawer
          title="Enter Your Email"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <div className="_2r6hS hJUTK">
            <a className rel data-aut-id="btnOlxLogo">
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                className
                fillRule="evenodd"
              >
                <path
                  className="rui-77aaa"
                  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                />
              </svg>
            </a>
          </div>
          <EmailSignUp />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    AppName: state.App.appname,
    User: state.Auth.user,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    facebookLogin: () => dispatch(facebookLogin()),
    googleLogin: () => dispatch(googleLogin()),
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(AppBar);
