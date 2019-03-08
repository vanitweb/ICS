import React,{Component} from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';

import AcountSet from './AcountSet';

import AcountSetting from './AcountSet';
import AcountVisits from './Visits';

import './../../../assets/stylesheets/acount.css';
import AppStor from './../../stores/AppStore.js';
import UserData from './../../data/userData';

class Acount extends Component {
  static contextTypes = {
      AppStore : PropTypes.shape({
          _UserData : PropTypes.array,
      }).isRequired
  }
    render() {

      const UserData = this.context.AppStore._UserData;
      console.log(UserData.name);
		return (
            <Container>
                <Row>
                    <Col lg = "12"  md = "12" sm = "12" className = "d_flex">
                        <div className = "d_inline">
                            <div className = "text_design user">
                                <img src={UserData[0].image} alt="User Image" />
                                <div className="info" >
                                    <p>{Messages.AcountUser.acountName} {UserData[0].name}</p>
                                    <p>{Messages.AcountUser.acountSurname} {UserData[0].surname}</p>
                                    <p>{Messages.AcountUser.acountPhoneNumber} {UserData[0].phoneNumber}</p>
                                    <AcountSetting />
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
