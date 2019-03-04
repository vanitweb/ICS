import React, { Component } from 'react';
import {Button,Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../Messages';
import Change from './ChangeData'
import './../../../assets/stylesheets/specialist.css';

class SpecialistUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
        }).isRequired
    }
    render() {
        const {_Data , deleteWorksImage} = this.context.AppStore;
        let specialist;
        _Data.forEach(item => {
            item.category.forEach(item1 =>{
                if(item1.prof === this.props.match.params.i){
                    item1.workers.forEach(item2 => {
                        if(item2.name === this.props.match.params.k){
                            specialist = item2;
                        }
                    })
                }
            })
        })
        if(specialist === undefined){
            _Data[this.props.match.params.i].category.forEach(item => {
                item.workers.forEach(item1 => {
                    if(item1.name === this.props.match.params.k){
                            specialist = item1;
                        }
                })
            })
        }
        return (
            <div className = "sections mt-5">
                 <Container>
                     <Row>
                        <Col sm="8" >
                            <h3 className = "textBlue" > {specialist.name} {specialist.surname}</h3>
                            <div className="user" >   
                                <img src={specialist.img} height = "200px" alt="user image" width="200px" className ="d-inline" /> 
                                <div className="info">
                                    <Change />
                                    <p>{specialist.textAbout}</p>
                                </div>
                            </div> 
                            <div> 
                                <h2 className = "textBlue"> {Messages.specialist.information} </h2>
                                <p> {Messages.specialist.phoneNumber} {_Data[0].phone} </p>
                                <p> {Messages.specialist.salonName}{specialist.salonTitle}</p>
                                <p>{Messages.specialist.salonAddress} {specialist.salonAddress}</p>
                                <p>{Messages.specialist.socialMedia} {specialist.socialNetwork}  </p>
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
                     {specialist.workImgs.map((item, index) => {
                             return <Col align = "center" key = {index}>
                                 <Button color="danger" className="delete" onClick = {deleteWorksImage} data-index = {index}>X</Button>
                                 <img src={item} alt="works image" className ="d-inline " />

                             </Col>
                         })}
                     </Row>
                </Container>
            </div>
        );
    }
}

export default SpecialistUser;