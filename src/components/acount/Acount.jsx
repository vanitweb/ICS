import React,{Component} from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';

import AcountSet from './AcountSet';

import AcountSetting from './AcountSet';
import AcountVisits from './Visits';

import './../../../assets/stylesheets/acount.css';

@observer
class Acount extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _UserData : PropTypes.array,
        }).isRequired
    }

    render() {
        const {_UserData} = this.context.AppStore;
        const id = 0;
        const UserData = _UserData.users[id];
		return (
            <Container>
                <Row>
                    <Col lg = "12"  md = "12" sm = "12" className = "d_flex">
                        <div className = "d_inline">
                            <div className = "text_design user">
                                <img src={UserData.image} alt="User Image" />
                                <div className="info" >
                                    <p>{Messages.AcountUser.acountName} {UserData.name}</p>
                                    <p>{Messages.AcountUser.acountSurname} {UserData.surname}</p>
                                    <p>{Messages.AcountUser.acountPhoneNumber} {UserData.phoneNumber}</p>
                                    <AcountSetting  userId={id}/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg = "12" md = "12" sm = "12">
                        <h3 className="visits">{Messages.AcountUser.acuntVisits}</h3>
                        <AcountVisits />
                    </Col>
                </Row>
			</Container>
		);
	}
}

export default Acount;
