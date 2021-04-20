import React, { Component } from 'react';
import Promo from './Promo';
import './home.css';
import Header from "./Header";


class Home extends Component {
    render() {
        return (
            <div className='home'>
                
                <Promo/>
            </div>
        );
    }
}

export default Home;