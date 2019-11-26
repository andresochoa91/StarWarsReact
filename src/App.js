import React, { Component } from 'react';
import './App.css';
import CardsList from './CardsList';

class App extends Component {

  constructor(){
    super()
    this.state = {
      people1: "",
      people2: ""
    }
  }

  render(){
    return(
      <div>
        <CardsList people = {this.state.people1}/>               
      </div>
    )
  }

  async componentDidMount(){              
    fetch("https://swapi.co/api/people")
      .then(result => result.json())
      .then(data => this.setState({people1: data.results}))                            
  }
}

export default App;
