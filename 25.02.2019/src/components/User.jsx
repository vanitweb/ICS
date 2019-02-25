import React, { Component } from 'react';
import {Button,Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import './../../assets/stylesheets/user.css';

class User extends Component {
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
                                    <p>{Data[0].category[0].workers[0].textAbout}
                                    </p>
                                </div>
                            </div> 
                            <div> 
                                <h2 className = "textBlue"> Տեղեկատվություն </h2>
                                <p> Հեռ․ - {Data[0].phone} </p>
              
                                <p> Սրահի անուն - {Data[0].name}</p>
                                <p> Սրահի հասցե - {Data[0].address}</p>
                                <p> Կապ սոց․ կայքերում - {Data[0].category[0].workers[0].socialNetwork}  </p>
                            </div> 
                         </Col>
                         <Col sm="4" >
                      
                             <h3 className = "textBlue"> Հերթագրվել</h3>

                             <div>

                            <FormGroup tag="fieldset"> 
                                <legend>Ընտրել աշխատանքը</legend>
                                  <FormGroup check>
                                  <Label check>

                                    <Input type="checkbox" />{' '}
                                     Կտրվածք (sa el petq e dataic lini)
                                  </Label>
                                  </FormGroup >
                                  <FormGroup check>
                                  <Label check>
                                    <Input type="checkbox" />{' '}
                                    Սանրվածք (sa el petq e dataic lini)
                                  </Label>
                                  </FormGroup >
                                  <FormGroup check>
                                  <Label check>
                                    <Input type="checkbox" />{' '}
                                    Ներկում (sa el petq e dataic lini)
                                  </Label>
                                  </FormGroup>
                                </FormGroup>
                             </div>
                             <div >
                                <FormGroup tag="fieldset">
                                  <legend>Ընտրել ժամ</legend>
                                  <FormGroup check>
                                    <Label check>
                                      <Input type="radio" name="radio1" />{' '}
                                         09։00 (sa el chigitem vonc e linelu)
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Label check>
                                      <Input type="radio" name="radio1" />{' '}
                                        12։ 30  (sa el chigitem vonc e linelu)
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check disabled>
                                    <Label check>
                                      <Input type="radio" name="radio1"  />{' '}
                                        15։15  (sa el chigitem vonc e linelu)
                                    </Label>
                                  </FormGroup>
                                </FormGroup>
                             </div>
                              <Button type = "submit" color="info" > Հաստատել </Button>
                       

                             
                        </Col>
                        </Row>
                        <h1 className = "textBlue" > Իմ աշխատանքներ</h1>
                        <Row className = "mt-5">

                            <Col align = "center">
                            
                                <img src={Data[0].category[0].workers[0].workImgs[0]} alt="Անհայտ նկար" className ="d-inline " />
                             </Col>
                            <Col align = "center">
                             
                                <img src={Data[0].category[0].workers[0].workImgs[1]} alt="Անհայտ նկար" className ="d-inline"/>
                             </Col>
                              <Col align = "center">
                               
                                <img src={Data[0].category[0].workers[0].workImgs[2]} alt="Անհայտ նկար" className ="d-inline"/>
                             </Col>

                        </Row>
                </Container>
        
            </div>
        );
    }
}

export default User;
