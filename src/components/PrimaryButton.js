import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        background: '#FF86A5',
        borderRadius: 3,
        border: 0,
        color: '#F7F0F5',
        height: 48,
        padding: '15px 20px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .08)'
    }
}

function PrimaryButton(props) {
    const { classes } = props;
    const text = props.text;

    return (
        <Button
        type='submit'
        classes={{
            root: classes.root
        }}
        >
        {text}
        </Button>
    );
}
  
PrimaryButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(PrimaryButton);