
import React from 'react'
import ProductCard from ".././../Components/Layout/ProductCard";
import Container from "@material-ui/core/Container";
import ProductSlider from "../../Components/Layout/ProductSlider";
import CssBaseline from "@material-ui/core/CssBaseline";
import  ProductDetail from "./ProductDetail"
import GoogleAdsContainer from "../../Components/Layout/GoogleAds";
import img from "../../Images/ad2.jpg";


class Layout extends React.Component{
  constructor(){
    super()
    this.state = {
      App : ''
    }
  }
  render(){
    return(
      <div>
        <GoogleAdsContainer />
        <Container fixed justify="center">
        <CssBaseline />
        <ProductSlider src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
          <ProductCard src={img} />
        </Container>
      <ProductDetail />
      </div>
    )
  }
}

export {Layout};
