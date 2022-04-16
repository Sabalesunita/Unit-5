import { Todoinput } from './TodoInput';

import React from 'react';
import { TodoText } from './TodoText';
import { nanoid } from 'nanoid';
function Todo() {
	const [todoList, settodoList] = React.useState([]);

	function get(todo) {
		const payload = {
			title: todo,
			status: false,
			id: nanoid(3),
		};
		settodoList([...todoList, payload]);
	}

	const handleStatus = (id) => {
		settodoList([...todoList.map(e => e.id == id ? {...e, status:!e.status}:e)])
	};
	return (
		<div>
			<Todoinput get={get} />
			<div className="flex1">
				{todoList.map((e) => {
					return <TodoText todo={e} handleStatus={handleStatus} />;
				})}
			</div>
		</div>
	);
}

export { Todo };