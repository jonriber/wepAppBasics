import React from 'react';
// import {Link} from 'react-router-dom';
// import './NavBar.css';
// import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//nav using react-bootstrap, similar to html

const NavBar = () => (
    <Nav >
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/athletes">Athletes List</Nav.Link>
    </Nav.Item>
    
  </Nav>

);

export default NavBar;


//Nav using Link from react-router-dom

// <nav>
// <ul>
//     <li>
//         <Link to='/'>Home</Link>
//     </li>
//     <li>
//         <Link to='/about'>About </Link>
//     </li>
//     <li>
//         <Link to='/athletes'>Athletes List</Link>
//     </li>
// </ul>
// </nav>
    