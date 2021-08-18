import React, { Component } from 'react';
import Header from "./Header";
import Promo from './Promo';
import Footer from './footer';
import './home.css';



class Home extends Component {

    render() {
        return (
            <div className="homeorder" >
                  <Header/>
                  <Promo/>
                  <Footer/>
            </div>
        ); 
    }
}

export default Home;