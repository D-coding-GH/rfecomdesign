import React, {useState} from "react";
import { motion } from "framer-motion";
import axios from 'axios'
import "./Menu.css";

const LoginREG = () => {
  const [logHover, toggleHover3] = useState(false);
 
  const [regUser,sendUser] = useState({
    name:'',
    email:'',
    password:'',
    // ConfirmPassword:''
  })

  const {rName,rEmail,rPassword} = regUser
  

 const toggleHoverlogin = () => {
    toggleHover3(!logHover);
  };

  const loginAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  // const regChange = event => {
  //   const  { name, value} = event.target
 
 
  //   sendUser({...regUser, [name]:value})
  //   console.log(sendUser)
  //   console.log(regUser)
  // }



 const regSubmit = async event => {
   event.preventDefault();

   const  { name, value} = event.target
 
 
    sendUser({...regUser, [name]:value})
    console.log('hellosend',sendUser)
    console.log('helloreg',regUser)


  await axios.post('/createUser',  {name:regUser.name,email:regUser.email,password:regUser.password})
   console.log('hellosend',{name:regUser.name,email:regUser.email,password:regUser.password })
   
 }

  return (
    <div className="container-menu">
      <div>
        <motion.div
          className="menu-item1"
          onHoverStart={toggleHoverlogin}
          onHoverEnd={toggleHoverlogin}
        >
          <h3>LOGIN</h3>
          <motion.div
            className="sub-login"
            initial="exit"
            animate={logHover ? "enter" : "exit"}
            variants={loginAnimate}
          >
            <div className="sub-menu-backgroundlogin" />
            <div className="sub-menu-containerlogin"></div>
            <div className="loginposition">
              <div>
                <form className="formposition1"  >
                  <h2>login</h2>
                  <label>Email</label>
                  <input type="email" name="" />
                  <br />

                  <label>Password</label>
                  <input type="password" name="" />
                  <br />

                  <button type="submit">login</button>
                </form>

                <form className="formposition1" onSubmit={regSubmit} >
                  <h2>register</h2>
                  <label>Name</label>
                  <input 
                  type="text"
                  name ='name'
                  value={rName}
                  onChange={regSubmit}
                  />
                  <br />

                  <label>Email</label>
                  <input 
                  type="email"
                  name='email' 
                  value={rEmail}
                  onChange={regSubmit}
                  label='email'
                  required
                  />
                  <br />

                  <label>Password</label>
                  <input 
                  type="password"
                  name='password' 
                   value={rPassword}
                   onChange={regSubmit}
                   label='password'
                   required
                  />
                  <br />

                  {/* <label>confirm Password</label>
                  <input 
                  type="password"
                  name='confirm password' 
                   value={rConfirmPassword}
                   handleChange={regChange}
                   label=' confirm password'
                   required
                  />
                  <br /> */}

                  <button type="submit">sign up</button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginREG;
