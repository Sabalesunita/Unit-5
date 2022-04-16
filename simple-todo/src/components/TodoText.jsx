export function TodoText({ todo, handleStatus }) {
	return (
		<div className="h1">
			<h1>
				{todo.title}  {todo.status ? 'Add' : 'Remove'}
			</h1>
			<button onClick={() => handleStatus(todo.id)}>Toggle</button>
		</div>
	);
}