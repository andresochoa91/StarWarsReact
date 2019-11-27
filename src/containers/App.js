import React, { Component } from 'react';
import '../App.css';
import CardsList from '../components/CardsList';
import DropDown from '../components/DropDown';
import "tachyons";

class App extends Component {

  constructor(){
    super()
    this.state = {
      people1: "",
      people2: ""
    }
  }

  clickDropDown = (event) => {
    if(event.target.value !== "Select your character"){
      this.setState({ people1: this.state.people2.filter(arr => arr.name === event.target.value) })
    }
  }

  render(){
    return(
      <div>
        <img src="https://www.freepnglogos.com/uploads/star-wars-logo-png-8.png" height="150px" alt="img"/>
        <DropDown people = {this.state.people2} cldd = {this.clickDropDown}/>
        <br/>
        <CardsList people = {this.state.people1}/>
      </div>
    )
  }

  componentDidMount(){              
    fetch("https://swapi.co/api/people")
      .then(result => result.json())
      .then(data => this.setState({people2: data.results}))                            
  }
}

export default App;
