import React, { Component } from 'react';
import {Home} from './../../stores/home.js';
import Carusel from './Carusel';
import { Container, Row } from 'reactstrap';
import './../../../assets/stylesheets/section.css';

class Section extends Component {
    categoryMap = new Home().categoryMap;
    render() {
        return (
            <section>
                <Container fluid className = "carusel">
                    <Carusel />
                </Container>
                <Container className = "cardSection">
                    <Row>
                        {this.categoryMap}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Section;
