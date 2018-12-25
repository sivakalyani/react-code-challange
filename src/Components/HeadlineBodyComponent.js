import React, { Component } from "react";
import HeadlineDetail from './HeadlineDetailComponent.js'
import ImageHolder from '../assets/image_place_holder.png';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';

const carouselSlidesData = [
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Headline1",
        id:1
    },
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Headline2",
        id:2

    },
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Headline3",
        id:3
    }
];
class HeadlineBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: carouselSlidesData
        };
    }
    render() {
        return (
            <div>
            <MDBContainer>
                <MDBRow className="row-layout">
                        <ul>
                            <MDBRow border="1px">
                                {this.state.slides.map((slide, index) =>
                                    <MDBCol md="4" key={slide.headline}>
                                        <MDBRow align="center">
                                        <MDBCol align="center">
                                            <Circle r={50} fill={{ color: 'gray' }}/>
                                        </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol align="center">
                                                <h2>{slide.headline}</h2>
                                                <p>
                                                    {slide.content}
                                                </p>
                                                <p>
                                                <a className="btn btn-color" href="#" role="button">View details »</a>
                                                </p>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCol>
                                )}
                            </MDBRow>
                        </ul>
                        <div>
                        </div>
                </MDBRow>
                <HeadlineDetail isTextDisplayFirst={true}></HeadlineDetail>
                <HeadlineDetail isTextDisplayFirst={false}></HeadlineDetail>
                <HeadlineDetail isTextDisplayFirst={true}></HeadlineDetail>
                <MDBRow align="center" className="row-layout">
                <MDBCol md={6} align="left">
                    <p>@ 2017-2018 Company, Inc. <a href="#">Privacy-Terms</a></p>
                    </MDBCol>
                    <MDBCol align="right">
                    <a href="#">Back to top</a>
                    </MDBCol>
              </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}
export default HeadlineBody;