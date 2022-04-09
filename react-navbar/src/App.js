import logo from './logo.svg';
import './App.css';

function App() {
	

	const links = ['Services','Projects','About'];

	return (
		<div className="App">
			<div>
                <h1>LOGOBAKERY</h1>
			</div>
			<div id="compo">
                {links.map((e)=>{
					return <Links link={e}></Links>
				})}
			</div>
			<div>
				<button>Contact</button>
			</div>
		</div>
	);
}

function Links(props) {
	return <p>{props.link}</p>;
}

export default App;