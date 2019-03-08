import React, {Component} from 'react';
import {Input, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';
import PropTypes from 'prop-types';
import {observable} from "mobx";
import {observer} from "mobx-react";

import Messages from './../../../Messages';

import './../../../../assets/stylesheets/salon.css'

@observer
class ChangeSpecialistInfo extends Component {

    static contextTypes = {
        AppStore : PropTypes.shape({
            changeSpeciaistInfo : PropTypes.func,
            changeSpecialistSubmit : PropTypes.func,
            _Data : PropTypes.array,
        }).isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle(event) {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
        if(event.target.textContent === Messages.AddWorker.modifyData){
        const {_Data, changeSpecialistInfo} = this.context.AppStore;
        const {specialistId} = this.props;
        const idSalon = specialistId.split('-')[0];
        const idCategory = specialistId.split('-')[1];
        const idSpecialist = specialistId.split('-')[2];
        const specialist = _Data[idSalon].category[idCategory].workers[idSpecialist];
        changeSpecialistInfo.name = specialist.name;
        changeSpecialistInfo.surname = specialist.surname;
        changeSpecialistInfo.age = specialist.age;
        changeSpecialistInfo.info = specialist.textAbout;
        changeSpecialistInfo.mail = specialist.socialNetwork;
    }
    }

    render(){
        const {changeSpecialistSubmit, changeSpeciaistInfo, changeSpecialistInfo} = this.context.AppStore;
        const {specialistId} = this.props;
        return(
            <>
                <Button onClick={this.toggle} color="info" outline>{Messages.AddWorker.modifyData}</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader toggle={this.toggle}>{Messages.AddWorker.modifyData}</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleFile">{Messages.AddWorker.image}</Label>
                                        <Input className="name" type="file" name="file" id="exampleFile"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleName">{Messages.AddWorker.name}</Label>
                                        <Input onChange={changeSpeciaistInfo} type="text" name="name" id="exampleName" value={changeSpecialistInfo.name}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleSurname">{Messages.AddWorker.surname}</Label>
                                        <Input onChange={changeSpeciaistInfo} type="text" name="surname" id="exampleSurname" value={changeSpecialistInfo.surname}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleAge">{Messages.AddWorker.age}</Label>
                                        <Input onChange={changeSpeciaistInfo} type="text" name="age" id="exampleAge" value={changeSpecialistInfo.age}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleInfo">{Messages.AddWorker.information}</Label>
                                        <Input onChange={changeSpeciaistInfo} type="text" name="info" id="exampleInfo" value={changeSpecialistInfo.info}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleEmail">{Messages.AddWorker.connectionWithSocialMedia}</Label>
                                        <Input onChange={changeSpeciaistInfo} type="text" name="mail" id="exampleEmail" value={changeSpecialistInfo.mail}/>
                                    </FormGroup>
                                    
                                </Form>
                            </ModalBody>
                            <ModalFooter onClick = {this.toggle}>
                                <Button   onClick={changeSpecialistSubmit} specialist-id={specialistId}>{Messages.AddWorker.confirmChanges}</Button>
                            </ModalFooter>
                        </Modal>
            </>
        );
    }
}
export default ChangeSpecialistInfo
