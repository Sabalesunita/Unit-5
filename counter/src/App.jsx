import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
	const [counter,setCounter]=React.useState(0)
   
	function  Changevalue(value){
       return setCounter(counter+value)
	}
	function Double(value){
		return setCounter(counter*value)
	}
	return (
		<div className="App">
			<h1>Counter</h1>
			<h1 className={counter % 2 == 0 ? 'green' : 'red'}>{counter}</h1>
			<button onClick={() => Changevalue(1)}>Increment</button>
			<button onClick={() => Changevalue(-1)}>Decrement</button>
			<button onClick={() => Double(2)}>Double</button>
		</div>
	);
}


export default App;