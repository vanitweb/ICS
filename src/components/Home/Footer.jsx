import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Messages from './../../Messages';

import './../../../assets/stylesheets/footer.css';

import facebook from './../../../assets/images/footer/facebook.png';
import instagram from './../../../assets/images/footer/instagram.png';
import twitter from './../../../assets/images/footer/twitter.png';
import youtube from './../../../assets/images/footer/youtube.png';

class Footer extends Component {
	render() {
		return (
			<footer>
				<Container>
					<Row>
						<Col md={4} sm={8}>
							<ul>
								<li><a href="a">{Messages.footer.footerEmail}</a></li>
								<li><a href="a">{Messages.footer.footerPhone1}</a></li>
								<li><a href="a">{Messages.footer.footerPhone2}</a></li>
								<li><a href="a">{Messages.footer.footerPhone3}</a></li>
								<li><a href="a">{Messages.footer.footerDate}</a></li>
							</ul>
						</Col>
						<Col md={4} sm={8}>
							<ul>
								<li><a href="a">{Messages.footer.footerLi1}</a></li>
								<li><a href="a">{Messages.footer.footerLi2}</a></li>
								<li><a href="a">{Messages.footer.footerLi3}</a></li>
							</ul>
						</Col>
						<Col md={4}  sm={8}  xs={8} >
							<ul>
								<li>
									<a href="a"><img src={facebook} alt="Facebook.com"  className="icon_width"/></a>
									<a href="a"><img src={instagram} alt="instagram"  className="icon_width"/></a>
									<a href="a"><img src={twitter} alt="twitter"  className="icon_width"/></a>
									<a href="a"><img src={youtube} alt="youtube"  className="icon_width"/></a>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
export default Footer;