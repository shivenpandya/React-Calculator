import React from 'react'
import './Buttons.css'


const Buttons = (props) => {
    return (
        <>
        <div className="buttonContainer">
            <div className="buttonRow"> 
                <button>CE</button> 
                <button onClick={() => props.onClick('C')}>C</button> 
                <button onClick={() => props.onClick('DEL')}>DEL</button>
                <button  onClick={() => props.onClick('/')}>/</button>
            </div>
            <div className="buttonRow">
                <button className="number" onClick={() => props.onClick(7)}>7</button>
                <button className="number" onClick={() => props.onClick(8)}>8</button>
                <button className="number" onClick={() => props.onClick(9)}>9</button>
                <button  onClick={() => props.onClick('*')}>x</button>
            </div>
            <div className="buttonRow"> 
                <button className="number" onClick={() => props.onClick(4)}>4</button>
                <button className="number" onClick={() => props.onClick(5)}>5</button>
                <button className="number" onClick={() => props.onClick(6)}>6</button>
                <button  onClick={() => props.onClick('-')}>-</button>
            </div>
            <div className="buttonRow"> 
                <button className="number" onClick={() => props.onClick(1)}>1</button> 
                <button className="number" onClick={() => props.onClick(2)}>2</button> 
                <button className="number" onClick={() => props.onClick(3)}>3</button>
                <button  onClick={() => props.onClick('+')}>+</button>
            </div>
            <div className="buttonRow"> 
                <button>+/-</button> 
                <button className="number" onClick={() => props.onClick(0)}>0</button> 
                <button onClick={() => props.onClick('.')}>.</button>
                <button onClick={() => props.onClick('=')}>=</button>
            </div>
        </div>
        </>
    )
}

export default Buttons
