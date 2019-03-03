import React, {Component} from 'react';
import {Input, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';
import PropTypes from 'prop-types';
import './../../../assets/stylesheets/salon.css';
import Messages from './../../Messages';
import { observable } from "mobx";
import {observer} from "mobx-react";
import Data from './../../data/data.js';

@observer
class AddWorker extends Component {

    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            consoleInfo : PropTypes.func,
            setInputsValue : PropTypes.func,
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
        const {_Data, setInputsValue, consoleInfo, information} = this.context.AppStore;
        return(
          <div>
            <Button color="info" outline className="button"  onClick={this.toggle}>{Messages.AddWorker.AddWorker}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>{Messages.AddWorker.AddWorker}</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleFile">{Messages.AddWorker.image}</Label>
                                    <Input className="name" type="file" name="file" id="exampleFile"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.name}</Label>
                                    <Input onChange={setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.surname}</Label>
                                    <Input onChange={setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.age}</Label>
                                    <Input onChange={setInputsValue} type="number" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.information}</Label>
                                    <Input onChange={setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.connectionWithSocialMedia}</Label>
                                    <Input onChange={setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleFile">{Messages.AddWorker.AddWorkExample}</Label>
                                    <Input type="file" name="file" id="exampleFile" className="name"/>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                          <Button  className="modal_button" onClick={consoleInfo} address={this.props.address} salonName={this.props.salonName} category={this.props.category}>{Messages.AddWorker.save}</Button>
                        </ModalFooter>
                    </Modal>
          </div>
        );
    }
}
export default AddWorker
