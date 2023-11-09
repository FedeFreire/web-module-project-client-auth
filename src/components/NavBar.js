import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-header">FRIENDS DATABASE</div>
      <div className="navbar-links">
        <Link to="/login">LOGIN</Link>
        <Link to="/friends">FRIENDLIST</Link>
        <Link to="/friends/add">ADDFRIEND</Link>
        <Link to="/logout">LOGOUT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
