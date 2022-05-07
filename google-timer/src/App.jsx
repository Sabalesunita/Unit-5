
import { useState } from 'react';
import './App.css';
import {StopWatch} from "./components/stopwatch";
import {Timer} from "./components/timer"

function App() {
  const [show, setShow]=useState(true)
  return (
    <div className="App">
     {show ? <StopWatch></StopWatch> : <Timer></Timer>}
     <button onClick={()=>setShow(!show)}>Show {show ? "Timer" : "StopWatch"}</button>
    </div>
  );
}

export default App;