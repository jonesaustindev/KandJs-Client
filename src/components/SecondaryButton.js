import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        background: '#F7F0F5',
        borderRadius: 3,
        border: 0,
        color: '#FF86A5',
        height: 48,
        padding: '0 25px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .08)'
    }
}

function SecondaryButton(props) {
    const { classes } = props;
    const text = props.text;

    return (
        <Button
        classes={{
            root: classes.root
        }}
        >
        {text}
        </Button>
    );
}
  
SecondaryButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(SecondaryButton);