import React, { Component } from "react";
import "./product.css";
import mainimage from "../images/nike_airzoompeg1.jpeg";
import mainimage2 from "../images/nike_airzoompeg2.jpeg";
import mainimage3 from "../images/nike_airzoompeg3.jpeg";
import mainimage4 from "../images/nike_airzoompeg4.jpeg";
import thumb2 from "../images/nike_airzoompeg2.jpeg";
import thumb3 from "../images/nike_airzoompeg3.jpeg";
import thumb4 from "../images/nike_airzoompeg4.jpeg";
import heart from "../images/heart.svg"
import {Heart} from 'react-feather'


class ProductPage extends Component {
 
constructor(props){
  super(props)
  this.state = {
    imgScr:mainimage,
    iconButton:heart
  
  }
  this.handleMouseOver1 = this.handleMouseOver1.bind(this);
  this.handleMouseOut1 = this.handleMouseOut1.bind(this);
  this.handleMouseOver2 = this.handleMouseOver2.bind(this);
  this.handleMouseOver3 = this.handleMouseOver3.bind(this);
 
}


handleMouseOver1() {
  this.setState({
    imgScr:mainimage2
  });
}

handleMouseOver2() {
  this.setState({
    imgScr:mainimage3
  });
}

handleMouseOver3() {
  this.setState({
    imgScr:mainimage4
  });
}

handleMouseOut1() {
  this.setState({
    imgScr:mainimage
  });
}
  



  render() {   

    return (
      <div className="productwrapper">
        <h2>trainer name</h2>
        <div className="productrow">
          <div className="thumbcontainer">
            <div className="thumbcss">
              <img
                onMouseEnter={this.handleMouseOver1}
                onMouseLeave={this.handleMouseOut1}
                id="imageresize"
                alt=""
                src={thumb2}
              />

              <img
                onMouseEnter={this.handleMouseOver2}
                onMouseLeave={this.handleMouseOut1}
                id="imageresize"
                alt=""
                src={thumb3}
              />
              <img
                onMouseEnter={this.handleMouseOver3}
                onMouseLeave={this.handleMouseOut1}
                id="imageresize"
                alt=""
                src={thumb4}
              />
            </div>
          </div>
          <div className="mainimage-container">
            <img id="mainimage" alt="" src={this.state.imgScr} />
          </div>
          
          <div className="info">
            <div className="function-container">
              <Card2
                name="some adidas shoe"
                price="£120"
                smallsdes="roadrunner shoes"
              />
            </div>
          </div>
        </div>
        <button>add to basket</button>
        
        <Heart fill="red" />


        <h2 id="des-position">descripton/spec</h2>
        
        <div className="card-wrapper">
          <Card1
            type="style of trainer"
            description="description on trainer description on trainer description on trainer description on trainer
            description on trainer description on trainer description on trainer description on trainer description on trainer  "
          />
        </div>
      </div>
    );
  }
}

const Card1 = (props) => {
  return (
    <div>
      <h3 className="trainertype">{props.type}</h3>
      <h4 className="trainerdes">{props.description.toUpperCase()}</h4>
    </div>
  );
};

const Card2 = (props) => {
    return (

        // name,price, type
      <div>
        <h3 className="trainername">{props.name}</h3>
        <h3 className="price">{props.price.toUpperCase()}</h3>
        <h4 className="smalldes">{props.smallsdes}</h4>
      </div>
    );
  };


export default ProductPage;
