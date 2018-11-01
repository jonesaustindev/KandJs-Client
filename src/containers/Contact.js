import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import ContactForm from '../components/ContactForm';

const FormWrapper = styled.div`
    padding-top: 100px;
`

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(500);
    window.alert(JSON.stringify(values, 0, 2));
}

class Contact extends Component {
  render() {
    return (
      <FormWrapper>
        <h2>Contact</h2>
        <ContactForm />
      </FormWrapper>
    )
  }
}

export default withRouter(Contact);