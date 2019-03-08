import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../Messages'

import AppStor from './../../stores/AppStore.js';
import UserData from './../../data/userData';

import './../../../assets/stylesheets/setting.css';

class AcountSetting extends Component {

  static contextTypes = {
      AppStore : PropTypes.shape({
          _UserData : PropTypes.array,
          changeAcount: PropTypes.func,
      }).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
        if(event.target.textContent === Messages.AcountUser.acountName){
          const {_UserData, ChangeUser} = this.context.AppStore;
          const user = _UserData[this.props];
          ChangeUser.name = user.name;
          ChangeUser.surname = user.surname;
          ChangeUser.phone = user.phone;
        }
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
  }

  render() {
    const UserData = this.context.AppStore._UserData;
    return (
      <div>
        <Button outline color="info" onClick={this.toggle}>{Messages.AcountUser.acountChangeData}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{Messages.AcountUser.acountChangeData}</ModalHeader>
            <ModalBody>
                <Form >
                    <FormGroup>
                        <Label></Label>
                        <Input type="file" name="file"  accept="image/png, image/jpeg" id="exampleFile" className="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.AcountUser.acountNameSetting}</Label>
                        <Input type="text" name="name" id="exampleEmail"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.AcountUser.acountSurnameSetting}</Label>
                        <Input type="text" name="surname" id="exampleEmail"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.AcountUser.acountPhoneNumberSetting}</Label>
                        <Input type="text" name="phone" id="exampleEmail"/>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="info"  onClick={this.toggle}>{Messages.AcountUser.acountChangeDataSave}</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AcountSetting;
