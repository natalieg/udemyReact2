import React from 'react'

const person = (props) => {
    return (
        <div>
            <p className='person'>
                My name is {props.name} <br />
                I am {props.age} years old!
    </p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;