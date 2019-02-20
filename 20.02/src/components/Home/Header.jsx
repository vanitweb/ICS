import React, { Component } from 'react';
import {Home} from './../../stores/home.js';
import {Navbar, NavDropdown, Form , FormControl} from 'react-bootstrap';
import {Grid } from 'react-flexbox-grid';
import logo from './../../../assets/images/header/logo.png';
import './../../../assets/stylesheets/header.css';

class Header extends Component {
    varsaviranocnerMap = new Home().varsaviranocnerMap;
    render() {
        return (
            <div className = "header">
                <Grid>
                    <Navbar bg="light" expand="lg">
                        <a href = "aaa">
                            <img
                                src= {logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                              />
                        </a>
                        <div variant="light">
                            <span> Ոճի Զգացմունք </span>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <NavDropdown title="Գեղեցկության սրահներ" id="basic-nav-dropdown" className="mr-auto">
                                {this.varsaviranocnerMap}
                            </NavDropdown>
                            <Form inline>
                                <FormControl type="text" placeholder="Որոնել" className="mr-sm-2" />
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Grid>
            </div>
        );
    }
}

export default Header;
