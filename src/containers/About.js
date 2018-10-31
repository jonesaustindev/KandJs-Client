import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import backgroundImage from '../images/K&Js.jpg';
import Footer from '../components/Footer';

/* Styles */

const Background = styled.div`
    background-color: #F7F0F5;
`

const AboutLanding = styled.div`
    padding-bottom: 80px;
`

const AboutBackground = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    background: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 5;
    width: 100%;
    height: 200px;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.04);
`

const LogoContainer = styled.div`
    text-align: center;
`

const Logo = styled.img`
    height: 150px;
`

const Heading = styled.div`
    padding-top: 300px;
`

const HeadingTitle = styled.h3`
    font-size: 30px;
    margin-top: 50px;
    text-align: center;
    color: #FF86A5;
`

const AboutContent = styled.div`
    text-align: center;
    padding-right: 60px;
    padding-left: 60px;
    line-height: 1.8em;
    font-size: 18px;
`

/* End Styles */

class About extends Component {
    render() {
        return (
            <Background>
                <AboutLanding>
                    <AboutBackground />
                    <Heading>
                        <LogoContainer>
                            <Logo src={require('../images/logo.png')} />
                        </LogoContainer>
                        <HeadingTitle>K&J's Elegant Pastries is a custom cake shop that specializes in custom cakes for all occasions.</HeadingTitle>
                    </Heading>
                    <AboutContent>
                        <p>While offering many other sweet treats such as cupcakes, pastries, cookies and so much more, we pride ourselves on our unique designs that are custom made for you to order. We bake with the freshest ingredients and offer the best quality product for the best price. We are committed to creating the best cakes that will definitely make your event unforgettable.</p>

                        <p>Chef Kristal Bryant attended Virginia College Culinard in Birmingham Al. Growing up in a family that had a passion for cooking and her love for arts, she knew at the very young age of 14 that she wanted to become a chef. With over 10 years of experience in the food industry she has an eye for “detailed perfection” and put a guaranteed stamp of approval on each showpiece that she creates.</p>
                    </AboutContent>
                </AboutLanding>
                <Footer />
            </Background>
        )
    }
}

export default withRouter(About);