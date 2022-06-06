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
      display: "",
      ele: 3
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
    this.previousNumber = 0
    this.setState({ input: "" });
    this.setState({ display: "" });
  };

  previousNumber = 0

  add = () => {
    if (!this.previousNumber) {
      this.previousNumber = this.state.input;
    }
    else {
      this.previousNumber = Number(this.previousNumber) + Number(this.state.input)
    }
    this.setState({ input: "" });
    this.operator = "plus";
    this.addToDisplay("+")

  };

  evaluate = () => {
    this.currentNumber = this.state.input;
    if (this.operator === "plus") {
      let sum = Number(this.previousNumber) + Number(this.currentNumber)
      this.setState({ display: sum });
    }
    this.setState({ input: "" });
    this.setState({ operator: "" })
    this.previousNumber = 0

  }

  series = Array.from(Array(3).keys())

  createNumButtons = () => {
    let i = 1;
    return (
      <>
        {this.series.map((item,index) => {
          return (
            <div className="row" key={index}>
              {this.series.map(() => {
                return <Button handleClick={this.addToInput} key={i}>{i++}</Button>
              })}
            </div>
          )
        })}
      </>
    )
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
            <>
              {
                this.createNumButtons()
              }
              <div className="row">
                <Button handleClick={this.addDecimal}>.</Button>
                <Button handleClick={this.addZeroToInput}>0</Button>
                <Button handleClick={this.evaluate}>=</Button>
                <Button handleClick={this.add}>+</Button>
              </div>
              <div className="row">
                <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
              </div>
            </>
          </div>

        </div>
      </div>
    );
  }
}

export default App;


