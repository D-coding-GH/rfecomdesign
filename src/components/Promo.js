import React, { Component } from 'react';
import CarouselPromo from './CaroselPromo';
import  Transitionpromo1 from './Transitionpromo1';
import  Transitionpromo2 from './Transitionpromo2';
import './home.css';

class Promo extends Component {
    render() {
        return (
          <div>
            <CarouselPromo />

            <div className="transitionposition">
              <Transitionpromo1 />

              <Transitionpromo2 />
            </div>
          </div>
        );
    }
}

export default Promo;

//.......CaroselPromo
//.......TransitionImagePromo
//.......Recent Arrival
