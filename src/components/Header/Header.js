import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  
  Nav,
  NavItem
} from 'reactstrap';

import {NavLink} from 'react-router-dom';
import Profile from './profile.svg';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
       
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
          </Nav>
          <NavItem>
            <NavLink className="nav-link" to='/profile'><img src={Profile}  height="30" width="41" alt='User'/></NavLink>
            <p style={{ marginRight: 50 }}>User</p> 
   
            </NavItem>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;