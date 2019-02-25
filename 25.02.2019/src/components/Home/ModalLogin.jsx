import React, { Component }  from 'react';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './../../../assets/stylesheets/header.css';

class ModalLogin extends Component {
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
        const {signIn} = this.props;
		return(
			<div>
				<Button className="ml-auto mod_btn"  color="link" onClick={this.toggle}>{this.props.buttonLabel}{signIn.signIn}</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                          <ModalHeader toggle={this.toggle}>{signIn.signInTitle}</ModalHeader>
                          <ModalBody>
                                              <Form>
                                    <FormGroup>
                                      <Label for="exampleEmail">{signIn.signInEmail}</Label>
                                      <Input type="email" name="email" id="exampleEmail" placeholder={signIn.signInEmailPlaceholder} />
                                    </FormGroup>
                                    <FormGroup>
                                      <Label for="examplePassword">{signIn.signInPassword}</Label>
                                      <Input type="password" name="password" id="examplePassword" placeholder={signIn.signInPasswordPlaceholder} />
                                    </FormGroup>
                                    
                                    <button className="modal_button">{signIn.signInButton}</button>
                                  </Form>
                          </ModalBody>

                        </Modal>
			</div>
		);
	}
}
export default ModalLogin;