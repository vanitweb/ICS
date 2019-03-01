import React,{Component} from 'react';
import {Container, Row, Col,Button} from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';
import CardCategory from './../CardCategory';
import notification from './../../../assets/images/salon/notification.png';
import './../../../assets/stylesheets/salon.css';

@observer
class SalonUser extends Component {
    static propTypes = {
        Data : PropTypes.array.isRequired,
    }
    render() {
        const {deleteCard} = this.props;
        const Data = this.props.Data[this.props.match.params.i];
        console.log(Data.category[0].workers)
		return (
            <Container className = "salon-page">
                <Row>
                    <Col >
                        <h1 className='varsAnun'>{Data.name}</h1>
                    </Col>
                    <img src={notification} alt=""  align="right" width = "50px" height = "50px"/>

				</Row>
				<Row className = "salon-page">
					<Col md="6" >
						<img src={Data.img} alt="" className="logoSal" width = "100%" height = "370vh"/>
					</Col>
					<Col md="6">
						<h2>{Messages.beautySalons.beautySalonsAbout}</h2>
						<p>{Data.info}</p>
                        <p>{Messages.beautySalons.beautySalonsAddress}` {Data.address}</p>
                        <p>{Messages.beautySalons.beautySalonsPhone}` {Data.phone}</p>
                        <Button outline color="info"> Փոփոխել տվյալները</Button>

					</Col>

        		</Row>
        		
                {Data.category.map(item => {
                    return 	<React.Fragment key = {item.prof}>
                        <Row align = "center" className = "mt-5 mb-5">
                            <Col>
                                <h2>{item.prof}</h2>
                            </Col>
                        </Row>
                        <Row>{item.workers.map((item1, index) => {
                                return <React.Fragment key = {item1.surname}>
                                    <CardCategory 
                                        x = {`/Salon/0/specialist`}
                                        deleteCard = {<Button color="danger" onClick = {deleteCard} data-index = {index} prof = {item.prof} salon-name = {Data.name} className="delete">X</Button>}
                                        img={item1.img}
                                        explaText= {`${item1.name} ${item1.surname}`}
                                        cardClick={()=>alert()}
                                        buttonText = {Messages.table.specialiistButtonText}
                                        />

                                </React.Fragment>
                            })}
                        <Button outline color="info"> Ավալացնել աշխատող</Button>
                        </Row>
                        
                    </React.Fragment>
                })}
                <Row align = "center" className = "mt-5 mb-5">
                    <Button color="danger" className="addCategotis"> Ավալացնել կատեգորիա</Button> 
                </Row>
			</Container>
		);
	}
}

export default SalonUser;