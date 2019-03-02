import React, {Component} from 'react';
import {Input, FormGroup, Label, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form} from 'reactstrap';
import PropTypes from 'prop-types';
import './../../../assets/stylesheets/salon.css';
import Messages from './../../Messages';
import { observable } from "mobx";
import {observer} from "mobx-react";

@observer
class AddCategory extends Component {

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
    categoryName: "",
   
  }
  setInputsValue = (event) =>
  {
     this.information.categoryName = event.target.value;
           
  }
    consoleInfo = () => {
      console.log(this.information);
    }

    render(){
        return(
          <div>
            <Button onClick={this.toggle} color="info" outline>{Messages.AddCategory.addCat}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>{Messages.AddCategory.AddCat}</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleAnun">{Messages.AddCategory.nameCategory}</Label>
                                    <Input onChange={this.setInputsValue} type="text" name="Anun"/>
                                </FormGroup>
   
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="info"  onClick={this.consoleInfo}>{Messages.AddCategory.confirmChanges}</Button>
                        </ModalFooter>
                    </Modal>
          </div>
        );
    }
}
export default AddCategory
