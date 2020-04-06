import React from 'react'

export default function ValidationComponent(props) {
    
    let response = '';
    let backgroundColor = '';

    if(props.length < 5){
        response = 'The text is too short!'
        backgroundColor = 'rgb(180, 102, 128)'
    } else {
        response = 'The textlength is great! :)'
        backgroundColor = 'rgb(133, 180, 102)'
    }
    
    return (
        <div style={{backgroundColor: backgroundColor}} className="textMessage">
            {response}
        </div>
    )
}
