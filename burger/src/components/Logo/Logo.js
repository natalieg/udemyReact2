import React from 'react'
import img from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

function Logo(props) {
    return (
        <div className={classes.Logo}>
            <img src={img} alt="MyBurger"/>
        </div>
    )
}

export default Logo
