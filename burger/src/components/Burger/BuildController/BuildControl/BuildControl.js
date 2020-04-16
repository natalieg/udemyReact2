import React from 'react'
import classes from './BuildControl.css'

function buildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.less} disabled={props.disabled}>-</button>
            <button className={classes.More} onClick={props.more}>+</button>
        </div>
    )
}

export default buildControl
