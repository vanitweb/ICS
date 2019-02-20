import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Button } from 'reactstrap';

class CardCategory extends Component {
    static propTypes = {
        title : PropTypes.string.isRequired,
        explaText : PropTypes.string.isRequired,
        img : PropTypes.string.isRequired,
    }
	render() {
        const {title, explaText, img} = this.props;
		return(
            <Card>
                <CardImg variant="top" src={img} />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{explaText}</CardText>	
                    <Button variant="primary">Մանրամասն</Button>
                </CardBody>
            </Card>
		);
	}
}



export default CardCategory;