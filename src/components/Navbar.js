import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

const NavButtons = styled.div`
    margin-left: auto;
`

const drawerWidth = 250;


const styles = theme => ({
    navIconHide: {
        display: 'block',
        [theme.breakpoints.up('xl')]: {
            display: 'none'
        }
    },

    drawerPaper: {
        width: drawerWidth,
        left: 0,
        [theme.breakpoints.up('lg')]: {
            width: drawerWidth
        }
    }
});

const menuItemLinks = [
    {
        text: 'Home',
        path: '/'
    }, {
        text: 'About',
        path: '/about'
    }
]


class Navbar extends Component {
    render() {
        return (
            <nav>
                <AppBar style={{ backgroundColor: '#FF86A5' }} title="K&J's" position='fixed'>
                    <Toolbar>
                        <Typography style={{ color: '#F7F0F5' }} variant='title'>K&J's</Typography>
                        <NavButtons>
                            <Link style={{ textDecoration: 'none' }} to='/'><Button style={{ color: '#F7F0F5' }}>Home</Button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/about'><Button style={{ color: '#F7F0F5' }}>About</Button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/contact'><Button style={{ color: '#F7F0F5' }}>Contact</Button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/faq'><Button style={{ color: '#F7F0F5' }}>FAQ</Button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/browse'><Button style={{ color: '#F7F0F5' }}>Browse</Button></Link>
                            <Link style={{ textDecoration: 'none' }} to='/order'><Button style={{ color: '#F7F0F5' }}>Order</Button></Link>
                        </NavButtons>
                    </Toolbar>
                </AppBar>
            </nav>
        )
    }
}

export default Navbar;