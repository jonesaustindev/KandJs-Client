import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

class ContactForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <TextField 
                        label='Name'
                        style={{ width: '200px'}}
                    />
                </form>
            </div>
        )
    }
}

export default ContactForm;