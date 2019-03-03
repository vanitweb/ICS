import React, {Component} from 'react';
import {Input, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';
//import PropTypes from 'prop-types';
import './../../../assets/stylesheets/salon.css';
import Messages from './../../Messages';
import { observable } from "mobx";
import {observer} from "mobx-react";

@observer
class Change extends Component {

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

  @observable information = {
    name: "",
    surname:"",
    age:"",
    info:"",
    socialMedia:""
  }
  setInputsValue = (event) =>
  {
      switch(event.target.previousElementSibling.textContent) {
          case 'Անուն':
              this.information.name = event.target.value;
            break;
          case 'Ազգանուն':
              this.information.surname = event.target.value;
            break;
          case 'Տարիք':
              this.information.age = event.target.value;
            break;
          case 'Տեղեկատվություն':
              this.information.info = event.target.value;
            break;
          case 'Կապ սոց․ կայքեր':
              this.information.socialMedia = event.target.value;
            break;
          default:
          return;
      }
  }
    consoleInfo = () => {
      console.log(this.information);
    }

    render(){
        return(
          <div>
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
                                    <Label for="exampleAnun">{Messages.AddWorker.name}</Label>
                                    <Input onChange={this.setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.surname}</Label>
                                    <Input onChange={this.setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.age}</Label>
                                    <Input onChange={this.setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.information}</Label>
                                    <Input onChange={this.setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddWorker.connectionWithSocialMedia}</Label>
                                    <Input onChange={this.setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
                                
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                          <Button   onClick={this.consoleInfo}>{Messages.AddWorker.confirmChanges}</Button>
                        </ModalFooter>
                    </Modal>
          </div>
        );
    }
}
export default Change
