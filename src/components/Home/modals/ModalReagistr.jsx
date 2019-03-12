import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../../Messages';

import Validator from './../../../stores/validator';

import './../../../../assets/stylesheets/setting.css';

@observer
class ModalRegister extends Component {
  static contextTypes = {
	AppStore : PropTypes.shape({
    _Data : PropTypes.array,
    InfoRegister : PropTypes.func,
    SaveValues : PropTypes.func,
    Registr : PropTypes.object,
	}).isRequired
  }

  constructor(props) {
	super(props);
	this.state = {
	  modal: false
	};

	this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
	this.setState(prevState => ({
	  modal: !prevState.modal
	}));
  
  }

  Validator = new Validator();
    handleUserInput = (event) => {
         this.context.AppStore.InfoRegister(event);
         this.Validator.informationModalRegistr.fieldName = event.target.name;
         this.Validator.informationModalRegistr.value = event.target.value;       
    }
  render() {
	const {_Data,  InfoRegister, SaveValues, Registr} = this.context.AppStore;

	return (
	  <div>
        <Button className="ml-0 mod_btn" outline color="link" onClick={this.toggle}>{this.props.buttonLabel }{Messages.header.signUp.signUp}</Button>
    		<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{Messages.header.signUp.signUpTitle}</ModalHeader>
    			<ModalBody>
              <Form>
                  <FormGroup>
                      <Label for="examplePassword">{Messages.header.signUp.signUpName}</Label>
                      <Input type="text" name="usName" onChange={this.handleUserInput} id="examplePassword" />
                      <p className="has-error">{this.Validator.informationModalRegistr.fieldName === 'usName' && this.Validator.validateModalRegistr}</p>

                      <Label for="examplePassword1">{Messages.header.signUp.signUpSurname}</Label>
                      <Input type="text"  name="usSurName" onChange={this.handleUserInput} id="examplePassword1" />
                      <p className="has-error">{this.Validator.informationModalRegistr.fieldName === 'usSurName' && this.Validator.validateModalRegistr}</p>

                      <Label for="exampleEmail">{Messages.header.signUp.signUpEmail}</Label>
                      <Input type="email" name="email" onChange={this.handleUserInput} name="email" id="exampleEmail" placeholder={Messages.header.signUp.signUpEmailPlaceholder} />
                      <p className="has-error">{this.Validator.informationModalRegistr.fieldName === 'email' && this.Validator.validateModalRegistr}</p>

                      <Label for="exampleEmail1">{Messages.header.signUp.signUpPhone}</Label>
                      <Input type="text" name="phone" onChange={this.handleUserInput} id="exampleEmail1"/>
                      <p className="has-error">{this.Validator.informationModalRegistr.fieldName === 'phone' && this.Validator.validateModalRegistr}</p>
                  </FormGroup>
                  <FormGroup>
                      <Label for="examplePassword2">{Messages.header.signUp.signUpPassword}</Label>
                      <Input type="password" name="password" onChange={this.handleUserInput} name="password" id="examplePassword2" placeholder={Messages.header.signUp.signUpPasswordPlaceholder} />
                      <p className="has-error">{this.Validator.informationModalRegistr.fieldName === 'password' && this.Validator.validateModalRegistr}</p>

                      <Label for="examplePassword3">{Messages.header.signUp.signUpRepeatPassword}</Label>
                      <Input type="password" name="repeatPassword" onChange={this.handleUserInput} name="password" id="examplePassword3" placeholder={Messages.header.signUp.signUpwordPlaceholder} />
                       <p className="has-error">{this.Validator.informationModalRegistr.fieldName === 'repeatPassword' && this.Validator.validateModalRegistr}</p>

                       {Messages.header.signUp.signUpCheck} <Input type="checkbox" className = "signUpCheck"/>
                  </FormGroup>
              </Form>
    			</ModalBody>
    			<ModalFooter onClick = {this.toggle}>
    				<Button color="info" onClick={SaveValues} className="modal_button">{Messages.settings.saveChange}</Button>
    			</ModalFooter>
    		</Modal>
	  </div>
	);
  }
}

export default ModalRegister;

//////////////////////////////////
