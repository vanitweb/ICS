import React,{Component} from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';
import CardCategory from './../cards/CardCategory';

import notification from './../../../assets/images/salon/notification.png';

import './../../../assets/stylesheets/salon.css';

@observer
class Salon extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            deleteCategory : PropTypes.func,
            deleteWorker : PropTypes.func,
        }).isRequired
    }
    
    
    render() {
        const {_Data, deleteWorker, deleteCategory, isUser} = this.context.AppStore;
        const salonIndex = this.props.match.params.whichSalon;
        const DataSalon = _Data[salonIndex];
        
		return (
            <Container className = "salon-page">
                <Row>
                    <Col >
                        <h1 className='varsAnun'>{DataSalon.name}</h1>
                    </Col>
                    <img src={notification} alt=""  align="right" width = "50px" height = "50px"/>

				</Row>
				<Row className = "salon-page">
					<Col md="6" >
						<img src={DataSalon.img} alt="" className="logoSal" width = "100%" height = "370vh"/>
					</Col>
					<Col md="6">
						<h2>{Messages.beautySalons.beautySalonsAbout}</h2>
						<p>{DataSalon.info}</p>
                        <p>{Messages.beautySalons.beautySalonsAddress}` {DataSalon.address}</p>
                        <p>{Messages.beautySalons.beautySalonsPhone}` {DataSalon.phone}</p>
                      


					</Col>

        		</Row>
        		
                {DataSalon.category.map(item => {
                    return 	<React.Fragment key = {item.prof}>
                        <Row align = "center" className = "mt-5 mb-5">
                            <Col>
                                <h2>{item.prof}</h2>
                            </Col>
                        </Row>
                        <Row>{item.workers.map((item1, index1) => {
                                return <React.Fragment key = {item1.surname}>     
                                    <CardCategory 
                                        img={item1.img}
                                        title= {`${item1.name} ${item1.surname}`}
                                        name = {item1.id}
                                        buttonText = {Messages.table.specialiistButtonText}
                                        url = {this.props.match.url}
                                        />
                                </React.Fragment>
                            })}
                        </Row>
                        
                    </React.Fragment>
                })}
                <Row align = "center" className = "mt-5 mb-5">  
                </Row>
			</Container>
		);
	}
}

export default Salon;