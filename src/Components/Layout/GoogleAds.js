import React, { Component } from "react";
import { Header, FlexboxGrid } from "rsuite";
import Container from "@material-ui/core/Container";
import { Panel } from "rsuite";
import Ad1 from "./../../Images/ad1.jpg";
import Ad2 from "./../../Images/ad2.jpg";
import Ad3 from "./../../Images/ad3.jpg";
import { Image } from "bumbag";

export default class GoogleAds extends Component {
  constructor() {
    super();
    this.state = {
      adUrl: Ad2,
    };
  }
  changeAd = () => {
    setTimeout(() => {
      this.setState(
        {
          adUrl: Ad1,
        },
        2000
      );
    });
    setTimeout(() => {
      this.setState({
        adUrl: Ad3,
      });
    });
  };

  render() {
    return (
      <div>
        <>
          <Container className="container">
            <Header>
              <FlexboxGrid justify="center" align="top">
                <Panel>
                  <Image
                    src={this.state.adUrl}
                    alt="Google Ads"
                    left="auto"
                    right="auto"
                    className="img-fluid fluid center"
                    css={{ marginLeft: "auto", marginRight: "auto" }}
                  />
                </Panel>
              </FlexboxGrid>
            </Header>
          </Container>
        </>
      </div>
    );
  }
}
