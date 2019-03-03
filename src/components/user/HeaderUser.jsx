import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, NavbarBrand,
        Nav, UncontrolledDropdown, DropdownToggle,
        DropdownMenu, DropdownItem , Container,Button} from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../Messages';

import logo from './../../../assets/images/header/logo.png';

//import './../../../../assets/stylesheets/header2.css';

class HeaderUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            Data : PropTypes.array.isRequired,  
        }).isRequired
    }
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
        const dropdown = this.context.AppStore.Data;
        return (
            <div >
                <Container>
                    <div className = "header_design">
                        <Navbar  light expand="md">
                            <NavbarBrand href="/">                        
                                <img
                                    src= {logo}
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                                <span className="title">{Messages.header.title}</span>
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle}/>
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto dropd" navbar> 
                                        <UncontrolledDropdown nav inNavbar >
                                            <DropdownToggle nav className="drop" caret>
                                                {Messages.header.dropDown}
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                {dropdown.map((item,index) =>{
                                                    return <Link to={`/Salon/${index}`} key = {item.address}>
                                                        <DropdownItem  className="drop_item" >
                                                            {item.name}
                                                        </DropdownItem>
                                                    </Link>
                                                })} 
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                      
                                    </Nav>
                            </Collapse>
                            <Nav>
                                <Button className="ml-auto mod_btn"  color="link" onClick={this.toggle}>{this.props.buttonLabel}{Messages.header.UserPage}</Button>
                                <Button className="ml-auto mod_btn"  color="link" onClick={this.toggle}>{this.props.buttonLabel}{Messages.header.LogOut}</Button>
                            </Nav>
                        </Navbar>
                    </div>
                </Container>
            </div>
        );
    }
}
export default HeaderUser
