import React, {Component} from 'react';
import {Container, Form, Input, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../Messages';

import CardSearch from './CardSearch'

import './../../assets/stylesheets/table.css';






class CardCategorySearch extends Component {
  static propTypes = {
    prof : PropTypes.string.isRequired,
    tableSearch : PropTypes.func.isRequired,
    filterTable : PropTypes.array.isRequired,
    onChaked : PropTypes.func.isRequired,
}
    render(){
        const { prof, tableSearch, filterTable, onChaked} = this.props;
        return(
            <Container>
                <Form className="form_pos mt-5">
                <Label><b>{Messages.table.searchFor}</b></Label>
                <FormGroup check inline >
                        <FormGroup check>
                            <Label check>

                                <Input type="radio" name="search" value="name" onChange = {onChaked} defaultChecked />{Messages.table.forName}
                            </Label>
                        </FormGroup>
                        <FormGroup check>
                             <Label check>
                                 <Input type="radio" value="surname" name = "search" onChange = {onChaked}/>{Messages.table.forSurname}
                             </Label>
                         </FormGroup>
                         <FormGroup check>
                              <Label check>
                                  <Input type="radio" value="salonAddress" name = "search" onChange = {onChaked}/>{Messages.table.forAddress}
                              </Label>
                          </FormGroup>
                          <FormGroup check>
                               <Label check>
                                   <Input type="radio" value="salonTitle" name = "search" onChange = {onChaked}/>{Messages.table.forSalon}
                               </Label>
                          </FormGroup>
                        </FormGroup>
                        <Input type="search"  className="input_search" id="exampleSearch" onChange={tableSearch}/>
                </Form>
                <div>
                    <h3 align = "center" className = "mt-5 mb-5">{prof}</h3>
                    {filterTable.map((item, index) =>{
                        return <React.Fragment key = {index}>
                            <CardSearch 
                                   image = {item.img}
                                   prof = {item.prof}
                                   nameSurname = {`${item.name} ${item.surname}`}
                                   address = {item.salonAddress}
                                   salonTitle = {item.salonTitle}
                                   url = {this.props.match.url}
                                   /> 
                        </React.Fragment>
                    })}
                    
                </div>
            </Container>
        );
    }
}
export default CardCategorySearch
