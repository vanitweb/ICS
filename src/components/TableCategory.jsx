import React, {Component} from 'react';
import { Container,  Input, Table, FormGroup, Label} from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../Messages';

import './../../assets/stylesheets/table.css';

class TableCategory extends Component {
    static propTypes = {
        prof : PropTypes.string.isRequired,
        tableSearch : PropTypes.func.isRequired,
        filterTable : PropTypes.array.isRequired,
        onChaked : PropTypes.func.isRequired,
    }
    render(){
        const {prof, tableSearch, filterTable, onChaked} = this.props;
		return(
            <Container>
				<div className="table w-100">
                    <h3>{prof}</h3>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>{Messages.table.searchFor}</th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="search"
                                                value="name" onChange = {onChaked}
                                                defaultChecked />{Messages.table.forName}
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="surname" name = "search" onChange = {onChaked}/>{Messages.table.forSurname}
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="salonAddress" name = "search" onChange = {onChaked}/>{Messages.table.forAddress}
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="salonTitle" name = "search" onChange = {onChaked}/>{Messages.table.forSalon}
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <Input type="search" className="input_search" id="exampleSearch" onChange={tableSearch}/>
                                </th>
                            </tr>
                            <tr>
                                <th>{Messages.table.imgTitle}</th>
                                <th>{Messages.table.userName}</th>
                                <th>{Messages.table.userSurName}</th>
                                <th>{Messages.table.userAddress}</th>
                                <th>{Messages.table.beautySalonName}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterTable.map((item, index) =>{
                                return <tr key = {index}>
                                    <td><img src={item.img} alt="as"/></td>
                                    <td>{item.name} </td>
                                    <td>{item.surname} </td>
                                    <td>{item.salonAddress}</td>
                                    <td>{item.salonTitle}</td>
                                    <td><button>{Messages.table.specialiistButtonText}</button></td>
                                </tr> 
                            })}
                        </tbody>
                    </Table>
	      		</div>
      		</Container>			
		);
	}
}
export default TableCategory