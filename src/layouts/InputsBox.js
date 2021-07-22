const InputsBox = ({ inputs, change, click, errors }) => {
	// console.log(errors);
	return (
		<div className="ToDoList__inputsBox">
			<label htmlFor="taskTitle">Task title:</label>
			<input
				id="taskTitle"
				type="text"
				className="ToDoList__inputsBox__taskTitle"
				name="taskHeader"
				value={inputs.taskHeader}
				onChange={change}
			/>
			<span className="ToDoList__inputsBox__taskTitleErr">
				{errors.taskHeaderError ? "Title error" : null}
			</span>
			<label htmlFor="taskDesc">Task description:</label>
			<textarea
				id="taskDesc"
				type="text"
				className="ToDoList__inputsBox__taskDesc"
				name="taskDesc"
				value={inputs.taskDesc}
				onChange={change}
			/>
			<span className="ToDoList__inputsBox__taskDescErr">
				{errors.taskDescError ? "Desc error" : null}
			</span>
			<button onClick={click}>Add</button>
		</div>
	);
};

export default InputsBox;
