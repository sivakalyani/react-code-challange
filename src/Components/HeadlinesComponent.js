import React from 'react';
import Header from './HeaderComponent.js';
import HeadlineDetails from './HeadlineBodyComponent.js';
import '../styles/headline_styles.scss';


const HeadLines = (props) => {
    return (
        <div>
        <div className="carousel">
        <Header/>
        </div>
        <div className="container-style">
        <HeadlineDetails></HeadlineDetails>
        </div>
        </div>
    )
}

export default HeadLines;
