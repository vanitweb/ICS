import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../../Messages';

import Validator from './../../../stores/validator';

import './../../../../assets/stylesheets/setting.css';

@observer
class ChangeSalonInfo extends Component {
  static contextTypes = {
	AppStore : PropTypes.shape({
	  changeSalonInfo : PropTypes.func,
	  changeSalonSubmit : PropTypes.func,
	  _Data : PropTypes.array,
	  AddWorkerImg : PropTypes.func,
	  defaultSpecialistImage : PropTypes.string
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
    const {_Data, changeSalon} = this.context.AppStore;
    const {salonindex} = this.props;
    const salon = _Data[salonindex];
    changeSalon.name = salon.name;
    changeSalon.info = salon.info;
    changeSalon.address = salon.address;
    changeSalon.phone = salon.phone;
    changeSalon.img = salon.img;
  }
    Validator = new Validator();
    handleUserInput = (event) => {
         const name = event.target.name;
         this.context.AppStore.changeSalonInfo(name);
         this.Validator.informationChangeSalon.fieldName = name;
         this.Validator.informationChangeSalon.value = event.target.value;       
    }

  render() {
	const {changeSalonSubmit, _Data, changeSalon, AddWorkerImg} = this.context.AppStore;
	const {salonindex} = this.props;
    const salon = _Data[salonindex];
   
	return (
	  <div>
		<Button outline color="info" onClick={this.toggle}>{Messages.settings.settingsName}</Button>
		<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
			<ModalHeader toggle={this.toggle}>{Messages.settings.settingsName}</ModalHeader>
			<ModalBody>
				<Form >
					<FormGroup>
						<Label for = "exampleFile">{Messages.settings.insertImg}</Label> 
							<Input className="name" width="100px" type="file" name="file" id="exampleFile"
                                    onChange={this.handleUserInput}
                                        />
                            <img id="target" src={changeSalon.img} width="250px" height="250px"/>
						  
					</FormGroup>
					<FormGroup>
						<Label for = "exampleName">{Messages.settings.name}</Label>
							<Input type="text" name="name" id="exampleName" onChange={this.handleUserInput} value={changeSalon.name}/>						
							<p className="has-error">{this.Validator.informationChangeSalon.fieldName === 'name' && this.Validator.validateChangeSalonInfo}</p>
					</FormGroup>
                    <FormGroup>
						<Label for = "exampleInfo">{Messages.settings.ourSet}</Label>
							<Input type="textarea" name="info" id="exampleInfo" onChange={this.handleUserInput} value={changeSalon.info}/>		
							<p className="has-error">{this.Validator.informationChangeSalon.fieldName === 'info' && this.Validator.validateChangeSalonInfo}</p>				
					</FormGroup>
					<FormGroup>
						<Label for = "exampleAddress">{Messages.settings.adress}</Label>
							<Input type="text" name="address" id="exampleAddress" onChange={this.handleUserInput} value={changeSalon.address} min="5" max="30"/>
							<p className="has-error">{this.Validator.informationChangeSalon.fieldName === 'address' && this.Validator.validateChangeSalonInfo}</p>
					</FormGroup>
					<FormGroup>
						<Label for = "examplePhone">{Messages.settings.phone}</Label>
							<Input type="text" name="phone" id="examplePhone" onChange={this.handleUserInput} value={changeSalon.phone}/>
							<p className="has-error">{this.Validator.informationChangeSalon.fieldName === 'phone' && this.Validator.validateChangeSalonInfo}</p>
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
							<Input type="text" name="category" id="exampleCategory" onChange={this.handleUserInput} value={changeSalon.prof}/>
						
					</FormGroup>   
				</Form>
			</ModalBody>
			<ModalFooter onClick = {this.toggle}>
				<Button color="info"  onClick={changeSalonSubmit} salon-index = {salonindex}>{Messages.settings.saveChange}</Button>
			</ModalFooter>
		</Modal>
	  </div>
	);
  }
}

export default ChangeSalonInfo;
// disabled={!this.Validator.informationChangeSalon.formValid}  sa petqa dneinq bayc sxala talis