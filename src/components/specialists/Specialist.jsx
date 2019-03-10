import React, { Component } from 'react';
import {Button,Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';
import ChangeSpecialistInfo from './modals/ChangeSpecialistInfo'
import './../../../assets/stylesheets/specialist.css';

@observer
class SpecialistUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            isUser : PropTypes.string,
            deleteWorksImage : PropTypes.func,
            filterId : PropTypes.func,
        }).isRequired
    };
    render() {
        const salonIndex = this.props.match.params.salonIndex;
        const categoryIndex = this.props.match.params.categoryIndex;
        const specialistIndex = this.props.match.params.specialistIndex;

        console.log(salonIndex, categoryIndex, specialistIndex)
        const {_Data , deleteWorksImage, isUser, filterId} = this.context.AppStore;
        const salon = _Data[salonIndex];
        const category =  _Data[salonIndex].category[categoryIndex];
        const specialist =  _Data[salonIndex].category[categoryIndex].workers[specialistIndex]
        return (
            <div className = "sections mt-5">
                 <Container className="mb-5">
                     <Row>
                        <Col sm="8" >
                            <h3 className = "textBlue" > {specialist.name} {specialist.surname}</h3>
                            <div className="user" >
                                <img src={specialist.img} height = "200px" alt="user image" width="200px" className ="d-inline" />
                                <div className="info">
                                    {isUser === 'salon' && <ChangeSpecialistInfo specialistId = {specialist.id}/>}
                                    <p>{specialist.textAbout}</p>
                                </div>
                            </div>
                            <div>
                                <h2 className = "textBlue"> {Messages.specialist.information} </h2>
                                <p> {Messages.specialist.phoneNumber} {_Data[salonIndex].phone} </p>
                                <p> {Messages.specialist.age} {specialist.age} </p>
                                <p> {Messages.specialist.salonName}{specialist.salonTitle}</p>
                                <p>{Messages.specialist.salonAddress} {specialist.salonAddress}</p>
                                <p> {Messages.specialist.prof} {_Data[salonIndex].category[categoryIndex].prof} </p>
                                <p>{Messages.specialist.socialMedia} {specialist.socialNetwork.map((item, index) => {
                                        return <a target="blank" href={item.url} key={index}>{item.socialMediaName} </a>
                                    })}</p>



                            </div>
                         </Col>
                         {isUser === 'user' && <Col sm="4" >
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

                         </Col>}
                     </Row>
                     <h1 className = "textBlue" >{Messages.specialist.myWorkes}</h1>
                     <Row className = "mt-5">
                     {specialist.workImgs.map((item, index) => {
                             return <React.Fragment key = {index}>
                             {(isUser === 'salon') ?
                                     <Col align = "center">
                                         <Button color="danger" className="delete" salon-name={specialist.salonTitle}  onClick = {deleteWorksImage} data-index = {index} specialist-id ={specialist.id}>X</Button>
                                         <img src={item} alt="works image" className ="d-inline " />
                                     </Col>:
                                     <Col align = "center">
                                         <img src={item} alt="works image" className ="d-inline " />
                                     </Col>
                             }
                             </React.Fragment>
                         })}
                     </Row>
                </Container>
            </div>
        );
    }
}

export default SpecialistUser;
