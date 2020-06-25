import React from 'react';
import {Link} from 'react-router-dom';
// import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => (
   
    <nav>
<ul>
    <li>
        <Link to='/'>Home</Link>
    </li>
    <li>
        <Link to='/about'>About </Link>
    </li>
    <li>
        <Link to='/athletes'>Athletes List</Link>
    </li>
</ul>
</nav>
    

);

export default NavBar;




// <NavBar bg='light'>
//         <Navbar.Brand ><Link to='/'>Home</Link></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
//         <Nav className='mr-auto'>
//             <Nav.Link ><Link to='/about'>About </Link></Nav.Link>
//             <Nav.Link ><Link to='/athletes'>Athletes List</Link></Nav.Link>
//         </Nav>
//     </NavBar>