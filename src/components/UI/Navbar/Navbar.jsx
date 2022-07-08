import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";

const Navbar = () => {
 
  return (
   <div className="navbar ">
   <div className="navbar__row">

   <div className="logo">&#9998;POSTLIST&#10000;</div>

   <div className="navbar__links">
   <div>

   <Link className="link" to="/about">ABOUT</Link>
   </div>
   <div>

   <Link className="link" to="/posts">POSTS</Link>
   </div>

   </div>
   </div >

   </div>
   );
};

export default Navbar;