import React, {Component} from 'react';
import {Container, Form, Input, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../Messages';

import CardSearch from './CardSearch'

import './../../assets/stylesheets/table.css';





@observer
class SpecialistCategory extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            prof : PropTypes.string,
            tableSearch : PropTypes.func,
            filterTable : PropTypes.array,
            onChaked : PropTypes.func,
        }).isRequired
    }
    render(){
        const {tableSearch , onChaked, _Data, searchType, searchText} = this.context.AppStore;
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
                    <h3 align = "center" className = "mt-5 mb-5">{this.props.match.params.i}</h3>
                    {_Data.map(item => {
                        return item.category.map(item1 => {
                            if(item1.prof === this.props.match.params.i){
                                    return item1.workers.map((item2, index) => {
                                        if(item2[`${searchType}`].indexOf(searchText) !== -1){
                                        return <React.Fragment key = {index}>
                                                <CardSearch 
                                                       image = {item2.img}
                                                       prof = {item2.prof}
                                                       nameSurname = {`${item2.name} ${item2.surname}`}
                                                       address = {item2.salonAddress}
                                                       salonTitle = {item2.salonTitle}
                                                       url = {this.props.match.url}
                                                        name = {item2.name}
                                                       /> 
                        </React.Fragment>}
                    })
                }
            })
        })}
                    
                </div>
            </Container>
        );
    }
}
export default SpecialistCategory
