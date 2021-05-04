import React, { Component } from "react";
import "./shoppage.css";
import thumb1 from "../images/nike_airzoompeg1.jpeg";
import thumb2 from "../images/nike_airzoompeg2.jpeg";
import thumb3 from "../images/nike_airzoompeg3.jpeg";
import thumb4 from "../images/nike_airzoompeg4.jpeg";
import mainimage from "../images/nike_airzoompeg1.jpeg";
class Shoppage extends Component {
  render() {
    return (
      <div className="shopwrapper">
           <h2>trainer name</h2>
        <div className="shoprow">
          <div className="thumbcontainer">
            <div className="thumbcss">
              <img id="imageresize" alt="" src={thumb1} />
              <img id="imageresize" alt="" src={thumb2} />
              <img id="imageresize" alt="" src={thumb3} />
              <img id="imageresize" alt="" src={thumb4} />
            </div>
          </div>
          <div className="mainimage-container">
            <img id="mainimage" alt="" src={mainimage} />
          </div>
          <div>
            <div className="function-container">
              <h2>shop functions</h2>
            </div>
          </div>
        </div>
        <h2 id='des-position' >descripton/spec</h2>
        <div className="trainerinfo">
          <h3>
            trainer descripton and spec trainer descripton and spec trainer
            descripton and spec trainer descripton and spec trainer descripton
            and spec trainer descripton and spec trainer descripton and spec
            trainer descripton and trainer descripton and spec trainer
            descripton and spec trainer descripton and spec trainer descripton
            and spec
          </h3>
        </div>
      </div>
    );
  }
}

export default Shoppage;
