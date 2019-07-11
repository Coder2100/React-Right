import React, {Component} from 'react'

import Table from './Table'


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
      </div>
    )
  }
}
export default App
