import { useState } from 'react'
import './App.css'

export function App() {
    const [display, setDisplay] = useState('0')

   
    const showNumber = (e) => {
        const number = e.target.textContent
        
        if(display == "0"){
            setDisplay(number)
        } else{
            setDisplay(display + number)
        }
    }

    const operator = (e) => {
        const operation = e.target.textContent
        setDisplay(display + " " + operation + " ")
    }

    const calculate = (e) => {
        let character = ""
        
        if (display.includes("+")){
            character = "+"
        } else if (display.includes("-")){
            character = "-"
        } else if (display.includes("x")){
            character = "x"
        } else if (display.includes("÷")){
            character = "÷"
        }

        const num1 = parseFloat(display.slice(0, (display.indexOf(character)-1)))
        const num2 = parseFloat(display.slice((display.indexOf(character)+2)))

        

        switch (character) {
            case "+":
                setDisplay(num1 + num2) 
                break;
        
            case "-":
                setDisplay(num1 - num2)
                break;

            case "x":
                setDisplay(num1 * num2)
                break;
        
            case "÷":
                setDisplay(num1 / num2)
                break;
        }
        
    }

    const clear = (e) => {
        setDisplay("")
    }

    const backSpace = (e) => {
        setDisplay(display.slice(0, -1))
        //[string].slice indica el comienzo y final del string
    }


    return (
        <div className="grid-container">
            <div className="output">
                <div className="output__history">{display}</div>
                <div className="output__current">{display}</div>
            </div>
            <button onClick={clear} className="two-columns">AC</button>
            <button onClick={backSpace}>DEL</button>
            <button onClick={operator}>÷</button>
            <button onClick={showNumber}>1</button>
            <button onClick={showNumber}>2</button>
            <button onClick={showNumber}>3</button>
            <button onClick={operator}>x</button>
            <button onClick={showNumber}>4</button>
            <button onClick={showNumber}>5</button>
            <button onClick={showNumber}>6</button>
            <button onClick={operator}>+</button>
            <button onClick={showNumber}>7</button>
            <button onClick={showNumber}>8</button>
            <button onClick={showNumber}>9</button>
            <button onClick={operator}>-</button>
            <button onClick={showNumber} className="rounded-left">.</button>
            <button onClick={showNumber}>0</button>
            <button className="two-columns rounded-right" onClick={calculate}>=</button>
        </div>

    )


}