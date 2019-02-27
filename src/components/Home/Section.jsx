import React, { Component } from 'react';
import { Container,  Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Carusel from './Carusel';
import CardCategory from './../CardCategory';

import Messages from './../../Messages';
import {homeConfigs} from './../../config/categoryConfig';

import './../../../assets/stylesheets/section.css';

class Section extends Component {
    static propTypes = {
        cardClick : PropTypes.func.isRequired,
    }
    render() {
        const {cardClick} = this.props;
        return (
            <section>
                <Container fluid className = "carusel">
                    <Carusel/>
                </Container>
                <Container className = "cardSection">
                    <Row>
                        {homeConfigs.categorys.map(item =>{
                            return  <React.Fragment key = {item.title}>
                                <CardCategory 
                                    cardClick = {cardClick}
                                    img={item.img}
                                    title={item.title}
                                    explaText={item.explaText}
                                    CardClass = "cardSection1"
                                    buttonText = {Messages.section.homeCardButtonText}
                                    />
                            </React.Fragment>
                        })}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Section;