import logo from './logo.svg';
import './App.css';

function App() {
	const text = 'another';

	const mobileos = ['Android', 'Blackberry', 'Iphone', `Window's iphone`];


	const maufacturer =['Samsung','HTC','Micromax','Apple']
	return (
		<div className="App">
			<div>
				<h1>Mobile Operating System</h1>
				{mobileos.map((e) => {
					return (
						<ul>
							<MobileOS os={e}></MobileOS>
						</ul>
					);
				})}
			</div>
			<div>
				<h1>Mobile Manufacturer</h1>
				{maufacturer.map((e) => {
					return (
						<ul>
							<MobileManu os={e}></MobileManu>
						</ul>
					);
				})}
			</div>
		</div>
	);
}

function MobileOS(props) {
	return <li>{props.os}</li>;
}

function MobileManu(props) {
	return <li>{props.os}</li>;
}

export default App;