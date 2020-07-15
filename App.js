import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name : "sharvik", age : "23"},
      {name : "x", age : "29"},
      {name : "y", age : "26"}
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = () => {
   // console.log('was clicked');
    //this.state.persons[0].name = "Sharvik Jadawala";
  this.setState({
    persons: [
      {name : "sharvik", age : "23"},
      {name : "Ishan", age : "29"},
      {name : "y", age : "26"}
    ]})
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby: drawing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  //  return React.createElement('div', {className:'App'}, React.createElement('h1', null,  'Hi, I\'m a React App'));
  }

}

export default App;
