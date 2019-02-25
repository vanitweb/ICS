import React, {Component} from 'react';
import './../../assets/stylesheets/Table.css';
import { Container,  Input, Table, FormGroup, Label} from 'reactstrap';
import image from './../../assets/images/Table/1.png';
import {observer} from 'mobx-react';
@observer
class TableCategory extends Component {
    render(){
        const {Messages, prof, tableSearch, filterTable, onChaked} = this.props;  
        console.log(onChaked)         
		return(
            <Container>
				<div className="table w-100">
                    <h3>{prof}</h3>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Որոնել ըստ</th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="search"
                                                value="name" onChange = {onChaked}
                                                defaultChecked />Անվան
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="surname" name = "search" onChange = {onChaked}/>Ազգանվան
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="salonAddress" name = "search" onChange = {onChaked}/>Հասցեի
                                        </Label>
                                    </FormGroup>
                                </th>
                                <th>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" value="salonTitle" name = "search" onChange = {onChaked}/>Սրահի
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
                                return <tr key = "index">
                                    <td><img src={image} alt="as"/></td>
                                    <td>{item.name} </td>
                                    <td>{item.surname} </td>
                                    <td>{item.salonAddress}</td>
                                    <td>{item.salonTitle}</td>
                                    <td><button>Մանրամասն</button></td>
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