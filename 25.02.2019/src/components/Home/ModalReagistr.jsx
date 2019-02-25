import React, { Component }  from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './../../../assets/stylesheets/header.css';

class ModalRegister extends Component {
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

	render(){
        const {signUp} = this.props;
		return(
			<div >
                <Button className="ml-0 mod_btn" outline color="link" onClick={this.toggle}>{this.props.buttonLabel }{signUp.signUp}</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
                        <ModalHeader toggle={this.toggle}>{signUp.signUpTitle}</ModalHeader>
                        <ModalBody >
                            <Form>
                            <FormGroup>
                            <Label for="examplePassword">{signUp.signUpName}</Label>
                            <Input type="text"  id="examplePassword" />
                            <Label for="examplePassword">{signUp.signUpSurname}</Label>
                            <Input type="text"  id="examplePassword" />
                            <Label for="exampleEmail">{signUp.signUpEmail}</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder={signUp.signUpEmailPlaceholder} /> 
                            <Label for="exampleEmail">{signUp.signUpNickName}</Label>
                            <Input type="text" id="exampleEmail"/>
                            </FormGroup>
                            <FormGroup>
                            <Label for="examplePassword">{signUp.signUpPassword}</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder={signUp.signUpPasswordPlaceholder} />
                            <Label for="examplePassword">{signUp.signUpRepeatPassword}</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder={signUp.signUpRepeatPasswordPlaceholder} />
                            </FormGroup>

                            <button className="modal_button">{signUp.signUpButton}</button>
                            </Form>
                        </ModalBody>
                    </Modal>
			</div>
		);
	}
}
export default ModalRegister;