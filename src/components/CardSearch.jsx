import React, { Component } from 'react';
import { Card, Button, Media } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../Messages';

class CardSearch extends Component {
    static propTypes = {
        cardClick : PropTypes.func.isRequired,
    }
    render() {
        const {prof, image, nameSurname, address, salonTitle} = this.props;
        return (
            <Card>
                    <Media>
                        <Media left href="#">
                            <img src={image} alt = "specialistImg" width = "200px" height = "200px"/>
                        </Media>
                        <Media body className="full_text">
                        <Media heading className="name_title">
                            {nameSurname}
                        </Media>
                            {Messages.table.userAddress}` {address}
                            <div>{Messages.table.beautySalonName}`  {salonTitle}</div>
                        </Media>
                     <Button className="btn_card_category">Մանրամասն</Button>
                </Media>
            </Card>
        );
    }
}

export default CardSearch;
