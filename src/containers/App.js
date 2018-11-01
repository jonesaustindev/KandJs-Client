import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import Navbar from '../components/Navbar';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                    </Switch>
            </div>
        )
    }
}

export default App;