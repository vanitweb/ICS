import React, { Component } from 'react';
import {Navbar, NavDropdown, Form , FormControl} from 'react-bootstrap';
import {Grid } from 'react-flexbox-grid';
import logo from './../../../assets/images/header/logo.png';
import './../../../assets/stylesheets/header.css';

class Header extends Component {
    render() {
        const varsaviranocner = [
            {
                name: "Սյուզի իմիջ կենտրոն",  
            },
            {
                name: "Փարվանա"
            },
            {
                name: "Սվետլանա գեղեցկության սրահ",
            },
            {
                name: "Մերլին Մոնռո",
            },
            {
                name: "Կոկետ Բյութի",
            },
            {
                name: "Արփի",
            },
            {
                name: "Անի գեղեցկության սրահ",
            },
            {
                name: "Անահիտ",
            }
        ];
        const varsaviranocnerMap = varsaviranocner.map((item,index) => {
            return <NavDropdown.Item key={index} href="#">{item.name}</NavDropdown.Item>
        });

        
        return (
            <div className = "header">
                <Grid>
                    <Navbar  expand="lg" className="header_color">
                        <a href='#kjhfdsa'>
                            <img
                                src= {logo}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                              />
                         </a> 
                        <div variant="light" >
                            <h1 className="title_h1">Beauty Salon</h1>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <NavDropdown title="Գեղեցկության սրահներ" id="basic-nav-dropdown" className="mr-auto">
                                {varsaviranocnerMap}
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
