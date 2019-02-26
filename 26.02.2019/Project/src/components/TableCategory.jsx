import React, {Component} from 'react';
import './../../assets/stylesheets/table.css';
import { Container,  Input, Table, FormGroup, Label} from 'reactstrap';
import PropTypes from 'prop-types';

class TableCategory extends Component {
    static propTypes = {
        Messages : PropTypes.object.isRequired,
        prof : PropTypes.string.isRequired,
        tableSearch : PropTypes.func.isRequired,
        filterTable : PropTypes.array.isRequired,
        onChaked : PropTypes.func.isRequired,
    }
    render(){
        const {Messages, prof, tableSearch, filterTable, onChaked} = this.props;
        console.log(filterTable)
		return(
            <Container>
				<div className="table w-100">
                    <h3>{prof}</h3>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>{Messages.searchFor}</th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="search"
                                                value="name" onChange = {onChaked}
                                                defaultChecked />{Messages.forName}
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="surname" name = "search" onChange = {onChaked}/>{Messages.forSurname}
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="salonAddress" name = "search" onChange = {onChaked}/>{Messages.forAddress}
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="salonTitle" name = "search" onChange = {onChaked}/>{Messages.forSalon}
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <Input type="search" className="input_search" id="exampleSearch" onChange={tableSearch}/>
                                </th>
                            </tr>
                            <tr>
                                <th>{Messages.imgTitle}</th>
                                <th>{Messages.userName}</th>
                                <th>{Messages.userSurName}</th>
                                <th>{Messages.userAddress}</th>
                                <th>{Messages.beautySalonName}</th>
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
                                    <td><button>{Messages.buttonText}</button></td>
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