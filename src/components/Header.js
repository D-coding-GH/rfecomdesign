import React, { Component } from 'react';
import LoginREG from "./LoginREG";
import Menu from "./Menu";
import "./Header.css";
import "./Menu.css";



class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1>header</h1>
        <div className="header-positions">
          {/* <h1>header</h1> */}
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


