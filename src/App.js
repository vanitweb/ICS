import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from 'mobx-react'

import Header from './components/Home/Header';
import Header2 from './components/user/Header2';
import Section from './components/Home/Section';
import Footer from './components/Home/Footer';
import Salon from './components/Salon'; 
import SalonUser from './components/user/SalonUser'; 
import Specialist from './components/Specialist'; 
import CardCategorySearch from './components/TableCategory'; 

import UIStore from './stores/UIStore';
import AppStore from './stores/AppStore';

import './../assets/stylesheets/App.css';

@observer
class App extends Component {
    UIStore = new UIStore();
    AppStore = new AppStore();
    render() {
        console.log(this.AppStore.Data[0].category[0].workers)
        return (
            <div className = "App">
                <Router>
                    <div>
                        <Header 
                            dropdown = {this.AppStore.Data}
                            changeDropdown = {this.UIStore.changeDropdown}
                            />
                        <Header2 
                            dropdown = {this.AppStore.Data}
                            changeDropdown = {this.UIStore.changeDropdown}
                            />
                        <Switch>
                            <Route exact path="/" component={()=><Section  
                                cardClick = {this.UIStore.cardClick}
                                />} />
                            <Route exact path="/Salon/:i" component={()=><Salon 
                                Data = {this.AppStore.Data[Number(this.UIStore.index)]}
                                />}/>
                            <Route path='/Category/:g' component={()=><CardCategorySearch         
                                prof = {this.UIStore.prof}
                                tableSearch = {this.UIStore.tableSearch}
                                filterTable = {this.UIStore.filterTable}
                                onChaked = {this.UIStore.onChaked}
                                />}/>
                            <Route exact path="/Salon/:i/:e" component={()=><Specialist    Data = {this.AppStore.Data}/>}/>        
                        </Switch>
                    </div>
                </Router>
                {/*<SalonUser 
                    Data = {this.AppStore.Data[0]}
                    deleteCard = {this.UIStore.deleteCard}
                    />*/}
                <Footer/>
            </div>
        );  
    }
}

export default App;
