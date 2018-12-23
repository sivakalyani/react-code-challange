import React from 'react';
import CarouselComponenet from './CarouselComponenet.js';
import NavigationBar from './NavigationComponent.js';
import '../styles/carousel_styles.scss';


const Header = (props) => {
    return (
        <div className="carousel">
        <NavigationBar></NavigationBar>
        <CarouselComponenet></CarouselComponenet>
        </div>
    )
}

export default Header;
