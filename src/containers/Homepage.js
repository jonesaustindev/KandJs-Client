import React, { Component } from 'react';
import styled from 'styled-components';
import backgroundImage from '../images/bg.png';
import BrowseCard from '../components/BrowseCard';
import Grid from '@material-ui/core/Grid';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Footer from '../components/Footer';

/* Styles */
const Hero = styled.div`
    top: 0;
    left: 0;
    width: auto;
    height: 100vh;
`

const HeroBackground = styled.div`
    position: absolute;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -5;
    width: 100%;
    height: 100vh;
`

const HeroTitle = styled.h1`
    font-family: 'kaushan_scriptregular';
    text-align: center;
    font-size: 110px;
    padding-top: 50px;
    color: #F7F0F5;
    margin-bottom: 0;
`

const HeroSubTitle = styled.p`
    font-family: 'kaushan_scriptregular';
    text-align: center;
    color: #FFDDE2;
    margin-top: 0;
    font-size: 30px;
`

const HeroContent = styled.div`
    padding-top: 60px;
`

const Browse = styled.div`
    padding-top: 100px;
    background-color: #F7F0F5;
    color: #393D3f;
    padding-bottom: 100px;
`
const SectionTitle = styled.h2`
    font-family: 'kaushan_scriptregular';
    text-align: center;
    font-size: 70px;
    margin-bottom: 0;
`

const Subtext = styled.p`
    text-align: center;
    font-size: 18px;
    margin-top: 0;
`

const GridContainer = styled.div`
    margin: auto;
    margin-top: 50px;
    display: flex;
    flex-direction: row-wrap;
    padding: 10px;
    width: 90%;
`

const ButtonWrap = styled.div`
    text-align: center;
    margin-top: 25px;
`

const Order = styled.div`
    padding-top: 100px;
    background-color: #FF86A5;
    color: #F7F0F5;
    padding-bottom: 100px;
    z-index: 2;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.2);
`

/* End Styles */

class Homepage extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <HeroBackground />
                    <HeroContent>
                        <HeroTitle>K&J's</HeroTitle>
                        <HeroSubTitle>Elegant Pastries and Creamery</HeroSubTitle>
                    </HeroContent>
                </Hero>
                
                <Browse>
                    <SectionTitle>Our Products</SectionTitle>
                    <Subtext>Cakes | Pastries | Treats</Subtext>
                    <GridContainer>
                        <Grid container align='stretch' spacing={16}>
                            <Grid item md={4} sm={6} xs={12}>
                                <BrowseCard />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <BrowseCard />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <BrowseCard />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <BrowseCard />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <BrowseCard />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <BrowseCard />
                            </Grid>
                        </Grid>
                    </GridContainer>
                    <ButtonWrap>
                        <PrimaryButton text='View More' />
                    </ButtonWrap>
                </Browse>

                <Order>
                    <SectionTitle>Order Now!</SectionTitle>
                    <Subtext>Place an order for your custom cake or treat today</Subtext>
                    <ButtonWrap>
                        <SecondaryButton text='Order Now' />
                    </ButtonWrap>
                </Order>

                <Footer />
            </div>
        )
    }
}

export default Homepage;