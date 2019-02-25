import React, { Component } from 'react';
import Header from './components/Home/Header';
import Section from './components/Home/Section';
import Footer from './components/Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/stylesheets/App.css';
import {homeConfigs} from './config/categoryConfig.js' 
import TableCategory from './components/TableCategory.jsx' 
import Varsaviranoc from './components/Varsaviranoc.jsx' 
import User from './components/User.jsx' 
import Data from './data/data.js' 
import Messages from './Messages.js' 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {observable, computed, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class App extends Component {
    @observable arr = [];
    @observable prof = "";
    @observable searchText = "";
    @observable searchType = "name";
    @observable index = "";

    Data = new Data().varsaviranocner;
    @action
    changeDropdown = (event) =>{
        this.index = event.target.getAttribute("data-index");
    }
    @action
    cardClick = (event) =>{
            this.arr = [];
            this.Data.map(item => {
                return item.category.map(item1 => {
                    if(item1.prof === event.target.parentElement.previousElementSibling.previousElementSibling.textContent){
                        this.prof = item1.prof;
                        item1.workers.map(item2 => {
                            this.arr.push(item2);
                    })
                }
            })
        })
    }
    @action
    tableSearch = (event) => {
        this.searchText = event.target.value;
    }
    @computed
    get filterTable(){
        return this.arr.filter(item => {
            return item[`${this.searchType}`].indexOf(this.searchText) !== -1
        });
    }
    @action
    onChaked = (event) =>{
        this.searchType = event.target.value
    }

    render() {
        return (
            <div className = "App">
                <Router>
                    <div>
                        <Header dropdown = {this.Data} Messages = {Messages.header} changeDropdown = {this.changeDropdown}/>
                        <Switch>
                            <Route exact path="/" component={()=><Section 
                                categorys = {homeConfigs.categorys} 
                                slideItems = {homeConfigs.slideItems} 
                                cardClick = {this.cardClick}
                                />} />
                            <Route path="/varsaviranoc/:i" component={()=><Varsaviranoc
                                Messages = {Messages} 
                                Data = {this.Data[Number(this.index)]}
                                />}/>
                            <Route path='/category/:g' component={()=><TableCategory 
                                Messages = {Messages.table}
                                prof = {this.prof}
                                tableSearch = {this.tableSearch}
                                filterTable = {this.filterTable}
                                onChaked = {this.onChaked}
                                />}/>
                        </Switch>
                    </div>
                </Router>
                <Footer />
            </div>
        );  
    }
}

export default App;
