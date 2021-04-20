import React from "react";
import { motion } from "framer-motion";
import "./Menu.css"


const Menu = () => {
    const [isHover, toggleHover] = React.useState(false);
    const toggleHoverMenu = () => {
      toggleHover(!isHover);
    };
    const [isHover1, toggleHover1] = React.useState(false);
    const toggleHoverMenu1 = () => {
        toggleHover1(!isHover1);
    };
    const [isHover2, toggleHover2] = React.useState(false);
    const toggleHoverMenu2 = () => {
        toggleHover2(!isHover2);
    };
    const subMenuAnimate = {
      enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
          duration: 0.5
        },
        display: "block"
      },
      exit: {
        opacity: 0,
        rotateX: -15,
        transition: {
          duration: 0.5,
          delay: 0.3
        },
        transitionEnd: {
          display: "none"
        }
      }
    };
    return (
      <div>
        <div className="container">
          <div>
            <motion.div 
              className="menu-item"
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}
            >
              <h1>MEN</h1>
              <motion.div 
                className="sub-menu"
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="sub-menu-background" />
                <div className="sub-menu-container">
                <div className="titles1">
                    <h1>FOOTWEAR</h1>
                    <h1>BRAND</h1>
                    <h1>COLLECTION</h1>
                  </div>
                  <div className="menuLinks">
                    <div>
                      <div>STREET</div>
                      <div>ROAD</div>
                      <div>TRAIL</div>
                    </div>
                    <div>
                      <div>ADIDAS</div>
                      <div>NIKE</div>
                      <div>PUMA</div>
                      <div>ASICS</div>
                      <div>HOKA</div>
                    </div>
                    <div>
                      <div>COLLLECTION</div>
                      <div>COLLECTION</div>
                    </div>
                  </div>
               
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div >
            <motion.div
              className="menu-item"
              onMouseEnter={toggleHoverMenu1}
              onMouseLeave={toggleHoverMenu1}
            >
              <h1>WOMEN</h1>
              <motion.div
                className="sub-menu1"
                initial="exit"
                animate={isHover1 ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="sub-menu-background" />
                <div className="sub-menu-container">
                  <div className="titles1">
                    <h1>FOOTWEAR</h1>
                    <h1>BRAND</h1>
                    <h1>COLLECTION</h1>
                  </div>
                  <div className="menuLinks">
                    <div>
                      <div>STREET</div>
                      <div>ROAD</div>
                      <div>TRAIL</div>
                    </div>
                    <div>
                      <div>ADIDAS</div>
                      <div>NIKE</div>
                      <div>PUMA</div>
                      <div>ASICS</div>
                      <div>HOKA</div>
                    </div>
                    <div>
                      <div>COLLLECTION</div>
                      <div>COLLECTION</div>
                    </div>
                  </div>
                
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="menu-item"
              onMouseEnter={toggleHoverMenu2}
              onMouseLeave={toggleHoverMenu2}
            >
              <h1>EQUIPMENT</h1>
              <motion.div
                className="sub-menu2"
                initial="exit"
                animate={isHover2 ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="sub-menu-background" />
                <div className="sub-menu-container">
                <div className="titles1">
                    <h1>EQUIPMENT/watches</h1>
                    <h1>EQUIPMENT</h1>
                    <h1>EQUIPMENT</h1>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>{" "}
        </div>
      </div>
    );
  }





export default Menu;