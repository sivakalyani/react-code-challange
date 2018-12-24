import React from 'react';
import CarouselComponenet from './CarouselComponenet.js';
import NavigationBar from './NavigationComponent.js';
import HeadlineDetails from './HeadlineDetailsComponent.js';

import '../styles/carousel_styles.scss';


const Header = (props) => {
    return (
        <div>
        <div className="carousel">
        <NavigationBar></NavigationBar>
        <CarouselComponenet></CarouselComponenet>
        </div>
        <div className="container-style">
        <HeadlineDetails></HeadlineDetails>
        </div>

        </div>
    )
}

export default Header;
