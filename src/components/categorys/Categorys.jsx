import React, {Component} from 'react';
import {Container, Form, Input, FormGroup, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import {Link}  from 'react-router-dom';

import Messages from './../../Messages';
import {homeConfigs} from './../../config/categoryConfig';

import CardSearch from './../cards/CardSearch';


import NotFound from './../../NotFound'; 

import './../../../assets/stylesheets/table.css';

@observer
class Categorys extends Component {
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
        const categoryIndex = this.props.match.params.whichCategory;
        let prof;

        if(homeConfigs.categorys[categoryIndex]){
            prof = homeConfigs.categorys[categoryIndex].title;
        }else{
            prof = false
        }
        
        console.log(prof)
        return(
            <Container>
              {(prof)? <>
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
                  <Link to={`/Category/1`} >
                      <button color="info">sexmi</button>
                  </Link>
                  <Link to={`/Category/2`}>
                      <button color="info">sexmi</button>
                  </Link>
                  <Link to={`/Category/3`}>
                      <button color="info">sexmi</button>
                  </Link>
                <div>
                    <h3 align = "center" className = "mt-5 mb-5 text_color">{prof}</h3>
                    {_Data.map((item, salonIndex) => {
                        if(item.category[categoryIndex]){
                            return item.category[categoryIndex].workers.map((item1, index) => {  
                                if(item1[`${searchType}`].indexOf(searchText) !== -1){
                                    return <React.Fragment key = {index}>
                                        <CardSearch 
                                            image = {item1.img}
                                            prof = {item1.prof}
                                            nameSurname = {`${item1.name} ${item1.surname}`}
                                            address = {item1.salonAddress}
                                            salonTitle = {item1.salonTitle}
                                            url = {this.props.match.url}
                                            name = {`${salonIndex}/${item1.id.split('-')[1]}/${item1.id.split('-')[2]}`}
                                            /> 
                                    </React.Fragment>}
                                })
                            }
                        })
                    }
                    
                </div>
                </> : <NotFound/>}
            </Container>
        );
    }
}
export default Categorys
