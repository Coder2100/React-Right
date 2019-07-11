import React, {Component} from 'react'

import Table from './Table'
import Form from './Form'


class App extends Component{
  //creating a state
  state = {
    //object will contain everything to be stored in the state
    characters:[]
  };
  removeCharacter = index =>{
    const {characters} = this.state;
//use setSate to modify an array
    this.setState({
      characters:characters.filter((character, i) => {//filter does not mutate but create a new array and is a prefrred method to modfy arrays in JS
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]})
  }
  render(){
    //const {characters} = this.state
      //with render
 
    const characters = [
      {
        name : 'Charlie',
        job: 'Bouncer',
      },
      {
        name: 'Zukile',
        job: 'Accountant',
      },
      {
        name: 'Dee',
        job: 'actor',
      },

      {
        name: 'Pearl',
        job: 'Mayor'
      }
    ]
    
    


    //const {characters} = this.state
    return(
      <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter}/>
      <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
export default App
