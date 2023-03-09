import {Component} from 'react'

class ClickCounter extends Component {
  state = {count:0}
  onIncrement = () =>{
      this.setState(previousState =>
        console.log(`${previousState.this.state.count}`))
        return {this.state.count:previousState.this.state.count + 1}
      })
  }
  render() {
    return (
      <div className="bg-container">
        <h1>
          The button has been clicked <span>{this.state.count}</span> times
        </h1>
        <p>Click the button to increase the count</p>
        <button onClick = {this.onIncrement}>click me!</button>
      </div>
    )
  }
}

export default ClickCounter
