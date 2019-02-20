import React, { Component } from 'react';
import Header from './components/Home/Header';
//import Section from './components/Home/Section';
import Footer from './components/Home/Footer';
import Varsaviranoc from './components/Varsaviranoc';

class App extends Component {
    render() {
        return (
            <div className = "App">
                <link
                      rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                      crossOrigin="anonymous"
                     />
                <Header />
                <Varsaviranoc />
                {/*<Section />*/}
                <Footer />
            </div>
        );
    }
}

export default App;
