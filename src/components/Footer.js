import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #393D3F;
    color: #F7F0F5;
`

const FooterText = styled.p`
    text-align: center;
`

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <FooterText>K&J's Elegant Pastries and Creamery</FooterText>
                <FooterText>Other Footer Stuff and Social Media Links/Icons Here</FooterText>
            </FooterWrapper>
        )
    }
}

export default Footer;