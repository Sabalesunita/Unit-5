import { useState } from 'react';

export const Inventory = () => {
    const [inv, setInv] = useState({
       books: Math.floor(Math.random() * 100),
       notebooks: Math.floor(Math.random() * 100),
       pens: Math.floor(Math.random() * 100),
       inkpens: Math.floor(Math.random() * 100),
	});
	// Create add and remove functions here that changes the
	// state.
	if (inv.books < 0) {
		inv.books = 0;
	}
	if (inv.notebooks < 0) {
		inv.notebooks = 0;
	}
	if (inv.pens < 0) {
		inv.pens = 0;
	}
	if (inv.inkpens < 0) {
		inv.inkpens = 0;
	}
	function ChangeBook(value) {
		return setInv({
			books: inv.books + value,
			notebooks: inv.notebooks,
			pens: inv.pens,
			inkpens: inv.inkpens,
		});
	}
	function ChangeNote(value) {
		return setInv({
			books: inv.books,
			notebooks: inv.notebooks + value,
			pens: inv.pens,
			inkpens: inv.inkpens,
		});
	}
	function ChangePen(value) {
		return setInv({
			books: inv.books,
			notebooks: inv.notebooks,
			pens: inv.pens + value,
			inkpens: inv.inkpens,
		});
	}
	function Changeink(value) {
		return setInv({
			books: inv.books,
			notebooks: inv.notebooks,
			pens: inv.pens,
			inkpens: inv.inkpens + value,
		});
	}

	return (
		<div
			style={{
				border: '1px solid black',
				borderRadius: '3px',
				padding: '10px',
				display: 'flex',
				flexDirection: 'column',
				width: '400px',
			}}
		>
			<div className="items">
				<span>Books: </span>
				<button
					className="circlularButton"
					onClick={() => {
						ChangeBook(1);
					}}
				>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => {
						ChangeBook(-1);
					}}
				>
					-
				</button>
				<span>{inv.books}</span>
			</div>
			<div className="items">
				<span>Notebooks: </span>
				<button
					className="circlularButton"
					onClick={() => {
						ChangeNote(1);
					}}
				>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => {
						ChangeNote(-1);
					}}
				>
					-
				</button>
				<span>{inv.notebooks}</span>
			</div>
			<div className="items">
				<span>Pen: </span>
				<button
					className="circlularButton"
					onClick={() => {
						ChangePen(1);
					}}
				>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => {
						ChangePen(-1);
					}}
				>
					-
				</button>
				<span>{inv.pens}</span>
			</div>
			<div className="items">
				<span>Ink Pens: </span>
				<button
					className="circlularButton"
					onClick={() => {
						Changeink(1);
					}}
				>
					+
				</button>
				<button
					className="circlularButton"
					onClick={() => {
						Changeink(-1);
					}}
				>
					-
				</button>
				<span>{inv.inkpens}</span>
			</div>
			total: {inv.books + inv.notebooks + inv.pens + inv.inkpens}
		</div>
	);
};
