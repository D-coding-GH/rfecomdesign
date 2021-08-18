import React, { Component } from "react";
import CarouselPromo from "./CaroselPromo";
import Transitionpromo1 from "./Transitionpromo1";
// import Transitionpromo2 from "./Transitionpromo2";
import Recentarrival from "./Recentarrival";
import "./home.css";

class Promo extends Component {
  render() {
    return (
      <div>
        <div>
          <CarouselPromo />
          <div className="transitionposition">
            <Transitionpromo1 />
          </div>
          <Recentarrival />
        </div>
      </div>
    );
  }
}

export default Promo;

//.......CaroselPromo
//.......TransitionImagePromo
//.......Recent Arrival
