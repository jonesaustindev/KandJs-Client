import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const card = {
//     maxWidth: '345px'
// }

const media = {
    height: '290px',
    marginTop: '-30px'
}

const card = {
    width: '100%'
}

class BrowseCard extends Component {
    render() {
        console.log(this.props.image);
        return (
            <Card style={card}>
                <CardActionArea>
                    <CardMedia
                        style={media}
                        image={require('../images/cakes_boys_character9.jpg')}
                    />
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Order
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }
}


export default BrowseCard;