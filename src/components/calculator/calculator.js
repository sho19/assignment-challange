import React, { useState, useEffect } from 'react';
import '../../App.css';

function Calculator() {
    const [currentSum, setCurrentSum] = useState(0);
    const [clear, setClear] = useState(false);
    const [input, setInput] = useState();

    useEffect(() => {
        document.querySelector('#result').value = "";
    }, [])

    useEffect(() => {
        if (clear)
            document.querySelector('#result').value = "";
    })

    const Add = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currentNum = document.querySelector('#num').value
        if (currentNum == '')
            return;
        let sum = currentSum + currentNum;
        setCurrentSum(sum);
        document.querySelector('#num').value = "";

    }


    const subract = (e) => {
        e.preventDefault();
        if (clear) setClear(false);
        let currentNum = document.querySelector('#num').value
        if (currentNum == '')
            return;
        let sum = currentSum - currentNum;
        setCurrentSum(sum);
        document.querySelector('#num').value = "";

    }

    const Clear = (e) => {
        e.preventDefault();
        console.log('sum:', currentSum);
        document.querySelector('form').reset();
        setClear(true);
        setCurrentSum(0);
    }

    const checkForInput = (evt) => {
        evt.preventDefault();
        if((input==0 && evt.target.value==0)){
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
                <input type="text" id="result" value={currentSum} readOnly />
                <input type="number" id="num" placeholder="enter a number" onChange={(e) => { checkForInput(e) }} value={input} />
                <button onClick={Add}>Add</button>
                <button onClick={Clear}>Clear</button>
            </form>
        </div>
    );
}

export default Calculator;