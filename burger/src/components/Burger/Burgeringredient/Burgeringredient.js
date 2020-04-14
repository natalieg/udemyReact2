import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classes from './Burgeringredient.css'

class Burgeringredient extends Component {

    randomWidth = () => {
        return Math.floor(Math.random() * 30) + 80;
    }

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case ('salad'):
                let saladWidth = this.randomWidth() + "%";
                ingredient = <div className={classes.Salad} style={{width: saladWidth}}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

Burgeringredient.PropTypes = {
    type: PropTypes.string.isRequired
}

export default Burgeringredient
