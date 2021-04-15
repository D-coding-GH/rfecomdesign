import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from "../images/adidas-banner.jpg"


const Carousel1 = () => (

    <Carousel showThumbs={false} autoPlay>
    <div>
        <img alt="" src={banner1} />
    </div>
    <div>
        <img alt="" src={banner1} />
    </div>
    <div>
        <img alt="" src={banner1} />
    </div>
    
    
    
   </Carousel>
)



export default Carousel1;


  