import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';

class CardCategory extends Component {
	render() {
        const { img,title,buttonText,explaText} = this.props;
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