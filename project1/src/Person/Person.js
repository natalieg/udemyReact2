import React from 'react'

const person = (props) => {
    return (
        <div>
            <p className='person' onDoubleClick={props.click}>
                My name is {props.name} <br />
                I am {props.age} years old!<br/>
                <input type='text' onChange={props.changed} value={props.name}/>
            </p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;