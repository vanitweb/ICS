import React from 'react';
import logo from './../../../assets/images/header/logo.png';
import Modal_login from './ModalLogin';
import Modal_register from './ModalReagistr';
import {Link, BrowserRouter}  from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem ,
  Container,
  
} from 'reactstrap';

import './../../../assets/stylesheets/header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
      const {Messages, dropdown, changeDropdown} = this.props;
    return (
        <div>
            <Container>
                <div >
                    <Navbar  light expand="md">
                        <NavbarBrand href="/">                        
                            <img
                                src= {logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            <span className="title">{Messages.title}</span>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar> 
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav className="drop" caret>
                                                {Messages.dropDown}
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                {dropdown.map((item,index) =>{
                                                    return <Link to={`/varsaviranoc/${index}`}>
                                                        <DropdownItem  className="drop_item" key = {item.address} data-index={index} onClick = {changeDropdown}>
                                                        {item.name}
                                                        </DropdownItem>
                                                        </Link>
                                                    
                                                })} 
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        <NavItem>
                                            <Modal_login
                                                signIn = {Messages.signIn}
                                                /> 
                                        </NavItem>
                                        <NavItem>
                                            <Modal_register
                                                signUp = {Messages.signUp}
                                                />
                                        </NavItem>
                                        </Nav>
                            </Collapse>
                    </Navbar>
                </div>
            </Container>
            
      </div>
    );
  }
}
