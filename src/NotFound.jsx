import React, { Component } from 'react';
//import Not from './../../assets/images/NotFound/404.png'

class NotFound extends Component{
	
	render() {
		const notStyle = {
			paddingLeft: '40%',
    		paddingTop: '5%',
		}
		return(
            <>
            <h1>404</h1>
			{/*<img src={Not} style={notStyle}/>*/}
            </>
		);
	}
}

export default NotFound;