import React, { Component } from 'react';
import Promo from './Promo';
import './home.css';



class Home extends Component {
    render() {
        return (
            <div className="homeorder" >
                
                  <Promo/>
                 
            </div>
        ); 
    }
}

export default Home;