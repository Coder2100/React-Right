import React, {Component} from 'react'

import Table from './Table'


class App extends Component{
  render(){
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
    return(
      <div className="container">
      <Table characterData={characters}/>
      </div>
    )
  }
}
export default App
