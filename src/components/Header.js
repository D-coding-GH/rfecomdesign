import React, { Component } from 'react';
import Menu from "./Menu";
import "./Header.css"
import "./Menu.css"



class Header extends Component {
  render() {
    return (
      <div>
        <h1>header</h1>
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


