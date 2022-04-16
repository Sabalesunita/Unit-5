import React from 'react';

function Todoinput({ get }) {
	const [text, settext] = React.useState("");
	return (
		<div>
			<div className="box">
				<input
					type="text"
					placeholder="Write Something"
					onChange={(e) => {
						
						settext(e.target.value);
					}}
				/>
				<button onClick={() => get(text)} className="plus">+</button>
				{/* <h1>{text}</h1> */}
			</div>
		</div>
	);
}

export { Todoinput };