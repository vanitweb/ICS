import React, { Component } from 'react';
import {Button,Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../Messages';

import './../../assets/stylesheets/specialist.css';

class Specialist extends Component {
    static propTypes = {
        Data : PropTypes.array.isRequired,
    }
    render() {
        const {Data} = this.props
        return (
            <div className = "sections">
                 <Container>
                     <Row>
                        <Col sm="8" >
                            <h3 className = "textBlue" > {Data[0].category[0].workers[0].name}</h3>
                            <div className="user" >   
                                <img src={Data[0].category[0].workers[0].img} height = "200px" alt="Անհայտ նկար" width="200px" className ="d-inline" /> 
                                <div className="info"> 
                                    <h4> {Data[0].category.prof} </h4>
                                    <p>{Data[0].category[0].workers[0].textAbout}</p>
                                </div>
                            </div> 
                            <div> 
                                <h2 className = "textBlue"> {Messages.specialist.information} </h2>
                                <p> {Messages.specialist.phoneNumber} {Data[0].phone} </p>
                                <p> {Messages.specialist.salonName}{Data[0].name}</p>
                                <p>{Messages.specialist.salonAddress} {Data[0].address}</p>
                                <p>{Messages.specialist.socialMedia} {Data[0].category[0].workers[0].socialNetwork}  </p>
                            </div> 
                         </Col>
                         <Col sm="4" >
                             <h3 className = "textBlue"> {Messages.registered}</h3>
                             <div>
                                 <FormGroup tag="fieldset"> 
                                     <legend>{Messages.specialist.chooseWork}</legend>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="checkbox" />Կտրվածք (sa el petq e dataic lini)
                                         </Label>
                                     </FormGroup >
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="checkbox" />Սանրվածք (sa el petq e dataic lini)
                                         </Label>
                                     </FormGroup >
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="checkbox" />Ներկում (sa el petq e dataic lini)
                                         </Label>
                                     </FormGroup>
                                 </FormGroup>
                             </div>
                             <div>
                                 <FormGroup tag="fieldset">
                                     <legend>{Messages.specialist.chooseClock}</legend>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="radio" name="radio1" />09։00 (sa el chigitem vonc e linelu)
                                         </Label>
                                     </FormGroup>
                                     <FormGroup check>
                                         <Label check>
                                             <Input type="radio" name="radio1" />12։ 30  (sa el chigitem vonc e linelu)
                                         </Label>
                                     </FormGroup>
                                     <FormGroup check disabled>
                                         <Label check>
                                             <Input type="radio" name="radio1"  />15։15  (sa el chigitem vonc e linelu)
                                         </Label>
                                     </FormGroup>
                                 </FormGroup>
                             </div>
                             <Button type = "submit" color="info" > {Messages.specialist.confirmed} </Button>
                         </Col>
                     </Row>
                     <h1 className = "textBlue" >{Messages.specialist.myWorkes}</h1>
                     <Row className = "mt-5">
                         {Data[0].category[0].workers[0].workImgs.map((item, index) => {
                             return <Col align = "center" key = {index}>
                                 <img src={item} alt="Անհայտ նկար" className ="d-inline " />
                             </Col>
                         })}
                     </Row>
                </Container>
            </div>
        );
    }
}

export default Specialist;