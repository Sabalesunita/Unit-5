import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Todo } from './components/Todo';

function App() {
	const data = 'hiee';
	const [message, setmessage] = React.useState('');
	return (
		<div className="App">
			{/* <First
				data={data}
				getfu={(data) => {
					console.log(data);
					setmessage(data);
				}}
			></First>
			<Second data={data} message={message} /> */}
			<Todo></Todo>
		</div>
	);
}

export default App;