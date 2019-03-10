import React, { Component }  from 'react';
import {Modal, ModalHeader, ModalBody,ModalFooter, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';

import './../../../../assets/stylesheets/header.css';

import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
class ModalLogin extends Component {
  static contextTypes = {
  AppStore : PropTypes.shape({
    _Data : PropTypes.array,
    InfoLogIn : PropTypes.func,
    LogInTest : PropTypes.func,
    Login : PropTypes.object,
  }).isRequired
  }
    constructor(props) {
          super(props);
          this.toggle = this.toggle.bind(this);
          this.state = {
              modal: false
          };
    }
    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }
    render(){
      const {_Data, InfoLogIn, Login, LogInTest} = this.context.AppStore;
		return(
			<div>
          <Button className="ml-auto mod_btn" outline color="link" onClick={this.toggle}>{this.props.buttonLabel}{Messages.header.signIn.signIn}</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{Messages.header.signIn.signInTitle}</ModalHeader>
              <ModalBody>
                  <Form>
                      <FormGroup>
                          <Label for="exampleEmail">{Messages.header.signIn.signInEmail}</Label>
                          <Input type="email" onChange={InfoLogIn} name="email" id="exampleEmail" placeholder={Messages.header.signIn.signInEmailPlaceholder} />
                      </FormGroup>
                      <FormGroup>
                          <Label for="examplePassword">{Messages.header.signIn.signInPassword}</Label>
                          <Input type="password" onChange={InfoLogIn} name="password" id="examplePassword" placeholder={Messages.header.signIn.signInPasswordPlaceholder} />
                      </FormGroup>
                  </Form>
              </ModalBody>
              <ModalFooter onClick={this.toggle}>
                  <Button onClick={LogInTest} className="modal_button">{Messages.header.signIn.signInButton}</Button>
              </ModalFooter>


          </Modal>
      </div>
		);
	}
}
export default ModalLogin;