import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Button, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';

import './../../assets/stylesheets/card.css'

class CardCategory extends Component {
    static propTypes = {
        img : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        explaText : PropTypes.string.isRequired,
        cardClick : PropTypes.func.isRequired,
        CardClass : PropTypes.string,
        buttonText : PropTypes.string.isRequired,
    }
	render() {   
        const { img, title, explaText, cardClick, CardClass, buttonText} = this.props;
		return(
            <Col lg = {3} md={6} sm = {6} xs = {8} className="cardOne">
                <Card>
                    <CardImg variant="top" src={img} heigth = "200px" width = "200px"/>
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardText className = {CardClass}>{explaText}</CardText>
                        <Link to={`/category/${title}`}>
                            <Button color="info" onClick = {cardClick}>{buttonText}</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>
		);
	}
}



export default CardCategory;