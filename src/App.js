import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Nageki", age: 16 },
      { name: "Lucien", age: 20 },
      { name: "Garu", age: 22 }
    ]
  }

  switchNameHandler = () => {
    // Dont do this: this.state.persons[0].name = "Tobias";
    this.setState({
      persons: [
        { name: "Tobias", age: 21 },
        { name: "Daven", age: 23 },
        { name: "Garu", age: 25 }
      ]
    })
  }

  // Changing Name with Input
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Tobias", age: 21 },
        { name: event.target.value, age: 23 },
        { name: "Garu", age: 25 }
      ]
    })
  }

  render() {
    return (
      <div className='Wrapper'>
        <div className="App">
          <div className='normal'>
            <h1>Hi, I'm a React App</h1>
            <p>This is working yai</p>

            <button onClick={this.switchNameHandler}>Switch AU</button>

            <Person click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age} />
            <Person click={this.switchNameHandler}
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangeHandler}>
              My Hobbie is a secret ;)</Person>
            <Person click={this.switchNameHandler} name={this.state.persons[2].name} age={this.state.persons[2].age} />

          </div>
        </div>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I am a React App!!!'));
  }
}

export default App; 
