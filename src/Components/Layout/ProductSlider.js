import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Text } from "@chakra-ui/core";
import Carousel from "react-bootstrap/Carousel";
import ProductCard from "./ProductCard"


export default function ProductSlider(props) {
  const style = {
    backgroundColor: "#ddd",
    height: "50vh",

  };
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container fixed style={style} maxWidth="lg">
        <Text fontSize="6x1" textAlign="left">
          <h4> Fresh recommendations</h4>
        </Text>
        <Text fontSize="lg" textAlign="right">
          <h5>View more</h5>
        </Text>
      </Container>
    </>
  );
}

