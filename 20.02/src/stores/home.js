import {Data} from './data.js';
import {NavDropdown} from 'react-bootstrap';
import React from 'react';
import { Col } from 'reactstrap';
import CardCategory from './../components/Home/CardCategory.jsx';

class Home {
    categoryMap = new Data().category.map(item =>{
        return <Col lg = {3} md={6} sm = {6} xs = {8} className="cardOne" key = {item.title}>
            <CardCategory 
                img={item.img}
                title={item.title}
                explaText={item.explaText}
                />
        </Col>
    });
    varsaviranocnerMap = new Data().varsaviranocner.map((item, index) => {
        return <NavDropdown.Item href="#action/3.1" key = {index}>{item.name}</NavDropdown.Item>
    });
}
export {Home}