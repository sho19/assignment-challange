import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import ClearButton from "./components/ClearButton/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
      display: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
    this.setState({ display: this.state.input + val });
  };

  addToDisplay = val => {
    this.setState({ display: val });
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
      this.setState({ display: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
      this.setState({ display: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
    this.setState({ display: "" });
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
    this.addToDisplay()
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "plus") {
      let sum = Number(this.state.previousNumber) + Number(this.state.currentNumber)
      this.setState({ display: sum });
    }
    this.setState({ input: "" });
    this.setState({ operator: "" })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="calc">
          <div className="calc-wrapper">
            <div className="row">
              <Input>{this.state.display}</Input>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
            </div>
            <div className="row">
              <Button handleClick={this.addDecimal}>.</Button>
              <Button handleClick={this.addZeroToInput}>0</Button>
              <Button handleClick={this.evaluate}>=</Button>
              <Button handleClick={this.add}>+</Button>
            </div>
            <div className="row">
              <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


