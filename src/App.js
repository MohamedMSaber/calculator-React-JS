import { useState } from "react";



export default function App() {
  const [claculation, setClaculation] = useState("");
  const [result, setResult] = useState('');
  const operations = ['/','*','+','-','.'];

  function showNums() {
    const nums = [];
    for (let i = 1; i < 10; i++) {
      nums.push(
        <button 
        onClick={()=>{updateCalc(i.toString())}}
        key={i}>{i}</button>
      )
    }
    return nums;
  }

  function updateCalc(x) {
    if (
      operations.includes(x)&&claculation ==='' ||
      operations.includes(x)&& operations.includes(claculation.slice(-1)) 
    ) {
      return;
    }
    if (!operations.includes(x)) {
      setResult(eval(claculation+x).toString())
    }

    setClaculation(claculation+x)
  }

  function calc() {
    setClaculation(eval(claculation).toString());
  }

  function clearScreen(params) {
    if (claculation == ''){
      return;
    }
    const vlaue= claculation.slice(0,-1);
    setClaculation(vlaue);
  }

  return (
    <div className="App">
      <div className="calc">
        <div className="screen">
          {result ? <span>({result})</span> : ''}{claculation || "0"}
        </div>
        <div className="operations">
          <button onClick={()=>{updateCalc('+')}}>+</button>
          <button onClick={()=>{updateCalc('-')}}>-</button>
          <button onClick={()=>{updateCalc('*')}}>*</button>
          <button onClick={()=>{updateCalc('/')}}>/</button>
          <button onClick={()=>{clearScreen()}}>DEL</button>
        </div>
        <div className="in">
          {showNums()}
          <button onClick={()=>{updateCalc('0')}}>0</button>
          <button onClick={()=>{updateCalc('.')}}>.</button>
          <button onClick={()=>{calc()}}>=</button>
        </div>

      </div>
    </div>
  );
}

