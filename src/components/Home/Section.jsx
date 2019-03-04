import React, { Component } from 'react';
import { Container,  Row } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react'

import Carusel from './Carusel';
import CardCategory from './../CardCategory';

import Messages from './../../Messages';
import {homeConfigs} from './../../config/categoryConfig';

import './../../../assets/stylesheets/section.css';

@observer
class Section extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            cardClick : PropTypes.func,
        }).isRequired
    }
    render() {
        const {cardClick} = this.context.AppStore;
        return (
            <section>
                <Container fluid className = "carusel">
                    <Carusel/>
                </Container>
                <Container className = "cardSection">
                    <Row>
                        {homeConfigs.categorys.map((item ,index) =>{
                            return  <React.Fragment key = {item.title}>
                                <CardCategory 
                                    img={item.img}
                                    title={item.title}
                                    explaText={item.explaText}
                                    CardClass = "cardSection1"
                                    buttonText = {Messages.section.homeCardButtonText}
                                    url = {'category'}
                                    name ={`${item.title}-${index}`}
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
