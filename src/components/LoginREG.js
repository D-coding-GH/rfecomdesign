import React from 'react';
import { motion } from "framer-motion";
import "./Menu.css"



const LoginREG = () => {

    const [logHover, toggleHover3] = React.useState(false);
    const toggleHoverlogin = () => {
      toggleHover3(!logHover);
    };
   
    const loginAnimate = {
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
      <div className="container-menu">
        <div>
          <motion.div
            className="menu-item1"
            onHoverStart={toggleHoverlogin}
            onHoverEnd={toggleHoverlogin}
          >
            <h1>LOGIN</h1>
            <motion.div
              className="sub-login"
              initial="exit"
              animate={logHover ? "enter" : "exit"}
              variants={loginAnimate}
            >
              <div className="sub-menu-backgroundlogin" />
              <div className="sub-menu-containerlogin"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
};

export default LoginREG;
