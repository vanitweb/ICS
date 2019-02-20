import React, { Component } from 'react';
import logo from './../../assets/images/header/logo.png';
import { Container, Row, Col } from 'reactstrap';
import CardCategory from './Home/CardCategory.jsx';
import david from './../../assets/images/varsaviranoc/bgImg.jpg';
import './../../assets/stylesheets/Varsaviranoc.css';
class Varsaviranoc extends Component {

	render() {
		const varsavirner = [
			{
				nkar : david,
				anun : "Davit",
				azganun : "asdadf"
			},
			{
				nkar : david,
				anun : "Davit",
				azganun : "asdadf"
			},
			{
				nkar : david,
				anun : "Davit",
				azganun : "asdadf"
			},
			{
				nkar : david,
				anun : "Davit",
				azganun : "asdadf"
			},
		];

		const varsvirnerMap = varsavirner.map(item => {
        				return <CardCategory img={item.nkar} title={item.anun} explaText={item.azganun}/>
        			})
		return (
			<Container>
				<Row>
					<Col md="6">
						<img src={logo} alt="" className="logoSal"/>
					</Col>
					<Col md="6">
						<h1>Dior</h1>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
						when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
						It has survived not only five centuries, but also the leap into electronic typesetting, remaining
						essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
						containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.</p>
					</Col>
        		</Row>
        		<Row>
        			<Col>
        				<h2>Dimac</h2>
        				<p>heraxosahamar</p>
        			</Col>
        		</Row>
        		<Row>
        			{varsvirnerMap}
        		</Row>
			</Container>
		);
	}
}

export default Varsaviranoc;