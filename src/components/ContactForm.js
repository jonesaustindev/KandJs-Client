import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PrimaryButton from './PrimaryButton';
import styled from 'styled-components';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const FormFieldDiv = styled.div`
  padding-bottom: 10px;
`

class ContactForm extends Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Form
                        onSubmit={onSubmit}
                        render={({ handleSubmit, form, submitting, pristine, values }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <FormFieldDiv id='name'>
                                        <Field label='Enter your name' name="name" component={TextField} placeholder="Name" />
                                    </FormFieldDiv>

                                    <FormFieldDiv id='email'>
                                        <Field label='Enter your email' type='text' name="email" component={TextField} placeholder="Email" />
                                    </FormFieldDiv>

                                    <FormFieldDiv id='message'>
                                        <Field
                                            name="message"
                                            component={TextField}
                                            fullWidth
                                            placeholder='Message'
                                            label='Write to us'
                                            multiline={true}
                                            rows={2}
                                            rowsMax={4}
                                        />
                                    </FormFieldDiv>
                                    <div>
                                        <PrimaryButton
                                            text='Submit'
                                        />
                                    </div>
                                </div>
                            </form>
                        )}
                    />
                </CardContent>
            </Card>
        )
    }
}

export default ContactForm;