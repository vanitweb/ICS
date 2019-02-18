import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import fb from './../../../assets/images/footer/facebook.png';
import insta from './../../../assets/images/footer/instagram.png';
import tw from './../../../assets/images/footer/twitter.png';
import you from './../../../assets/images/footer/youtube.png';
import git from './../../../assets/images/footer/github.png';
import ok from './../../../assets/images/footer/odnoklassniki.png';
import './../../../assets/stylesheets/footer.css';
class Footer extends Component {
	render() {
		return (

			<footer>
				<Container>
					<Row>
						<Col md={4} sm={8}>
							<ul>
								<li><a href="a">Mail: gexeckutyun@mail.ru</a></li>
								<li><a href="a">TelePhone: +37498722717</a></li>
								<li><a href="a">TelePhone: +37496550272</a></li>
								<li><a href="a">TelePhone: +37493399432</a></li>
								<li><a href="a">©Copyright BEAUTY SAlON 17.02.2019</a></li>
							</ul>
						</Col>
						<Col md={4} sm={8}>
							<ul>
								<li><a href="a">Barber - Shaves & Trims.com</a></li>
								<li><a href="a">Blind Barber - Stay Handsome.com</a></li>
								<li><a href="a">barberha.com</a></li>
							</ul>
						</Col>
						<Col md={4}  sm={8}  xs={8} >
						<ul>
							<li>
								<a href="a"><img src={fb} alt="Facebook.com"  className="icon_width"/></a>
								<a href="a"><img src={insta} alt="instagram"  className="icon_width"/></a>
								<a href="a"><img src={tw} alt="twitter"  className="icon_width"/></a>
								
								<a href="a"><img src={you} alt="youtube"  className="icon_width"/></a>
								
							</li>
						</ul>
{/*							<div className="top_icon">
							
							</div>*/}
						</Col>
		
					</Row>
				</Container>
			</footer>
		);
	}
}
export default Footer;