import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types';

import Header from './components/Home/Header';
import Section from './components/Home/Section';
import Footer from './components/Home/Footer';
import Salon from './components/salons/Salon'; 
import Specialist from './components/specialists/Specialist';  
import Categorys from './components/categorys/Categorys'; 

import UIStore from './stores/UIStore';
import AppStore from './stores/AppStore';
import NotFound from './NotFound'; 

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
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Section} />
                            <Route exact path="/Salon/:whichSalon" component={Salon}/>
                            <Route exact path='/category/:whichCategory' component={Categorys}/>
                            <Route path='/Salon/:whichSalon/:whichSpecialist' component={Specialist}/>
                            <Route path='/category/:whichCategory/:whichSpecialist' component={Specialist}/>
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
                <Footer/>
            </div>
        );  
    }
}

export default App;
