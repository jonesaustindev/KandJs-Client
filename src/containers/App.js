import React, { Component } from 'react';
import { Route, Link, Redirect, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Homepage from './Homepage';
import Navbar from '../components/Navbar';
import About from './About';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;