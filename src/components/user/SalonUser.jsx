import React,{Component} from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';
import CardCategory from './../CardCategory';
import notification from './../../../assets/images/salon/notification.png';
import './../../../assets/stylesheets/salon.css';
import Settings from './Settings';

import AddCategory from './AddCategori'
import AddWorker from './SalonUserAddWorker';

@observer
class SalonUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            deleteCategory : PropTypes.func,
            deleteCard : PropTypes.func,
        }).isRequired
    }
    render() {
        const {_Data, deleteCard, deleteCategory} = this.context.AppStore;
        const DataSalon = _Data[this.props.match.params.i];
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
                      <Settings />


					</Col>

        		</Row>
        		
                {DataSalon.category.map((item, index) => {
                    return 	<React.Fragment key = {item.prof}>
                        <Row align = "center" className = "mt-5 mb-5">
                            <Col>
                                <h2>
                                    {item.prof}
                                    <Button color="danger" className="delete" onClick = {deleteCategory} data-index = {index} salon-name = {DataSalon.name}>X</Button>
                                </h2>
                            </Col>
                        </Row>
                        <Row>{item.workers.map((item1, index1) => {
                                return <React.Fragment key = {item1.surname}>
                                    <CardCategory 
                                        deleteCard = {<Button color="danger" className="delete" onClick = {deleteCard} data-index ={index1} prof ={item.prof} salon-name = {item1.salonTitle}>X</Button>}
                                        img={item1.img}
                                        title= {`${item1.name} ${item1.surname}`}
                                        cardClick={()=>{}}
                                        buttonText = {Messages.table.specialiistButtonText}
                                        url = {this.props.match.url}
                                        />

                                </React.Fragment>
                            })}
                        <AddWorker salonName={DataSalon.name} category={item.prof} address={DataSalon.address}/>
                        </Row>
                        
                    </React.Fragment>
                })}
                <Row align = "center" className = "mt-5 mb-5">
                     
                   <AddCategory salonName = {DataSalon.name}/>
                </Row>
			</Container>
		);
	}
}

export default SalonUser;