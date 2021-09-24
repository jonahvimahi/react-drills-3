import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      filterString: "",
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  handleChange(filter) {
    this.setState({ filterString: filter })
  }
  render() {
    let foodsToDisplay = this.state.foods
    .filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input type="text" onChange={(e) => this.handleChange(e.target.value)}/>{foodsToDisplay}
      </div>
    )
  }
}
export default App