import React, { Component } from 'react';
import {Button,Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';
import ChangeSpecialistInfo from './modals/ChangeSpecialistInfo'
import DateHours from './Booking/DateHourse';

import './../../../assets/stylesheets/specialist.css';

@observer
class SpecialistUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            _Data : PropTypes.array,
            isUser : PropTypes.string,
            deleteWorksImage : PropTypes.func,
            filterId : PropTypes.func,
            id : PropTypes.object,

        }).isRequired
    };
    componentWillMount(){
        const paths = this.props.match.params.whichSpecialist.split('/');
        const path = paths[paths.length - 1];
        this.context.AppStore.filterId(path)
    }
    render() {
        const {_Data , deleteWorksImage, isUser, filterId, id, defaultSpecialistImage, changeSpeciaistInfo, changeSpeciaistWorkImages, addSpeciaistWorkImages} = this.context.AppStore;
        const {salonIndex, categoryIndex, specialistIndex} = id;
        const salon = _Data[salonIndex];
        const category =  _Data[salonIndex].category[categoryIndex];
        const specialist =  _Data[salonIndex].category[categoryIndex].workers[specialistIndex]
        return (
            <div className = "sections mt-5">
                 <Container>
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
                                <a href="#">{Messages.specialist.socialMedia} {specialist.socialNetwork}  </a>
                            </div>
                         </Col>
                         {isUser === 'user' && <DateHours />
                             }
                     </Row>
                     <h1 className = "textBlue" >{Messages.specialist.myWorkes}</h1>
                     <Row className = "mt-5">
                     {isUser === 'salon' && <Input className="name" width="100px" type="file" name="file" id="exampleFile" specialist-id={specialist.id}
                                            onChange={addSpeciaistWorkImages}
                                            /> }
                     {specialist.workImgs.map((item, index) => {
                             return <React.Fragment key = {index}>
                             {(isUser === 'salon') ?
                                     <Col align = "center">
                                         <Button color="danger" className="delete" salon-name={specialist.salonTitle}  onClick = {deleteWorksImage} data-index = {index} specialist-id ={specialist.id}>X</Button>
                                         <img src={item} alt="works image" className ="d-inline " />
                                         
                                          <Input className="name" width="100px" type="file" name="file" id="exampleFile" index={index} specialist-id={specialist.id}
                                            onChange={changeSpeciaistWorkImages}
                                            />  
                                     </Col> :
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
