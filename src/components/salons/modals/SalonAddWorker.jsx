import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { observable } from "mobx";
import {observer} from "mobx-react";
import {Input, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';

import Data from './../../../data/data.js';
import Messages from './../../../Messages';

import './../../../../assets/stylesheets/salon.css';

@observer
class SalonAddWorker extends Component {

    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            consoleInfo : PropTypes.func,
            setInputsValue : PropTypes.func,
            AddWorkerImg : PropTypes.func,
            defaultSpecialistImage : PropTypes.string
        }).isRequired
    }

  //    static propTypes = {
  //
  //    }
  constructor(props) {
      super(props);
      this.state = {
          modal: false,
      };
      this.toggle = this.toggle.bind(this);
  }
  toggle() {
      this.setState(prevState => ({
      modal: !prevState.modal
      }));
  }

    render(){
        const {_Data, setInputsValue, AddWorker, AddWorkerInfo, AddWorkerImg, information} = this.context.AppStore;
        const {categoryId} =this.props;
        return(
          <div>
            <Button color="info" outline className="button"  onClick={this.toggle}>{Messages.AddWorker.AddWorker}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>{Messages.AddWorker.AddWorker}</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleFile">{Messages.AddWorker.image}</Label>
                                    <Input className="name" width="100px" type="file" name="file" id="exampleFile"
                                    onChange={AddWorkerInfo}
                                        />
                                    <img id="target" src={information.img} width="250px" height="250px"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.name}</Label>
                                    <Input onChange={AddWorkerInfo} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.surname}</Label>
                                    <Input onChange={AddWorkerInfo} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.age}</Label>
                                    <Input onChange={AddWorkerInfo} type="number" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.information}</Label>
                                    <Input onChange={AddWorkerInfo} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.connectionWithSocialMedia}</Label>
                                    <Input onChange={AddWorkerInfo} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile">{Messages.AddWorker.AddWorkExample}</Label>
                                    <Input type="file" name="file" id="exampleFile" className="name"/>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter onClick = {this.toggle}>
                          <Button  className="modal_button" onClick={AddWorker}
                              category-id={categoryId}>{Messages.AddWorker.save}</Button>
                        </ModalFooter>
                    </Modal>
          </div>
        );
    }
}
export default SalonAddWorker
