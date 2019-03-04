import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types';

import Header from './components/Home/Header';
import HeaderUser from './components/user/HeaderUser';
import Section from './components/Home/Section';
import Footer from './components/Home/Footer';
import Salon from './components/Salon'; 
import SalonUser from './components/user/SalonUser'; 
import SpecialistUser from './components/user/SpecialistUser'; 
import Specialist from './components/Specialist'; 
import SpecialistCategory from './components/SpecialistCategory'; 

import UIStore from './stores/UIStore';
import AppStore from './stores/AppStore';

import './../assets/stylesheets/App.css';

@observer
class App extends Component {
    static childContextTypes = {
        UIStore : PropTypes.object,
        AppStore : PropTypes.object
    }
    UIStore = new UIStore();
    AppStore = new AppStore();
    getChildContext (){
        return {
            UIStore : this.UIStore,
            AppStore : this.AppStore,
        }
    }
    componentDidMount(){
        this.AppStore.initData()
    }
    render() {
        return (
            <div className = "App">
                <Router>
                    <div>
                        <HeaderUser/>
                        <Switch>
                            <Route exact path="/" component={Section} />
                            <Route exact path="/Salon/:whichSalon" component={SalonUser}/>
                            <Route exact path='/category/:whichCategory' component={SpecialistCategory}/>
                            <Route path='/Salon/:whichSalon/:whichSpecialistForSalon' component={SpecialistUser}/>
                            <Route path='/category/:whichCategory/:whichSpecialistForCategory' component={SpecialistUser}/>
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>
        );  
    }
}

export default App;
