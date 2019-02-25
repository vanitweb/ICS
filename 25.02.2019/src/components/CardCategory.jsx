import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Button, Col } from 'reactstrap';
import './../../assets/stylesheets/card.css'
import PropTypes from 'prop-types';
import {Link, BrowserRouter}  from 'react-router-dom';

class CardCategory extends Component {
    static propTypes = {
        img : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        explaText : PropTypes.string.isRequired,
    }
	render() {   
        const { img, title, explaText, cardClick, CardClass} = this.props;
		return(
            <Col lg = {3} md={6} sm = {6} xs = {8} className="cardOne">
                <Card>
                    <CardImg variant="top" src={img} />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardText className = {CardClass}>{explaText}</CardText>								  	    					
                        <Link to={`/category/${title}`}>
                            <Button color="info" onClick = {cardClick}>Մանրամասն</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>
		);
	}
}



export default CardCategory;