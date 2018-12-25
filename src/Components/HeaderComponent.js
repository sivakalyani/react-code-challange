import React from 'react';
import CarouselComponenet from './CarouselComponent.js';
import NavigationBar from './NavigationComponent.js';

const Header = (props) => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <CarouselComponenet></CarouselComponenet>
    </div>
  );
};

export default Header;
