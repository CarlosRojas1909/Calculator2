import React, { Component } from 'react'
// import PropTypes from prop-types;


 class KeyPadComponent extends Component {


  render() {
    return (
      <div className='button'>
        <button className="operator" name='(' onClick={this.props.handleClick}>(</button>
        <button className="operator" name='CE' onClick={this.props.handleClick}>CE</button>
        <button className="operator" name=')' onClick={this.props.handleClick}>)</button>
        <button className="operator" name='C' onClick={this.props.handleClick}>C</button>

        <button name='1' onClick={this.props.handleClick}>1</button>
        <button name='2' onClick={this.props.handleClick}>2</button>
        <button name='3' onClick={this.props.handleClick}>3</button>
        <button className="operator" name='+' onClick={this.props.handleClick}>+</button>

        <button name='4' onClick={this.props.handleClick}>4</button>
        <button name='5' onClick={this.props.handleClick}>5</button>
        <button name='6' onClick={this.props.handleClick}>6</button>
        <button className="operator" name='-' onClick={this.props.handleClick}> - </button>

        <button name='7' onClick={this.props.handleClick}>7</button>
        <button name='8' onClick={this.props.handleClick}>8</button>
        <button name='9' onClick={this.props.handleClick}>9</button>
        <button className="operator" name='*' onClick={this.props.handleClick}>x</button>

        <button className="operator" name='.' onClick={this.props.handleClick}>.</button>
        <button name='0' onClick={this.props.handleClick}>0</button>
        <button className="operator" name='=' onClick={this.props.handleClick}> = </button>
        <button className="operator" name='/' onClick={this.props.handleClick}>÷</button>
    </div>
    )
  }
}

// KeyPadComponent.propTypes = {
//   handleClick: PropTypes.function.isRequired
// }
export default KeyPadComponent;




