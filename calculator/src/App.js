import React from 'react'
import {useState} from 'react'
import './App.css'

const App = () => {
  const [input, setInput] = useState('5980');

  const handleSubmit = (value)=> {
    if(value === 'C'){
      setInput('')
    }else if( value === '<'){
      setInput(input.slice(0,-1))
    }
  }
  return (
    <div className='container'>
    <div className="calc">
      <h1 id="input">{input}</h1>
      <div>
        <button onClick={() => handleSubmit('C')}>C</button>
        <button onClick={() => handleSubmit('<')}>&lt;</button>
        <button onClick={() => handleSubmit('%')}>%</button>
        <button onClick={() => handleSubmit('/')}>/</button>
      </div>
      <div>
        <button onClick={() => handleSubmit('7')}>7</button>
        <button onClick={() => handleSubmit('8')}>8</button>
        <button onClick={() => handleSubmit('9')}>9</button>
        <button onClick={() => handleSubmit('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleSubmit('4')}>4</button>
        <button onClick={() => handleSubmit('5')}>5</button>
        <button onClick={() => handleSubmit('6')}>6</button>
        <button onClick={() => handleSubmit('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleSubmit('1')}>1</button>
        <button onClick={() => handleSubmit('2')}>2</button>
        <button onClick={() => handleSubmit('3')}>3</button>
        <button onClick={() => handleSubmit('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleSubmit('0')}>0</button>
        <button onClick={() => handleSubmit('00')}>00</button>
        <button onClick={() => ('.')}>.</button>
        <button onClick={() => handleSubmit('=')}>=</button>
      </div>
    </div>
    </div>
  )
}

export default App

