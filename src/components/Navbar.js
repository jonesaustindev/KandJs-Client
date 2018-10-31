import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <AppBar style={{ backgroundColor: '#FF86A5' }} title="K&J's" position='fixed'>
                    <Toolbar>
                        <Typography style={{ color: '#F7F0F5' }} variant='title'>K&J's</Typography>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                    </Toolbar>
                </AppBar>
            </nav>
        )
    }
}

export default Navbar;