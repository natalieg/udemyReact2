import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent from './Components/CharComponent'

class App extends Component {

  state = {
    text: '',
    textArray: [],
    textlength: 0,
  }

  componentWillMount = () => {
    let myLocalText = localStorage.getItem('myTextInput');
    console.log("TEMPTEXT", localStorage.getItem('myTextInput'))
    let tempArray = this.makeTextArray(myLocalText);
    this.setState({ 
      text: myLocalText,
      textArray: tempArray,
      textlength: myLocalText.length
    })
  }

  makeTextArray = (text) => {
    let newTextArray = [];
    for (let index = 0; index < text.length; index++) {
      newTextArray.push(text[index])
    }
    return newTextArray;
  }

  handleTextInput = (e) => {
    let newTextArray = this.makeTextArray(e.target.value)
    this.setState({
      text: e.target.value,
      textArray: newTextArray,
      textlength: e.target.value.length
    })
    localStorage.setItem('myTextInput', e.target.value)
  }

  handleRemoveLetter = (index) => {
    const copyText = this.state.text;
    const copyLetters = [...this.state.textArray]; 
    let newText = copyText.slice(0, index) + copyText.slice(index + 1);
    copyLetters.splice(index, 1);
    this.setState({
      text: newText,
      textArray: copyLetters,
      textlength: newText.length
    })
    localStorage.setItem('myTextInput', newText)
  }

  render() {
    let letterList = null;
    letterList = (
      <div>
        {this.state.textArray.map((letter, index) => {
          return <CharComponent key={index} letter={letter} click={() => this.handleRemoveLetter(index)}/>
        })}
      </div>
    )

    return (
      <div className="App">
        <input type="text" onChange={this.handleTextInput} value={this.state.text}/>
        <p>Textlength: {this.state.textlength}</p>
        <ValidationComponent length={this.state.textlength}/>
        {letterList}
        <hr />
        <ol>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        <ul>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box
            (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as a prop.</li>
        </ul>
      </div>
    );
  }
}

export default App;
