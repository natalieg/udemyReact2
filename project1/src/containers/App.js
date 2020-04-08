import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? '#a12749' : '#424d1b'};
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  ${props => props.alt ? 'border-top-left-radius: 15px;' : '  border-top-right-radius: 15px;'}
  &:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
`

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Nageki", age: 16 },
      { id: '2', name: "Lucien", age: 20 },
      { id: '3', name: "Garu", age: 22 }
    ],
    showPersons: true
  }

  // Changing Name with Input
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { return p.id === id });
    const person = { ...this.state.persons[personIndex] }; // copy of array from state
    person.name = event.target.value; // get the value of input field
    const persons = [...this.state.persons]; // copy of object from state
    persons[personIndex] = person; //assing the new object with the new name into the array

    this.setState({
      persons: persons //new object in state
    })
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      );
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <div className='Wrapper'>
        <div className="App">
          <div className='normal'>
            <h1>Hi, I'm a React App</h1>
            <p className={classes.join(' ')}>This is working!</p>
            <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton>
            {/* <button className="myButton" alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</button> */}
            {persons}
          </div>
        </div>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am a React App!!!'));
  }
}

export default App; 
