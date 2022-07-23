import React from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
  color?: string
}

interface AppState {
  counter: number
}

//interface to react.component is always passed through generic
// class App extends React.Component<AppProps, AppState> {
class App extends React.Component<AppProps> {
  // normal way of defining state
  state = { counter: 0 }

  //constructor way
  //   constructor(props: AppProps) {
  //     super(props)
  //     this.state = { counter: 0 }
  //   }

  //defining state using 2 above syntaxes is absolutely different in ts.
  //React.Component
  //we can use either of 2 methods to initialise it.
  //if use constructor, need to define an interface
  //or define state = {counter : 0}
  //best is to use state={counter:0}

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  }

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    )
  }
}

ReactDOM.render(<App color='red' />, document.querySelector('#root'))
