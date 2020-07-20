import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import s from './style.module.css';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className={s.root}>
      <Navbar color="dark" dark expand='md'>
        <NavbarBrand className={s.logo}>Whip on The River</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-auto">
            <NavItem className="ml-auto"> 
              <NavLink><a className={s.link} href="#link1">O projektcie</a></NavLink>
            </NavItem>
            <NavItem className="ml-auto">
              <NavLink><a className={s.link} href="#link2">Pogoda na ryby</a></NavLink>
            </NavItem >
            <NavItem className="ml-auto">
              <NavLink><a className={s.link} href="#link3">Formularz</a></NavLink>
            </NavItem>
            <NavItem className="ml-auto"> 
              <NavLink><a className={s.link} href="#link4">Kontakt</a></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;