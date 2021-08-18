import React, { Component } from 'react';
import LoginREG from "./LoginREG";
import Menu from "./Menu";
import "./Header.css";
import "./Menu.css";



class Header extends Component {
  render() {
    return (
      <div className="container">
        <h3>header</h3>
        <div className="header-positions">
          <LoginREG />
        </div>
        <div>
          <Menu />
        </div>
      </div>
    );
  } 
}

export default Header;


//.......search
//.......login

//...IMPORT menu,search,login


