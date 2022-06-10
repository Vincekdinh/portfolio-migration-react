import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className=' ui inverted menu'>
      <h1 className='header item'>
        <i className={props.icon}>{props.title}</i>
      </h1>
      <Link to='/' className='right item'>
        Home
      </Link>
      <Link to='/portfolio' className='item'>
        Portfolio
      </Link>
      <Link to='/contact' className='item'>
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
