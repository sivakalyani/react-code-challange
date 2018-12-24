import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import { Button, Thumbnail } from 'react-bootstrap';



import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle } from 'react-shapes';

import '../styles/carousel_styles.scss';
const carouselSlidesData = [
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Heading",
        index:1
    },
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Heading",
        index:2
    },
    {
        content:
            "Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. ",
        headline: "Heading",
        index:3
    }
];

class HeadlineDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: carouselSlidesData
        };
    }
    render() {
        return (
            
            <Container>
                <Row>
                        <ul>
                            <Row>
                                {this.state.slides.map((slide, index) =>
                                    <Col sm={4} key={slide.index}>
                                        <Row align="center">
                                        <Col align="center">
                                            <Circle r={50} fill={{ color: 'gray' }}/>
                                        </Col>
                                        </Row>
                                        <Row>
                                            <Col align="center">
                                                <h2>{slide.headline}</h2>
                                                <p>
                                                    {slide.content}
                                                </p>
                                                <p>
                                                <Button type="submit">View Details</Button>
                                                </p>
                                            </Col>
                                        </Row>
                                    </Col>
                                )}
                            </Row>
                        </ul>
                        <div>
                        </div>
                </Row>
                <br/>
                <Row align="center">
                    <Col sm={8} align="center">
                    <p>Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. </p>
                    </Col>
                    <Col align="right">
                    <Rectangle width={300} height={300} fill={{color:'gray'}} text="500x500"><p className="shape-squire">text</p></Rectangle>
                    </Col>
                </Row>
                <br/>

                <Row align="center">
                <Col align="right">
                    <Rectangle width={300} height={300} fill={{color:'gray'}} />
                </Col>
                <Col sm={8} align="center">
                 <p>Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. </p>
                </Col>
                </Row>
                <Row align="center">
                    <Col sm={8} align="center">
                    <p>Economists say Trump's criticism of Powell misrepresents Fed's role, influence Trump’s complaints about the Federal Reserve head indicate a flawed understanding of how the economy works, say experts. </p>
                    </Col>
                    <Col>
                    <Rectangle width={300} height={300} fill={{color:'gray'}} />
                    </Col>
                </Row>

            </Container>
        );
    }
}


export default HeadlineDetails;