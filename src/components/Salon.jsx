import React,{Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../Messages';
import CardCategory from './CardCategory';
import './../../assets/stylesheets/salon.css';

class Salon extends Component {
    static propTypes = {
        Data : PropTypes.array.isRequired,
    }
    render() {
        const Data = this.props.Data[this.props.match.params.i];
		return (
            <Container className = "salon-page">
                <Row>
                    <Col >
                        <h1 className='varsAnun'>{Data.name}</h1>
                    </Col>

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

					</Col>

        		</Row>
        		
                {Data.category.map(item => {
                    return 	<React.Fragment key = {item.prof}>
                        <Row align = "center" className = "mt-5 mb-5">
                            <Col>
                                <h2>{item.prof}</h2>
                            </Col>
                        </Row>
                        <Row>{item.workers.map(item1 => {
                                return <React.Fragment key = {item1.surname}>
                                    <CardCategory 
                                        x =  {`/Salon/${this.props.match.params.i}/${item1.name}`}
                                        img={item1.img}
                                        explaText= {`${item1.name} ${item1.surname}`}
                                        cardClick={()=>console.log()}
                                        buttonText = {Messages.table.specialiistButtonText}
                                        />

                                </React.Fragment>
                            })}  
                        </Row>
                        
                    </React.Fragment>
                })}
			</Container>
		);
	}
}

export default Salon;