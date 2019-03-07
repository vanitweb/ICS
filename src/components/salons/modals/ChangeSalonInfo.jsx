import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../../Messages';

import './../../../../assets/stylesheets/setting.css';

@observer
class ChangeSalonInfo extends Component {
  static contextTypes = {
	AppStore : PropTypes.shape({
	  changeSalonInfo : PropTypes.func,
	  changeSalonSubmit : PropTypes.func,
	  _Data : PropTypes.array,
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
    if(event.target.textContent === Messages.settings.settingsName){
        const {_Data, changeSalon} = this.context.AppStore;
        const {salonId} = this.props;
        const salon = _Data[salonId];
        changeSalon.name = salon.name;
        changeSalon.info = salon.info;
        changeSalon.address = salon.address;
        changeSalon.phone = salon.phone;
    }
  }
  render() {
	const {changeSalonInfo, changeSalonSubmit, _Data, changeSalon} = this.context.AppStore;
	const {salonId} = this.props;
    const salon = _Data[salonId];
	return (
	  <div>
		<Button outline color="info" onClick={this.toggle}>{Messages.settings.settingsName}</Button>
		<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
			<ModalHeader toggle={this.toggle}>{Messages.settings.settingsName}</ModalHeader>
			<ModalBody>
				<Form >
					<FormGroup>
						<Label for = "exampleFile">{Messages.settings.insertImg}</Label> 
							<Input type="file" name="file"  accept="image/png, image/jpeg" id="exampleFile" className="name"/>
						  
					</FormGroup>
					<FormGroup>
						<Label for = "exampleName">{Messages.settings.name}</Label>
							<Input type="text" name="name" id="exampleName" onChange={changeSalonInfo} value={changeSalon.name}/>						
					</FormGroup>
                    <FormGroup>
						<Label for = "exampleInfo">{Messages.settings.ourSet}</Label>
							<Input type="textarea" name="info" id="exampleInfo" onChange={changeSalonInfo} value={changeSalon.info}/>						
					</FormGroup>
					<FormGroup>
						<Label for = "exampleAddress">{Messages.settings.adress}</Label>
							<Input type="text" name="address" id="exampleAddress" onChange={changeSalonInfo} value={changeSalon.address} min="5" max="30"/>
						
					</FormGroup>
					<FormGroup>
						<Label for = "examplePhone">{Messages.settings.phone}</Label>
							<Input type="text" name="phone" id="examplePhone" onChange={changeSalonInfo} value={changeSalon.phone}/>
						
					</FormGroup>
                    <FormGroup>
                        <select onChange = {(event) => { 
                                changeSalon.prof = event.target.value;
                                changeSalon.profSelected = event.target.value}}>
                            <option></option>
                            {salon.category.map(item => {
                                return <option key = {item.prof}>{item.prof}</option>
                            })}
                        </select>
						<Label for = "exampleCategory">{Messages.settings.category}</Label>
							<Input type="text" name="category" id="exampleCategory" onChange={changeSalonInfo} value={changeSalon.prof}/>
						
					</FormGroup>   
				</Form>
			</ModalBody>
			<ModalFooter onClick = {this.toggle}>
				<Button color="info" onClick={changeSalonSubmit} salon-id = {salonId}>{Messages.settings.saveChange}</Button>
			</ModalFooter>
		</Modal>
	  </div>
	);
  }
}

export default ChangeSalonInfo;