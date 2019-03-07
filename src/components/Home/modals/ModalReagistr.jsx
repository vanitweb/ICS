import React, { Component }  from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import Messages from './../../../Messages';

import './../../../../assets/stylesheets/header.css';

class ModalRegister extends Component {
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
			<div >
                <Button className="ml-0 mod_btn" outline color="link" onClick={this.toggle}>{this.props.buttonLabel }{Messages.header.signUp.signUp}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                    <ModalHeader toggle={this.toggle}>{Messages.header.signUp.signUpTitle}</ModalHeader>
                    <ModalBody >
                        <Form>
                            <FormGroup>
                                <Label for="examplePassword">{Messages.header.signUp.signUpName}</Label>
                                <Input type="text"  id="examplePassword" />
                                <Label for="examplePassword">{Messages.header.signUp.signUpSurname}</Label>
                                <Input type="text"  id="examplePassword" />
                                <Label for="exampleEmail">{Messages.header.signUp.signUpEmail}</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder={Messages.header.signUp.signUpEmailPlaceholder} /> 
                                <Label for="exampleEmail">{Messages.header.signUp.signUpNickName}</Label>
                                <Input type="text" id="exampleEmail"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">{Messages.header.signUp.signUpPassword}</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder={Messages.header.signUp.signUpPasswordPlaceholder} />
                                <Label for="examplePassword">{Messages.header.signUp.signUpRepeatPassword}</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder={Messages.header.signUp.signUpwordPlaceholder} />
                            </FormGroup>
                            <button className="modal_button">{Messages.header.signUp.signUpButton}</button>
                        </Form>
                    </ModalBody>
                </Modal>
			</div>
		);
	}
}
export default ModalRegister;