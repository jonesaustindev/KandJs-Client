import React, { Component } from 'react';
import styled from 'styled-components';
import SecondaryButton from '../components/SecondaryButton';
import Footer from '../components/Footer';
import cupcakeImg from '../images/cupcakes24.jpg';
import Grid from '@material-ui/core/Grid';

/* styles */
const FAQWrapper = styled.div`
  margin-top: 150px;
  background-color: ##F7F0F5;
  color: #393D3f;
  padding-left: 50px;
  padding-right: 50px;
`

const FAQContent = styled.div`
  margin-top: 20px;
`

const ButtonWrap = styled.div`
    text-align: center;
    margin-top: 25px;
`

const Order = styled.div`
    padding-top: 50px;
    background-color: #FF86A5;
    color: #F7F0F5;
    padding-bottom: 100px;
    z-index: 2;
    box-shadow: 3px 3px 15px rgba(0,0,0,0.2);
`

const SectionTitle = styled.h2`
    font-family: 'kaushan_scriptregular';
    text-align: center;
    font-size: 70px;
    margin-bottom: 0;
`

const SectionSubTitle = styled.h3`
  color: #FF86A5;
  margin-bottom: 0;
  font-size: 22px;
`

const Subtext = styled.p`
    font-size: 18px;
    margin-top: 0;
`

const SubtextCenter = styled.p`
  font-size: 18px;
  margin-top: 0;
  text-align: center;
`

const Cupcake = styled.img`
  display: block;
  margin: auto;
  max-height: 600px;
`

const CupcakeDiv = styled.div`
  width: 90%;
`

const BigWrap = styled.div`
  padding: 20px;
`

/* end styles */

export default class FAQ extends Component {
  render() {
    return (
      <div style={{ 'paddingTop': '50px'}}>
        <SectionTitle style={{ 'color': '#FF86A5' }}>FAQ</SectionTitle>
        <BigWrap>
          <Grid container align='stretch' spacing={16}>
            <Grid item md={6} sm={12}>
              <FAQWrapper>
                <div>
                  <FAQContent>
                    <SectionSubTitle>What's a popular flavor?</SectionSubTitle>
                    <Subtext>Everything is delicious however our Signature Strawberry Cheesecake is overwhelmingly good! Also the Sweet Potato Cupcake!</Subtext>
                  </FAQContent>
                  <div>
                    <SectionSubTitle>Do you deliver?</SectionSubTitle>
                    <Subtext>Delivery is available for large cake deliveries. Price varies by location of delivery.</Subtext>
                  </div>
                  <div>
                    <SectionSubTitle>How far in advance should I place my order?</SectionSubTitle>
                    <Subtext>Please order for Custom Cakes 4 weeks in advance of your event. To guarantee availability, place orders as soon as you decide you want to order.</Subtext>
                  </div>
                </div>
              </FAQWrapper>
            </Grid>
            <Grid item md={6} sm={12}>
              <CupcakeDiv>
                <Cupcake src={cupcakeImg} alt='cupcakes' />
              </CupcakeDiv>
            </Grid>
          </Grid>
        </BigWrap>

        <Order>
          <SectionTitle>Order Now!</SectionTitle>
          <SubtextCenter>Place an order for your custom cake or treat today</SubtextCenter>
          <ButtonWrap>
            <SecondaryButton text='Order Now' />
          </ButtonWrap>
        </Order>

        <Footer />
      </div>
    )
  }
}
