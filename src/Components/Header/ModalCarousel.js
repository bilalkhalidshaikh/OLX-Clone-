import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../Images/modalimg1.jpg";
import img2 from "../../Images/modalimg2.jpg";
import img3 from "../../Images/modalimg3.jpg";

export default function ModalCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{height: "100px !important"}}>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="d-block w-60 img-fluid"
            src={img1}
            alt="First slide"
            height="100px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-60 center img-fluid"
            src={img2}
            alt="Second slide"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            height="100px"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-60 img-fluid"
            style={{ marginLeft: "auto", marginRight: "auto" }}
            src={img3}
            alt="Third slide"
            height="100px"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
