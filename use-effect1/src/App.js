import Counter from './components/Timer';
import './App.css';
import { useState } from 'react';

function App() {
  var [show, setShow]= useState(true);

  const hideCounter=()=>{
    setShow(!show)
  }

  return (
    <div className="App">
      {show?<Counter/>:null}
      <button type="checkbox" onClick={()=>hideCounter()}>{show? "Hide Timer":"Show Timer"}</button>
    </div>
  );
}

export default App;