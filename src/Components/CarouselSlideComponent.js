import React,  { Component } from 'react';
import classnames from 'classnames';
import { MDBBtn } from "mdbreact";
class CarouselSlide extends Component {
    render() {
      return (
        <li
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
        >
        <h1 className="carousel-slide__heading">
        {this.props.slide.headline}</h1>
        <p className="carousel-slide__content">
        {this.props.slide.content}</p>
        <p className="carousel-slide__content">
         <MDBBtn href="#" color="primary" size="lg">Sign up today</MDBBtn></p>
        </li>
      );
    }
  }
  export default CarouselSlide;