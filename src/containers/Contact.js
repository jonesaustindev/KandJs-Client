import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = styled.div`
  background-color: #F7F0F5;
  height: 900px;
`

const FormWrapper = styled.div`
  margin: auto;
  width: 70%;
  padding-top: 100px;
`

const ContactTitle = styled.h2`
  font-family: 'kaushan_scriptregular';
  text-align: center;
  font-size: 70px;
  margin-bottom: 0;
  color: #FF86A5;
`

class Contact extends Component {
  render() {
    return (
      <div>
        <ContactPage>
          <FormWrapper>
            <ContactTitle>Contact</ContactTitle>
            <ContactForm />
          </FormWrapper>
        </ContactPage>
        <Footer />
      </div>
    )
  }
}

export default withRouter(Contact);