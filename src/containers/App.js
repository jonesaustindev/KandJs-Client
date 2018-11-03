import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Navbar from '../components/Navbar';
import Contact from './Contact';
import FAQ from './FAQ';
import Browse from './Browse';
import Order from './Order';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/faq' component={FAQ} />
                        <Route exact path='/browse' component={Browse} />
                        <Route exact path='/order' component={Order} />
                    </Switch>
            </div>
        )
    }
}

export default App;