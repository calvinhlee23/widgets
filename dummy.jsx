
import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    // your code will be here
    this.state = {
      result: 0,
      inp1: "",
      inp2: ""
    };
    this.setNum = this.setNum.bind(this);
    this.operation = this.operation.bind(this);
  }

  // your code will be here
  setNum(type){
    var num = event.target.value ? parseInt(event.target.value) : "";
    console.log(event.target.value);
    return (event => this.setState({[type]: num}));
  }

  operation(e){
    e.preventDefault();
    if (event.currentTarget.value === "+") {
      this.setState({['result']: this.inp1 + this.inp2});
    }
    else if (e === "-") {
      this.setState({['result']: this.inp1 - this.inp2});
    } else if (e === "*") {
      this.setState({['result']: this.inp1 * this.inp2});
    } else {
      this.setState({['result']: this.inp1 / this.inp2});
    }
  }
  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange = {this.setNum('inp1')} value = {this.state.inp1}/>
        <input onChange = {this.setNum('inp2')} value = {this.state.inp2}/>
        <button>clear</button>
        <br/>

        <button onClick = {this.operation} value = "+">+</button>
        <button onClick = {this.operation} value = "-">-</button>
        <button onClick = {this.operation} value = "*">*</button>
        <button onClick = {this.operation} value = "/">/</button>

      </div>
    );
  }
}

export default Calculator;
