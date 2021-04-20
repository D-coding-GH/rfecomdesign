import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from "../images/adidas-banner1.jpg"
import banner2 from "../images/adidas-banner2.jpg"
import banner3 from "../images/nike-banner.jpg"
import './home.css';

const CarouselPromo = () => (

    <Carousel className="carousel" showThumbs={false} autoPlay infiniteLoop={true} interval={2000} >

    <div className="carimages"  >
        <img alt="" src={banner1} />
    </div>
    <div>
        <img alt="" src={banner2} />
    </div>
    <div>
        <img alt="" src={banner3} />
    </div>
    
    </Carousel>
)



export default CarouselPromo;


  