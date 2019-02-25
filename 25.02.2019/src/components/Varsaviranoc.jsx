import React,{Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CardCategory from './CardCategory.jsx';

class Varsaviranoc extends Component {
	render() {
        const {Data, Messages} = this.props;
        
		const categoryMap = Data.category.map(item => {
			return 	<React.Fragment key = {item.prof}>
                <Row><Col><h4 className='varsAnun'>{item.prof}</h4></Col></Row>
                <Row>{item.workers.map(item1 => {
        					return <React.Fragment key = {item1.surname}>
        						<CardCategory img={item1.img} title={item1.name} explaText={item1.surname}/>
        					</React.Fragment>
        				})}
            </Row>
        			</React.Fragment>
		})
		return (
			<Container>
				<Row>
					<Col>
						<h2 className='varsAnun'>{Data.name}</h2>
					</Col>
				</Row>
				<Row>
					<Col md="6">
						<img src={Data.img} alt="" className="logoSal" width = "100%"/>
					</Col>
					<Col md="6">
						<h1>{Messages.beautySalons.beautySalonsAbout}</h1>
						<p>{Data.info}</p>
					</Col>
        		</Row>
        		<Row>
        			<Col>
        				<p>{Messages.beautySalons.beautySalonsAddress}` {Data.address}</p>
        				<p>{Messages.beautySalons.beautySalonsPhone}` {Data.phone}</p>
        			</Col>
        		</Row>
        		{categoryMap}
			</Container>
		);
	}
}

export default Varsaviranoc;