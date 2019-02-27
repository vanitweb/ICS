import React, { Component }  from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
//import PropTypes from 'prop-types';

import Messages from './../../Messages'

import './../../../assets/stylesheets/header.css';


class ModalLogin extends Component {
//    static propTypes = {
//        
//    }
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }
    render(){
		return(
			<div>
				<Button className="ml-auto mod_btn"  color="link" onClick={this.toggle}>{this.props.buttonLabel}{Messages.header.signIn.signIn}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{Messages.header.signIn.signInTitle}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">{Messages.header.signIn.signInEmail}</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder={Messages.header.signIn.signInEmailPlaceholder} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">{Messages.header.signIn.signInPassword}</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder={Messages.header.signIn.signInPasswordPlaceholder} />
                            </FormGroup>
                            <button className="modal_button">{Messages.header.signIn.signInButton}</button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
		);
	}
}
export default ModalLogin;