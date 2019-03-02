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
                        <Switch>
                            <Route exact path="/" component={(props)=><Section  
                                {...props}
                                cardClick = {this.UIStore.cardClick}
                                />} />
                            <Route exact path="/Salon/:i" component={(props)=><SalonUser 
                                {...props}
                                Data = {this.AppStore.Data}
                                deleteCard = {this.UIStore.deleteCard}
                                />}/>
                            <Route exact path='/category/:i' component={(props)=><CardCategorySearch         
                                {...props}
                                prof = {this.UIStore.prof}
                                tableSearch = {this.UIStore.tableSearch}
                                filterTable = {this.UIStore.filterTable}
                                onChaked = {this.UIStore.onChaked}
                                />}/>
                            <Route path='/Salon/:i/:k' component={(props)=><Specialist 
                                {...props}
                                Data = {this.AppStore.Data}
                                />}/>
                            <Route path='/category/:i/:k' component={(props)=><Specialist
                                {...props}
                                Data = {this.AppStore.Data}
                                />}/>
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>
        );  
    }
}

export default App;
