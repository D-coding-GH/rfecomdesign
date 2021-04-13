import React, { Component,} from 'react';
import "./Menu.css"

const Menu = () => {
    return (

<div className="menuSpace" >
        <div >
            <Mens/>
        </div>
        <div >
             <Womens/>
        </div>
        <div  >
             <Equipment/>
        </div>
</div>
    );
};



class Mens extends Component {

    dropdownContainer = React.createRef();
    state = {
      open: false,
    };
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) => {
      if (
        this.dropdownContainer.current &&
        !this.dropdownContainer.current.contains(event.target)
      ) {
        this.setState({
          open: false,
        });
      }
    };
    handleButtonClick = () => {
      this.setState((state) => {
        return {
          open: !state.open,
        };
      });
    };



    render() {
        return (
            <div className="men">
            <section className="menContainer" ref={this.dropdownContainer}>
              <button id="regButton" onClick={this.handleButtonClick}>
                MEN
              </button>
              {this.state.open && (
                <div class="menContainer">
                  <li className="showmenuli"> Street</li>
                  <li className="showmenuli">Road</li>
                  <li className="showmenuli">Trail</li>      
                </div>
              )}
            </section>
          </div>
        );
    }
}


class Womens extends Component {

    dropdownContainer = React.createRef();
    state = {
      open: false,
    };
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) => {
      if (
        this.dropdownContainer.current &&
        !this.dropdownContainer.current.contains(event.target)
      ) {
        this.setState({
          open: false,
        });
      }
    };
    handleButtonClick = () => {
      this.setState((state) => {
        return {
          open: !state.open,
        };
      });
    };



    render() {
        return (
            <div className="women">
            <section className="womenContainer" ref={this.dropdownContainer}>
              <button id="regButton" onClick={this.handleButtonClick}>
                Womens
              </button>
              {this.state.open && (
                <div class="womenContainer">
                  <li className="showmenuli"> Street</li>
                  <li className="showmenuli">Road</li>
                  <li className="showmenuli">Trail</li>      
                </div>
              )}
            </section>
          </div>
        );
    }
}

class Equipment extends Component {

    dropdownContainer = React.createRef();
    state = {
      open: false,
    };
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside = (event) => {
      if (
        this.dropdownContainer.current &&
        !this.dropdownContainer.current.contains(event.target)
      ) {
        this.setState({
          open: false,
        });
      }
    };
    handleButtonClick = () => {
      this.setState((state) => {
        return {
          open: !state.open,
        };
      });
    };



    render() {
        return (
            <div className="equipment">
            <section className="equipmentContainer" ref={this.dropdownContainer}>
              <button id="regButton" onClick={this.handleButtonClick}>
              Equipment
              </button>
              {this.state.open && (
                <div class="equipmentContainer">
                  <li className="showmenuli"> Street</li>
                  <li className="showmenuli">Road</li>
                  <li className="showmenuli">Trail</li>      
                </div>
              )}
            </section>
          </div>
        );
    }
}


export default Menu;