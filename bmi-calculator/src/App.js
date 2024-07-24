import React, { useMemo } from 'react'
import { useState } from 'react'
import './App.css';

function App() {
  const [weight, setWeight] = useState(180)
  const [height, setHeight] = useState(70)

  function onWeight(e){
    setWeight(e.target.value)
  }

  function onHeight(e){
    setHeight(e.target.value)
  }
  const output = useMemo(()=>{
      const calculateHeight = height / 100;

      return(weight / (calculateHeight*calculateHeight)).toFixed(1)
  },[weight,height])
  return (
    <main>
      <h1>Project 4: BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight} kg</p>
        <input className="slider-input" type="range"
          step="1"
          min="40"
          max="200" 
          onChange={onWeight}/>
        <p className="slider-option">Height:{height}cm</p>
        <input className="slider-input" type="range"
          step="1"
          min="140"
          max="220" 
          onChange={onHeight}/>
      </div>
      <div className="output-section">
        <p>Your BMI is: </p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
