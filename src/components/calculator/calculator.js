import React, { useState } from 'react';
import '../../App.css';

function Calculator() {
    const [ currentSum, setCurrentSum] = useState(0);
    const [input, setInput] = useState('');

    const Add = (e) => {
        e.preventDefault();
        if (input == '')
            return;
        let sum = Number(currentSum) + Number(input);
        setCurrentSum(sum);
    }

    const Clear = (e) => {
        e.preventDefault();
        setInput('')
        setCurrentSum(0)
    }

    const checkForInput = (evt) => {
        evt.preventDefault();
        if((input==Number(0) && Number(evt.target.value)==Number(0))){
            console.log("0 is being typed multiple times")
        }
        else{
            setInput(evt.target.value)
        }

    }

    return (
        <div className="App">
            <div className="app-title">
                <h1> Basic Form Calculator</h1>
            </div>
            <form>
                <input type="text" id="result" placeholder="result" value={currentSum} readOnly />
                <input type="number" id="num" placeholder="enter a number" onChange={(e) => { checkForInput(e) }} value={input} />
                <button onClick={Add}>Add</button>
                <button onClick={Clear}>Clear</button>
            </form>
        </div>
    );
}

export default Calculator;