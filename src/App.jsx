import { useState } from 'react'
import './App.css'

export function App() {
    const [display, setDisplay] = useState('0')
    const [arr, setArr] = useState([])
    let [results, setResults] = useState(0)
    let [disabled, setDisabled] = useState(false)

    //USABILIDAD CON TECLADO

    // useEffect(() => {
    //     document.addEventListener("keydown", keyPress, true)
    // }, [])

    // const keyPress = (e) => {
        
    //     console.log(e.key)
    //     const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    //     const ops = ["/", "*", "-", "+", "Enter"]
        
    //     if (nums.includes(e.key)){
    //         const number = e.key
    //         showNumber(number)
    //     } else if (ops.includes(e.key)) {
    //         const operation = e.key
    //         operator(operation)
    //     }
    // } 
   
    const showNumberClick = (e) => {
        const number = e.target.textContent
        showNumber(number)
    }

    const showNumber = (number) => {
        console.log("results antes de entrar", results)
        if(display === "0"){
            setDisplay(number)
            setDisabled(false)
        }else if(display == " " + results) {
            setDisabled(true)
        }else{
            setDisplay(display + number)
            console.log("entro aca")
            console.log(display)
            setDisabled(false)
            
        }
    }

    const operatorClick = (e) => {
        const operation = e.target.textContent
        operator(operation)
    }

    const operator = (operation) => {
        //si se ingreso algun numero, solo se guarda el último. Si no se ingreso nada se guarda el número en pantalla
        arr.length > 0 ? arr.push(display.slice(display.lastIndexOf(" ") + 1)) : arr.push(display)
        
        setDisplay(display + " " + operation + " ")
        
        arr.push(operation)
        operation === "=" && print()
        
    }


    const print = () => {
        for (let i = 1; i < arr.length; i=i+2) {
            if(i === 1){
                results = Number(arr[0])
            }
            
                
            arr[i] === "+" ? results = results + Number(arr[i+1])
            : arr[i] === "-" ? results = results - Number(arr[i+1])
            : arr[i] === "x" ? results = results * Number(arr[i+1])
            : arr[i] === "÷" ? results = results / Number(arr[i+1])
            : setDisplay(" " + results); //le agrego un espacio para que funcione el display.lastindexof
        } 
        setResults(results)
    }
    

    const clear = () => {
        setDisplay("0")
        arr.length = 0
    }

    const backSpace = () => {
        setDisplay(display.slice(0, -1))
    }


    return (
        <div className="grid-container">
            <div className="output">
                <div className="output__current">{display}</div>
            </div>
            <button onClick={clear} className="two-columns">AC</button>
            <button onClick={backSpace}>DEL</button>
            <button className="ops" onClick={operatorClick}>÷</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>1</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>2</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>3</button>
            <button className="ops" onClick={operatorClick}>x</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>4</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>5</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>6</button>
            <button className="ops" onClick={operatorClick}>+</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>7</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>8</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>9</button>
            <button className="ops" onClick={operatorClick}>-</button>
            <button onClick={showNumberClick} className="rounded-left">.</button>
            <button className={disabled === true ? "disabled" : null} onClick={showNumberClick}>0</button>
            <button className="two-columns rounded-right ops" onClick={operatorClick}>=</button>
        </div>

    )


}