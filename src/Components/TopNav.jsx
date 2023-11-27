import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import  Home  from './Home';
import { About } from './About';
import Chatlist from './Chatlist';
import Contact from './Contact';
import logos from '../Images/samosa.jpg'
import './app.css'


const TopNav = () => {
  return (
    <BrowserRouter>
     <div className='navbar'>
      <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
         <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
         <div className="img">
         <img src={logos} alt='..'/>
          <Navbar.Brand>Chat$hop</Navbar.Brand>
         </div>
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'><i class="fa fa-home"></i>Home</Nav.Link>
              <Nav.Link as={Link} to='/about'><i class="fa fa-user"></i>About</Nav.Link>
              <Nav.Link as={Link} to='/chatitem'><i class="fa fa-folder-open"></i>Chatlist</Nav.Link>
              <Nav.Link as={Link} to='/Contact'><i class="fa fa-user"></i>Contact</Nav.Link>
            </Nav>
            <Nav>
               <Button variant='primary'>Signup</Button>
            </Nav>
         </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/chatitem' element={<Chatlist/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}
export default TopNav;