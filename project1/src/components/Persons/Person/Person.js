import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
background-color: #a12749;
padding-top: 20px;
padding-bottom: 5px;
margin: 15px;
`;

const person = (props) => {

    return (
        <StyledDiv>
            <p className='person' onDoubleClick={props.click}>
                My name is {props.name} <br />
                I am {props.age} years old!<br />
                <input type='text' onChange={props.changed} value={props.name} />
            </p>
            <p>{props.children}</p>
        </StyledDiv>
    )
};

export default person;