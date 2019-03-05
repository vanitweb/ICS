import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import Messages from './../../Messages'


import './../../../assets/stylesheets/setting.css';


class Settings extends Component {
  static contextTypes = {
    AppStore : PropTypes.shape({
      changeSalonInfo : PropTypes.func,
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
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const {changeSalonInfo} = this.context.AppStore;
    const {salonAddress} = this.props;
    return (
      <div>
        <Button outline color="info" onClick={this.toggle}>{Messages.settings.settingsName}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{Messages.settings.settingsName}</ModalHeader>
            <ModalBody>
                <Form >
                    <FormGroup>
                        <Label>{Messages.settings.insertImg}</Label> 
                            <Input type="file" name="file"  accept="image/png, image/jpeg" id="exampleFile" className="name"/>
                          
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.settings.ourSet}</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.settings.adress}</Label>
                            <Input type="text" name="email" id="exampleEmail" onChange={changeSalonInfo} salon-address = {salonAddress}/>
                        
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.settings.phone}</Label>
                            <Input type="text" name="email" id="exampleEmail"/>
                        
                    </FormGroup>   
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="info"  onClick={changeSalonInfo} salon-address = {salonAddress}>{Messages.settings.saveChange}</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Settings;