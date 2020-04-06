import React from 'react'

export default function CharComponent(props) {
    return (
        <div className='charComponent' onClick={props.click}>
            {props.letter}
        </div>
    )
}
