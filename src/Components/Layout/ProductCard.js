import React from "react";
import { Card } from "antd";
import { SimpleGrid, Box } from "@chakra-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "../../Styles/layout.css";
import ProductDetail from "./ProductDetail";
import { Button, message } from "antd";

const useStyles = {
  root: {
    flexGrow: 1,
    overflow: "hidden",
    justifyContent: "center",
    display: "flex",
    padding: 2,
    flex: 1,
    display: "inline-block",
  },
  Card: {
    padding: 2,
    border: "2px solid #555",
    marginLeft: "auto",
    marginRight: "auto",
    height: "210px",
    width: "200px",
  },
  img: {
    height: "120px",
    width: "160px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  Meta: {
    borderLeft: "7px solid #ffc955",
  },
};
export default class ProductCard extends React.Component {
  constructor(){
    super()
    this.state= {
      is: false
    }
  }
  render() {
    const classes = useStyles;
    const key = "updatable";

    const openMessage = () => {
      message.loading({ content: "Please wait...", key });
      setTimeout(() => {
        message.success({ content: "You Like This Ad", key, duration: 2 });
      }, 1000);
    };
    return (
      <>
        <SimpleGrid
          style={{ display: "inline-block", margin: "5px" }}
          columns={(4, [1, null, 4])}
          spacing="10px"
        >
          <Box style={classes.root}>
            <Card
              size="small"
              extra={
                <a onClick={openMessage}>
                  <FavoriteBorderIcon children={<FavoriteIcon />} />
                </a>
              }
              bordered
              style={classes.Card}
            >
              <div style={{ marginTop: "-20px" }}>
                <img src={this.props.src} style={classes.img}></img>
              </div>
              <div>
                <h4>{<p>Price</p>}</h4>
                <p>Ad Description</p>
              </div>
              <p>User Location</p>
            </Card>
          </Box>
        </SimpleGrid>
      </>
    );
  }
}
