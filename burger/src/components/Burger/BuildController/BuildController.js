import React from 'react'
import classes from './BuildController.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

function buildController(props) {
    return (
        <div className={classes.BuildController}>
            <p>Burger Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    more={() => props.ingredientAdded(ctrl.type)}
                    less={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button
                disabled={!props.purchasable}
                onClick={props.activateOrder}
                className={classes.OrderButton}>ORDER NOW</button>
        </div>
    )
}

export default buildController
