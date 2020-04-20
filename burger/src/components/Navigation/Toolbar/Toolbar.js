import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Auxi'

function toolbar(props) {
    return (
        <Aux>
            <div onClick={props.showSide}
                style={{ 
                    height: "40px", 
                    padding: "10px", 
                    position: "absolute",
                    top: "0",
                    right: "0" }}>
                <Logo /></div>
            <header className={[classes.Toolbar, classes.DesktopOnly].join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </header>
        </Aux>
    )
}

export default toolbar
