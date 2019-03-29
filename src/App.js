import React, { Component } from 'react'; 
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';


class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
        result: ""
    }
}

  //Method to calculate result of expresion
  calculate = () => {

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch(e) {
        this.setState({result: "error"})
    }
  }

  //method to reset input box
  reset = () => {
    this.setState({result: ""})
  }

  //Method to delete last character pressed
  backspace = () => {
    this.setState({
        result: this.state.result.slice(0, -1)
      })
  }

  handleClick = (e) => {
 e.preventDefault();

    if(e.target.name === "=") {
      this.calculate();
    } else if(e.target.name === "C") {
      this.reset();
    }else if(e.target.name === "CE") {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + e.target.name
      })
    }
  }


  render() {
    return (
      <div className="App">
        <div className="wrapper">
            <h1>Simple Calculator</h1>
            <ResultComponent result={this.state.result}/>
            <KeyPadComponent handleClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default App;




