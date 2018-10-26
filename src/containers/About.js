import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/K&Js.jpg';

/* Styles */

const AboutWrapper = styled.div`
    top: 0;
    left: 0;
    background-color: #F7F0F5;
`

const AboutBackground = styled.div`
    position: absolute;
    background: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -5;
    width: 100%;
    height: 200px;
`



/* End Styles */

class About extends Component {
    render() {
        return (
            <AboutWrapper>
                <AboutBackground />
                <div>
                    <h4>K&J's Elegant Pastries is a custom cake shop that specializes in custom cakes for all occasions.</h4>
                </div>
            </AboutWrapper>
        )
    }
}

export default About;